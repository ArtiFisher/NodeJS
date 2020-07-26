const csv = require('csvtojson');
const fs = require('fs');

const filename = 'Task1/1.2/csv/Example'

const readStream = fs.createReadStream(`${filename}.csv`);
const writeStream = fs.createWriteStream(`${filename}.txt`);

readStream
.on('error', console.log)
.pipe(csv())
.on('error', console.log)
.pipe(writeStream)
.on('error', console.log);
