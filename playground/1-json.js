const fs = require("fs");

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// // const bookJSON = JSON.stringify(book);
// // console.log(bookJSON);

// // const parseData = JSON.parse(bookJSON);
// // console.log(parseData);

// //fs.writeFileSync("1-json.json", bookJSON)
// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data);

// //* What i did  overwrite original data
// const readJSON = fs.readFileSync("1-json.json");
// const dataJSON = readJSON.toString();
// console.log(dataJSON);

// const newData = { name: "fran", planet: "earth", age: 30 };
// const newDataJSON = JSON.stringify(newData);
// console.log(newDataJSON);
// const overWrite = fs.writeFileSync("1-json.json", newDataJSON);
// console.log(overWrite);

// * Simple way(Right way?)
const readJSON = fs.readFileSync("1-json.json");
const dataJSON = readJSON.toString();
const changeData = JSON.parse(dataJSON);
console.log(changeData);

changeData.name = "John";
changeData.age = 50;

const newJSON = JSON.stringify(changeData);
console.log(newJSON);
fs.writeFileSync("1-json.json", newJSON);
