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

    for (let p of userObject.projects) {
      if (p.id == projectId) {
        p.todos.push(todo);
      }
    }

    //   [projectId].push(todo);
  };

  return userObject;
}

// allow user to hover over a project to reveal a form to allow them to add todo to said project / and projects todos
// projects collapse when hovered and squeeze when idle
// form stays atop the project's added todos
// want to be able to update storage every time a project adds todos
