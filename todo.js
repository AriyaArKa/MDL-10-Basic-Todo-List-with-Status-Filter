let todos = [
  { title: "learn JS", done: false },
  { title: "Do homework", done: false },
  { title: "Make a simple project", done: true },
  { title: "Understanding the array", done: true },
];

let doneTodos = [];
let ongoingTodos = [];

todos.forEach((todo) => {
  if (todo.done) {
    doneTodos.push(todo);
  } else {
    ongoingTodos.push(todo);
  }
});

console.log("✅ Done todos:");
doneTodos.forEach((todo) => {
  console.log(`- ${todo.title}`);
});

console.log("\n⏳ Ongoing todos:");
ongoingTodos.forEach((todo) => {
  console.log(`- ${todo.title}`);
});
