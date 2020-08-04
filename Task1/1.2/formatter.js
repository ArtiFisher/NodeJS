import { Transform } from 'stream';

export default new Transform ({
  transform: (data, encoding, callback) => {
    const entries = Object.entries(JSON.parse(data.toString('utf8')))
        .filter(([key]) => key != 'Amount')
        .map(([key, value]) => [key.toLowerCase(), key === 'Price' ? parseFloat(value) : value]);
    callback(null, JSON.stringify(Object.fromEntries(entries)).concat('\n'))
  }
})
