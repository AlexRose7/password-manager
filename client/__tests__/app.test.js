/**
 * @jest-environment jsdom
 */


// import path, { dirname } from 'path';
// import { fileURLToPath } from 'url';
// import input from '../__fixtures__/input.json';
// import result from '../__fixtures__/result.js';
// import app from '../app/app.js'

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);


test.todo('получение приветствия')

// const makePlainTestString = (filePath) => {
//   const str = readFile(getFixturePath(filePath));
//   return str;
// };

// const makeJsonTestString = (filePath) => {
//   const str = `[${JSON.stringify(readFile(getFixturePath(filePath)))}]`;
//   return str;
// };
// const output56 = readFile('./__fixtures__/output_56');
// const output34Plain = makePlainTestString('output_34_plain');
// const output34Json = makeJsonTestString('output_34.json');
// const extensions = [['yaml'], ['json']];
// const stylishTestTable = [['file1', 'file2', output12], ['file3', 'file4', output34], ['file5', 'file6', output56]];
// const formatTestTable = [['file3', 'file4', 'stylish', output34], ['file3', 'file4', 'plain', output34Plain], ['file3', 'file4', 'json', output34Json]];

// describe.each(extensions)('stylishTest with %s files', (extension) => {
//   test.each(stylishTestTable)(`test ${extension} %s + %s`, (a, b, res) => {
//     expect(genDiff(getFixturePath(`${a}.${extension}`), getFixturePath(`${b}.${extension}`))).toEqual(res);
//   });
// });
// describe.each(extensions)('test with %s format', (extension) => {
//   test.each(formatTestTable)(`formatTest ${extension} %s + %s`, (a, b, format, res) => {
//     expect(genDiff(getFixturePath(`${a}.${extension}`), getFixturePath(`${b}.${extension}`), format)).toEqual(res);
//   });
// });
