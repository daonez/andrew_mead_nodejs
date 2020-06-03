// const square1 = function (x) {
//   return x * x;
// };

// const square2 = (x) => {
//   return x * x;
// };

// const square3 = (x) => x * x;

// console.log(square1(2));
// console.log(square2(3));
// console.log(square3(4));

// const event = {
//   name: "Birthday Party",
//   printGuestList: function () {
//     console.log("Guest list for " + this.name);
//   },
// };

// event.printGuestList();

// const event = {
//   name: "Birthday Party",
//   printGuestList: () => {
//     console.log("Guest list for " + this.name);
//   },
// };

// event.printGuestList();

const event = {
  name: "Birthday Party",
  guestList: ["Andrew", "Jen", "Mike"],
  printGuestList() {
    console.log("Guest list for " + this.name);
    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};

event.printGuestList();
