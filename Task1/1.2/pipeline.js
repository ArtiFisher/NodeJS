const csv = require('csvtojson');
const fs = require('fs');

const filename = 'Task1/1.2/csv/Example'
const input = `${filename}.csv`
const output = `${filename}.txt`

const readStream = fs.createReadStream(input);
const writeStream = fs.createWriteStream(output);

readStream
.on('error', console.log)
.pipe(csv())
.on('error', console.log)
.pipe(writeStream)
.on('error', console.log);
