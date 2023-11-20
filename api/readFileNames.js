// Use this file to list file names and some attributes
// with specific file extension..

import { readdirSync, lstatSync, writeFileSync } from "fs";
import { join } from "path";

function findInDir(dir, filter, fileList = []) {
  const files = readdirSync(dir);

  files.forEach((file) => {
    const filePath = join(dir, file);
    const fileStat = lstatSync(filePath);

    if (fileStat.isDirectory()) {
      findInDir(filePath, filter, fileList);
    } else if (filter.test(filePath)) {
      // find '/assets/' string in the string
      let index = filePath.indexOf("/assets/");
      // slice file path starting index
      let newFileName = filePath.slice(index);
      // split with '/' and push in an arr from path
      let arrFolders = newFileName.split("/");

      // Write your object template to push
      fileList.push({
        fileRelativePath: newFileName,
        testName: arrFolders[3],
        situationNumber: arrFolders[4],
      });
    }
  });

  return fileList;
}

// Usage
let filePathToFind = join(__dirname, "../client/public/assets/tests");
let fileNames = findInDir(filePathToFind, /\.(jpg|jpeg)$/);

let data = JSON.stringify(fileNames);
writeFileSync("./fileNames.json", data);
