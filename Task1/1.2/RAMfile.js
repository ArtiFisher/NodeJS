const csv = require('csvtojson');
const fs = require('fs');

const filename = 'Task1/1.2/csv/Example'
const input = `${filename}.csv`
const output = `${filename}.txt`

fs.readFile(input, function (err, data) {
    if (err) throw err;
    fs.writeFile(output, data, (err) => {
        if (err) throw err;
      })
});
