const csv = require('csvtojson');
const fs = require('fs');

const filename = 'Task1/1.2/csv/Example'
const input = `${filename}.csv`
const output = `${filename}.txt`

csv()
.on('error', console.error)
.fromFile(input)
.then(data => {
    const writer = fs.createWriteStream(output)
    writer.on('error', console.error)
    data.forEach(line => writer.write(JSON.stringify(line) + '\n'))
})
