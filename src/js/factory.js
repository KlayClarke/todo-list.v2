import { storageAvailable } from "./storage";

export function Project(name, description, dueDate) {
  // create project object
  let project = {};

  // parameters as keys
  project.id = Date.now();
  project.name = name;
  project.description = description;
  project.dueDate = dueDate;
  project.todos = [];

  // function to store project in local storage
  function storeProject() {
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
  }
  // store project when project is created
  storeProject();

  return Object.freeze(project);
}

// allow user to hover over a project to reveal a form to allow them to add todo to said project / and projects todos
// projects collapse when hovered and squeeze when idle
// form stays atop the project's added todos
// want to be able to update storage every time a project adds todos
