import fs from "fs";
import path from "path";

// Source folder path
const sourceFolder = "./template";

// Get the new folder name from command-line arguments
const [, , ...args] = process.argv;
const newFolderName = args[0];

// Check if the new folder name is provided
if (!newFolderName) {
  console.log("Please provide the new folder name as an argument.");
  process.exit(1);
}

// Resolve the absolute paths for the source and destination folders
const sourcePath = path.resolve(sourceFolder);
const destinationPath = path.join(
  path.dirname(sourcePath),
  "demos",
  newFolderName
);

// Copy the source folder to the destination folder recursively
fs.cpSync(sourcePath, destinationPath, { recursive: true });

// List of files to rename
const filesToRename = [
  { oldName: "template.ts", newName: `${newFolderName}.ts` },
  { oldName: "template.html", newName: `${newFolderName}.html` },
];

// Rename files
for (const { oldName, newName } of filesToRename) {
  const oldPath = path.join(destinationPath, oldName);
  const newPath = path.join(destinationPath, newName);
  fs.renameSync(oldPath, newPath);
}

// List of files to modify
const filesToModify = [
  path.join(destinationPath, `${newFolderName}.ts`),
  path.join(destinationPath, `${newFolderName}.html`),
];

// Modify the specified files
for (const file of filesToModify) {
  // Read the file content
  let content = fs.readFileSync(file, "utf8");

  // Replace all occurrences of 'template' with the new folder name
  content = content.replace(/template/g, newFolderName);

  // Write the modified content back to the file
  fs.writeFileSync(file, content, "utf8");
}

console.log(`Folder duplicated and modified successfully: ${destinationPath}`);
