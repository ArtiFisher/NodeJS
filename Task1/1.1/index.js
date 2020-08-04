import { Transform } from 'stream';

const reverser = new Transform ({
  transform: (data, encoding, callback) => {
    callback(
      null,
      data
      .toString('utf8')
      .replace(/\n/, "") // excludes input \n from reverse process
      .split("")
      .reverse()
      .join("")
      .concat('\n\n')) // adds a few new lines to separate inputs
  }
})

process.stdin
  .pipe(reverser)
  .pipe(process.stdout);
