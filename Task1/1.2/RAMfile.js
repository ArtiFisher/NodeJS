const csv = require('csvtojson');
const fs = require('fs');

const filename = 'Task1/1.2/csv/Example'
const input = `${filename}.csv`
const output = `${filename}.txt`

fs.readFile(input, function (err, data) {
    if (err) throw err;
    csv()
    .fromFile(input)
    .then(data => {
        const writer = fs.createWriteStream(output)
        writer.on('error', console.error)
        data.forEach(line => writer.write(JSON.stringify(line) + '\n'))
    })
});
