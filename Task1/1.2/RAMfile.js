import csv from 'csvtojson';
import fs from 'fs';
import { input, output } from './config.js';
import { PassThrough } from 'stream';
import formatter from './formatter.js';

const dataFeed = new PassThrough();
const writeStream = fs.createWriteStream(output);

csv()
    .on('error', console.error)
    .fromFile(input)
    .then(data => {
        data.forEach(item => dataFeed.push(JSON.stringify(item))); // feed each chunk of data to pipe

        dataFeed
            .on('error', console.log)
            .pipe(formatter)
            .on('error', console.log)
            .pipe(writeStream)
            .on('error', console.log);
    });
