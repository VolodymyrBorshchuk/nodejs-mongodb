const fs = require('fs')
const zlib = require('zlib')

const readStream = fs.createReadStream('./documents/text.txt');
const writeStream = fs.createWriteStream('./documents/new-text.txt')
const compressStream = zlib.createGzip()

// readStream.on('data', (chunk) => {
//     writeStream.write(`\n---CHUNK START---\n`)
//     writeStream.write(chunk)
//     writeStream.write(`\n---CHUNK END---\n`)
// })

const handleError = () => {
    console.log("Error")
    readStream.destroy();
    writeStream.end('Finishedd with error');
}

readStream
    .on('error', handleError)
    .pipe(compressStream)
    .pipe(writeStream)
    .on('error', handleError)