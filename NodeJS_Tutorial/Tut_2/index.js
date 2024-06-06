const fs = require('fs');
const path = require('path');


// fs.readFile('./files/starter.txt', (err, data) => {
//     if (err) throw err;
//     // console.log(data); gives Buffered data
//     console.log(data.toString());
// })

//Alternatively, instead of using toString() we can do this

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    // console.log(data); gives Buffered data
    console.log(data);
})

console.log('Hello World');



fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
    if (err) throw err;
    console.log('Write Complete');


    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is.', (err) => {
        if (err) throw err;
        console.log('Append Complete');


        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
            if (err) throw err;
            console.log('Rename Complete');
        })
    })
})

// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'Testing text.', (err) => {
//     if (err) throw err;
//     console.log('Append Complete');
// })

//exit on uncaught error
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`); // different type of inverted comma
    process.exit(1);
})