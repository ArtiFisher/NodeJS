import csv from 'csvtojson';
import fs from 'fs';
import { input, output } from './config.js';
const path = require('path');

const filename = path.resolve(__dirname, 'csv/Example')

csv()
.on('error', console.error)
.fromFile(input)
.then(data => {
    const writer = fs.createWriteStream(output)
    writer.on('error', console.error)
    data.forEach(line => writer.write(JSON.stringify(line) + '\n'))
})
