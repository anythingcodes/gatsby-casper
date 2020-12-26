#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, 'new-post-template.md');
const pathToNewDestination = path.join(__dirname, '../src/content', '_POST.md');

try {
  fs.copyFileSync(pathToFile, pathToNewDestination);

  fs.readFile(pathToNewDestination, 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }

    const result = data.replace(/\$DATE/g, new Date().toISOString());

    fs.writeFile(pathToNewDestination, result, 'utf8', err => {
      if (err) {
        return console.log(err);
      }
    });
  });
  console.log('Successfully copied and moved the file!');
} catch (err) {
  throw err;
}
