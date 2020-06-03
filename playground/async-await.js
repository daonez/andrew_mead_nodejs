// const doWork = async () => {
//   throw new Error("Something went wrong");
//   return "Fran";
// };

// doWork()
//   .then((result) => {
//     console.log("result", result);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject("Numbers must be non-negative");
      }
      resolve(a + b);
    }, 2000);
  });
};
const doWork = async () => {
  const sum = await add(1, 99);
  const sum2 = await add(sum, 50);
  const sum3 = await add(sum, -3);
  return sum3;
};

doWork()
  .then((result) => {
    console.log("result", result);
  })
  .catch((error) => {
    console.log("error", error);
  });
//Promise chainging 단점. then then 으로 이저지니까 보기 불편,
//scope을 한곳에 묶어서 볼수있음 그래서 자유롭다?

//Promuise
// add(1, 2).then((sum) => {
//   console.log(sum);
//   return add(sum, 4);
// }),
//   then((sum2) => {
//     console.log(sum2);
//   }).catch((e) => {
//     console.log(error);
//   });
