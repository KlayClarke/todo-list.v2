import { storageAvailable } from "./storage";

export function Project(name, description, dueDate) {
  // create project object
  let project = {};

  // parameters as keys
  project.name = name;
  project.description = description;
  project.dueDate = dueDate;
  project.todos = [];

  // function to add todo to project
  project.addTodo = function (name, priority) {
    let todo = {
      id: Date.now(),
      name: name,
      priority: priority,
    };
    project.todos.push(todo);
  };

  // function to store project in local storage
  project.store = function () {
    if (storageAvailable("localStorage")) {
      // if no projects instance on local storage, create one
      if (!localStorage.getItem("projects")) {
        localStorage.setItem("projects", JSON.stringify([]));
      }
      // parse projects instance - turn JSON back to js object
      let projects = JSON.parse(localStorage.getItem("projects"));
      // add newly created project to projects instance - saved as new variable
      projects.push(project);
      // set local storage projects instance as object with newly added project
      localStorage.setItem("projects", JSON.stringify(projects));
    }
  };

  return project;
}

// want to store project, but also want to be able to update storage every time a project adds todos
