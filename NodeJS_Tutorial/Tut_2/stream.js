const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, 'files', 'lorem.txt'), {encoding: 'utf8'});

const ws = fs.createWriteStream(path.join(__dirname, 'files', 'new-lorem.txt'));

//Less efficient
// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })

//More efficient to do the same thing
rs.pipe(ws);