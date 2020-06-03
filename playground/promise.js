// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve([1, 4, 7]);
//     reject("Things went wrong!");
//     //* Even if we add more it won't run
//     // resolve([1, 2, 3]);
//     // reject("Are you going to work?");
//   }, 2000);
// });
// //* .then is used for when it went well
// doWorkPromise
//   .then((result) => {
//     console.log("Success", result);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });

// //* 둘중에 하나만 실행됨

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// add(1, 2)
//   .then((sum) => {
//     console.log(sum);
//     add(sum, 5)
//       .then((sum2) => {
//         console.log(sum2);
//       })
//       .catch((e) => {
//         console.log(error);
//       });
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//promise chaining

add(1, 2).then((sum) => {
  console.log(sum);
  return add(sum, 4);
}),
  then((sum2) => {
    console.log(sum2);
  }).catch((e) => {
    console.log(error);
  });
