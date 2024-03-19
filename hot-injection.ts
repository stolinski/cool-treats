// vite-plugin-inject-html.ts
import { readFileSync, existsSync, readdirSync } from "fs";
import path from "path";
import { Plugin } from "vite";

interface InjectHtmlOptions {
  ignored_tags?: string[];
  templates_dir?: string;
}

const VirtualModuleId = "virtual:injected-templates";
const VirtualModuleResolver = `/${VirtualModuleId}`;

export function InjectHtml(options: InjectHtmlOptions = {}): Plugin {
  const { ignored_tags = [], templates_dir = "templates" } = options;

  const transformHtmlContent = (htmlContent: string) => {
    return htmlContent.replace(/\{%(\w+)%\}/g, (match, filename) => {
      if (ignored_tags.includes(filename)) {
        return match;
      }

      const templatePath = path.resolve(
        process.cwd(),
        templates_dir,
        `${filename}.html`
      );
      if (existsSync(templatePath)) {
        return readFileSync(templatePath, "utf-8");
      } else {
        console.error(`Template file not found: ${templatePath}`);
        return match;
      }
    });
  };

  return {
    name: "inject-html",

    resolveId(id) {
      if (id === VirtualModuleId) {
        return VirtualModuleResolver;
      }
    },

    load(id) {
      if (id === VirtualModuleResolver) {
        return "/* virtual module for HTML templates */";
      }
    },

    handleHotUpdate({ file, server }) {
      if (file.startsWith(path.resolve(process.cwd(), templates_dir))) {
        server.ws.send({
          type: "full-reload",
          path: "*", // Reload all paths
        });
      }
    },

    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        let accumulatedBody = Buffer.from("");
        const originalWrite = res.write.bind(res);
        const originalEnd = res.end.bind(res);

        res.write = function (chunk: any, ...args: any[]): boolean {
          accumulatedBody = Buffer.concat([
            accumulatedBody,
            Buffer.from(chunk),
          ]);
          return originalWrite(chunk, ...args);
        };

        res.end = function (chunk?: any, ...args: any[]) {
          if (chunk) {
            accumulatedBody = Buffer.concat([
              accumulatedBody,
              Buffer.from(chunk),
            ]);
          }
          if (
            res.getHeader("Content-Type")?.includes("text/html") &&
            accumulatedBody
          ) {
            const transformedHtml = transformHtmlContent(
              accumulatedBody.toString()
            );
            // Append a unique timestamp comment to the HTML content
            const timestampedHtml = `${transformedHtml}\n<!-- Cache-bust: ${Date.now()} -->`;
            return originalEnd(timestampedHtml, ...args);
          } else {
            return originalEnd(chunk, ...args);
          }
        };

        next();
      });
    },
  };
}
