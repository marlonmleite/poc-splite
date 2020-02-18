const fs = require('fs');
const path = require('path');
const yargs = require('yargs');

const rootDir = path.join(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const entryFile = path.join(srcDir, 'template.js');
const outputFile = path.join(srcDir, 'index.js');
const template = yargs.argv.template || 'ipdv';

const supportedTemplates = ['parceiro', 'ipdv'];

if (!supportedTemplates.includes(template)) {
  console.error('ERROR! An error was encountered while executing');
  console.error(`The current template "${template}" isn't supported.`);
  console.log('Exiting with error.');
  process.exit(1);
}

fs.readFile(entryFile, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  const result = data.replace(/#APP_NAME#/g, template);

  fs.writeFile(outputFile, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});

console.log();
console.log(`✔️  Success generated template with name "${template}". 💖`);
console.log();
