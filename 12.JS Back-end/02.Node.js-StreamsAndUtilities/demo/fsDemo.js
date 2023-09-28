const fs = require('fs');
const fsPromises = require('fs/promises')

// const data = fs.readFileSync('./package.json');
// console.log(data.toString());

// fs.writeFileSync('./package_copy.json', data);

// console.log('copy complete!');




// console.log('before');
// handleFile();
// console.log('after');

// function handleFile() {
//     fs.readFile('./package.json',  (err, data) => {
//         console.log(data.toString());
//     });
// }



console.log('before');
handleFile();
console.log('after');

async function handleFile() {
    const data = await fsPromises.readFile('./package.json');
    console.log(data.toString());
    await fsPromises.writeFile('./package-copy2.json', data);
}
