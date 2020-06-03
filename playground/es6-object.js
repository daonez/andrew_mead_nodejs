//**object shorthand

// const name = "andrew";
// const userAge = 27;

// const user = {
//   name: name,
//   age: userAge,
//   location: "phili",
// };

// console.log(user);

//*es6

const name = "andrew";
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: "phili",
};

console.log(user);

//* object destructuring

const product = {
  label: "red note book",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

// const label = product.label;
// const stock = product.stock;

//* 대신에
//* label:productLabel 이라고도 변경가능, default value 선언가능
// // salePrice = 5 등
// const { label, stock } = product;
// console.log(label);
// console.log(stock);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", product);
