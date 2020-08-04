import csv from 'csvtojson';
import fs from 'fs';
import { input, output } from './config.js';
import formatter from './formatter.js';

const readStream = fs.createReadStream(input);
const writeStream = fs.createWriteStream(output);

readStream
    .on('error', console.log)
    .pipe(csv())
    .on('error', console.log)
    .pipe(formatter)
    .on('error', console.log)
    .pipe(writeStream)
    .on('error', console.log);
