export const theme = {
  name: "Level Up",
  settings: [
    {
      settings: {
        background: "#191324",
        caret: "#FFFFFF",
        foreground: "#AAAAAA",
        invisibles: "#FFFFFF1A",
        lineHighlight: "#52476366",
        selection: "#82D8D8",
      },
    },
    {
      name: "Comment",
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        fontStyle: "italic",
        foreground: "#82D8D8",
      },
    },
    {
      name: "Constant",
      scope: "constant",
      settings: {
        foreground: "#FF628C",
      },
    },
    {
      name: "Entity",
      scope: "entity",
      settings: {
        foreground: "#82D8D8",
      },
    },
    {
      name: "Invalid",
      scope: "invalid",
      settings: {
        foreground: "#800F00",
      },
    },
    {
      name: "Keyword",
      scope: "keyword, storage.type.class.js",
      settings: {
        foreground: "#E54B4B",
      },
    },
    {
      name: "Meta",
      scope: "meta",
      settings: {
        foreground: "#9EFFFF",
      },
    },
    {
      name: "Meta Brace",
      scope: "meta.brace",
      settings: {
        foreground: "#9588AA",
      },
    },
    {
      name: "Punctuation",
      scope: "punctuation",
      settings: {
        foreground: "#9588AA",
      },
    },
    {
      name: "Punctuation Parameters",
      scope: "punctuation.definition.parameters",
      settings: {
        foreground: "#CBE56C",
      },
    },
    {
      name: "Punctuation Template Expression",
      scope: "punctuation.definition.template-expression",
      settings: {
        foreground: "#CBE56C",
      },
    },
    {
      name: "Storage",
      scope: "storage",
      settings: {
        foreground: "#82D8D8",
      },
    },
    {
      name: "Storage Type Arrow Function",
      scope: "storage.type.function.arrow",
      settings: {
        foreground: "#82D8D8",
      },
    },
    {
      name: "String",
      scope: ["string", "punctuation.definition.string"],
      settings: {
        foreground: "#CBE56C",
      },
    },
    {
      name: "String Template",
      scope: ["string.template", "punctuation.definition.string.template"],
      settings: {
        foreground: "#CBE56C",
      },
    },
    {
      name: "Support",
      scope: "support",
      settings: {
        foreground: "#CF256D",
      },
    },
    {
      name: "Support Function",
      scope: "support.function",
      settings: {
        foreground: "#F0C05E",
      },
    },
    {
      name: "Support Variable Property DOM",
      scope: "support.variable.property.dom",
      settings: {
        foreground: "#B8B0C6",
      },
    },
    {
      name: "Variable",
      scope: "variable",
      settings: {
        foreground: "#B8B0C6",
      },
    },
    {
      name: "[CSS] - Entity",
      scope: ["source.css entity", "source.stylus entity"],
      settings: {
        foreground: "#B8B0C6",
      },
    },
    {
      name: "[CSS] - ID Selector",
      scope: "entity.other.attribute-name.id.css",
      settings: {
        foreground: "#82D8D8",
      },
    },
    {
      name: "[CSS] - Element Selector",
      scope: "entity.name.tag",
      settings: {
        foreground: "#CF256D",
      },
    },
    {
      name: "[CSS] - Support",
      scope: ["source.css support", "source.stylus support"],
      settings: {
        foreground: "#CBE56C",
      },
    },
    {
      name: "[CSS] - Constant",
      scope: [
        "source.css constant",
        "source.css support.constant",
        "source.stylus constant",
        "source.stylus support.constant",
      ],
      settings: {
        foreground: "#82D8D8",
      },
    },
    {
      name: "[CSS] - String",
      scope: [
        "source.css string",
        "source.css punctuation.definition.string",
        "source.stylus string",
        "source.stylus punctuation.definition.string",
      ],
      settings: {
        foreground: "#82D8D8",
      },
    },
    {
      name: "[CSS] - Variable",
      scope: ["source.css variable", "source.stylus variable"],
      settings: {
        foreground: "#9588AA",
      },
    },
    {
      name: "[HTML] - Entity Name",
      scope: "text.html.basic entity.name",
      settings: {
        foreground: "#9588AA",
      },
    },
    {
      name: "[HTML] - ID value",
      scope: "meta.toc-list.id.html",
      settings: {
        foreground: "#CBE56C",
      },
    },
    {
      name: "[HTML] - Entity Other",
      scope: "text.html.basic entity.other",
      settings: {
        fontStyle: "italic",
        foreground: "#B8B0C6",
      },
    },
    {
      name: "[HTML] - Script Tag",
      scope: "meta.tag.metadata.script.html entity.name.tag.html",
      settings: {
        foreground: "#B8B0C6",
      },
    },
    {
      name: "[HTML] - Quotes. these are a slightly different colour because expand selection will then not include quotes",
      scope:
        "punctuation.definition.string.begin, punctuation.definition.string.end",
      settings: {
        foreground: "#92FC79",
      },
    },
    {
      name: "[INI] - Entity",
      scope: "source.ini entity",
      settings: {
        foreground: "#E1EFFF",
      },
    },
    {
      name: "[INI] - Keyword",
      scope: "source.ini keyword",
      settings: {
        foreground: "#524763",
      },
    },
    {
      name: "[INI] - Punctuation Definition",
      scope: "source.ini punctuation.definition",
      settings: {
        foreground: "#FFEE80",
      },
    },
    {
      name: "[INI] - Punctuation Separator",
      scope: "source.ini punctuation.separator",
      settings: {
        foreground: "#FF9D00",
      },
    },
    {
      name: "[JAVASCRIPT] - Storage Type Function",
      scope: "source.js storage.type.function",
      settings: {
        foreground: "#CF256D",
      },
    },
    {
      name: "[JAVASCRIPT] - Variable Language",
      scope: "variable.language, entity.name.type.class.js",
      settings: {
        foreground: "#CF256D",
      },
    },
    {
      name: "[JAVASCRIPT] - Inherited Component",
      scope: "entity.other.inherited-class.js",
      settings: {
        background: "#191324",
        foreground: "#CCCCCC",
      },
    },
    {
      name: "[PYTHON] - Self Argument",
      scope: "variable.parameter.function.language.special.self.python",
      settings: {
        foreground: "#CF256D",
      },
    },
    {
      name: "[JSON] - Support",
      scope: "source.json support",
      settings: {
        foreground: "#B8B0C6",
      },
    },
    {
      name: "[JSON] - String",
      scope: [
        "source.json string",
        "source.json punctuation.definition.string",
      ],
      settings: {
        foreground: "#E1EFFF",
      },
    },
    {
      name: "[MARKDOWN] - Heading Punctuation",
      scope: "punctuation.definition.heading.markdown",
      settings: {
        foreground: "#E1EFFF",
      },
    },
    {
      name: "[MARKDOWN] - Heading Name Section",
      scope: [
        "entity.name.section.markdown",
        "markup.heading.setext.1.markdown",
        "markup.heading.setext.2.markdown",
      ],
      settings: {
        foreground: "#E54B4B",
        fontStyle: "bold",
      },
    },
    {
      name: "[MARKDOWN] - Paragraph",
      scope: "meta.paragraph.markdown",
      settings: {
        foreground: "#E1EFFF",
      },
    },
    {
      name: "[MARKDOWN] - Quote Punctuation",
      scope: "beginning.punctuation.definition.quote.markdown",
      settings: {
        foreground: "#524763",
      },
    },
    {
      name: "[MARKDOWN] - Quote Paragraph",
      scope: "markup.quote.markdown meta.paragraph.markdown",
      settings: {
        fontStyle: "italic",
        foreground: "#9EFFFF",
      },
    },
    {
      name: "[MARKDOWN] - Separator",
      scope: "meta.separator.markdown",
      settings: {
        foreground: "#524763",
      },
    },
    {
      name: "[MARKDOWN] - Emphasis Bold",
      scope: "markup.bold.markdown",
      settings: {
        fontStyle: "bold",
        foreground: "#9EFFFF",
      },
    },
    {
      name: "[MARKDOWN] - Emphasis Italic",
      scope: "markup.italic.markdown",
      settings: {
        fontStyle: "italic",
        foreground: "#9EFFFF",
      },
    },
    {
      name: "[MARKDOWN] - Lists",
      scope: "beginning.punctuation.definition.list.markdown",
      settings: {
        foreground: "#524763",
      },
    },
    {
      name: "[MARKDOWN] - Link Title",
      scope: "string.other.link.title.markdown",
      settings: {
        foreground: "#CBE56C",
      },
    },
    {
      name: "[MARKDOWN] - Link/Image Title",
      scope: [
        "string.other.link.title.markdown",
        "string.other.link.description.markdown",
        "string.other.link.description.title.markdown",
      ],
      settings: {
        foreground: "#CBE56C",
      },
    },
    {
      name: "[MARKDOWN] - Link Address",
      scope: [
        "markup.underline.link.markdown",
        "markup.underline.link.image.markdown",
      ],
      settings: {
        foreground: "#9EFFFF",
      },
    },
    {
      name: "[MARKDOWN] - Inline Code",
      scope: ["fenced_code.block.language", "markup.inline.raw.markdown"],
      settings: {
        foreground: "#9EFFFF",
      },
    },
    {
      name: "[MARKDOWN] - Code Block",
      scope: ["fenced_code.block.language", "markup.inline.raw.markdown"],
      settings: {
        foreground: "#9EFFFF",
      },
    },
    {
      name: "[JS,TS] - Storage",
      scope: ["storage.type", "meta.var.expr"],
      settings: {
        foreground: "#CF256D",
      },
    },
    {
      name: "[TYPESCRIPT] - Keyword",
      scope: "source.ts keyword",
      settings: {
        foreground: "#E54B4B",
      },
    },
    {
      name: "[TYPESCRIPT] - Punctuation Parameters",
      scope: "source.ts punctuation.definition.parameters",
      settings: {
        foreground: "#E1EFFF",
      },
    },
    {
      name: "[TYPESCRIPT] - Punctuation Arrow Parameters",
      scope: "meta.arrow.ts punctuation.definition.parameters",
      settings: {
        foreground: "#FFEE80",
      },
    },
    {
      name: "[TYPESCRIPT] - Storage",
      scope: "source.ts storage",
      settings: {
        foreground: "#9EFFFF",
      },
    },
    {
      name: "[PHP] - Entity",
      scope: "source.php entity",
      settings: {
        foreground: "#9EFFFF",
      },
    },
    {
      name: "[PHP] - Variables",
      scope: "variable.other.php",
      settings: {
        foreground: "#524763",
      },
    },
    {
      name: "[TYPESCRIPT] - Comment",
      scope: ["punctuation.definition.comment", "comment.line.double-slash"],
      settings: {
        foreground: "#33FFFFFF",
      },
    },
    {
      name: "Italicsify for Operator Mono",
      scope: [
        "modifier",
        "this",
        "comment",
        "storage.modifier.js",
        "entity.other.attribute-name.js",
      ],
      settings: {
        fontStyle: "italic",
      },
    },
  ],
};
