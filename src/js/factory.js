export function project(name, description, dueDate) {
  let todos = [];

  function addTodo(name, priority) {
    let todo = {
      id: Date.now(),
      name: name,
      priority: priority,
    };
    todos.push(todo);
  }

  return {
    name,
    description,
    dueDate,
    todos,
    addTodo,
  };
}
