require("../task-manager/src/db/mongoose");
const Task = require("../task-manager/src/models/tasks");

// Task.findByIdAndDelete("5eca36a4243b4e5c3898d24f")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("5eca36a3e8a1065c35226001")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
