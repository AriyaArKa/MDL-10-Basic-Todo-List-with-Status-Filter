// 1. Create an array of todo items
const todos = [
  { title: "Do homework", done: false },
  { title: "Wash dishes", done: true },
  { title: "Pay bills", done: false },
  { title: "Read a book", done: true },
  { title: "Go for a run", done: false },
];

// 2. Filter the todos into two separate arrays
const doneTasks = todos.filter((task) => task.done);
const ongoingTasks = todos.filter((task) => !task.done);

// 3. Display the tasks
console.log("=== Done ===");
if (doneTasks.length) {
  doneTasks.forEach((task, i) => {
    console.log(`${i + 1}. ${task.title}`);
  });
} else {
  console.log("No completed tasks.");
}

console.log("\n=== Ongoing ===");
if (ongoingTasks.length) {
  ongoingTasks.forEach((task, i) => {
    console.log(`${i + 1}. ${task.title}`);
  });
} else {
  console.log("No ongoing tasks.");
}
