import { storageAvailable } from "./storage";

export function initializeUser() {
  let userObject = {};

  userObject.projects = [];

  userObject.project = function (name, description = "", dueDate) {
    let project = {};

    project.id = Date.now();
    project.name = name;
    project.description = description;
    project.dueDate = dueDate;
    project.todos = [];

    userObject.projects.push(project);
  };

  userObject.todo = function (projectId, name) {
    let todo = {};

    todo.id = Date.now();
    todo.name = name;

    for (let project of userObject.projects) {
      if (project.id == projectId) {
        project.todos.push(todo);
      }
    }
  };

  return userObject;
}

// allow user to hover over a project to reveal a form to allow them to add todo to said project / and projects todos
// projects collapse when hovered and squeeze when idle
