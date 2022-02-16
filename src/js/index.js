import "./storage";
import { updateDOM } from "./updateDOM";
import { initializeUser } from "./factory";

let user = initializeUser(); // save initial user object

if (!localStorage.getItem("projects")) {
  localStorage.setItem("projects", JSON.stringify(user.projects));
}

user.projects = JSON.parse(localStorage.getItem("projects"));

updateDOM();

function addProject() {
  let projectName = document.querySelector("input[name='project-name']");
  let projectDescription = document.querySelector(
    "textarea[name='project-description']"
  );
  let projectDueDate = document.querySelector("input[name='project-due-date']");
  if (projectName.value && projectDueDate.value) {
    user.project(
      projectName.value,
      projectDescription.value,
      projectDueDate.value
    );
    for (let field of [projectName, projectDescription, projectDueDate]) {
      field.value = "";
    }
    localStorage.setItem("projects", JSON.stringify(user.projects));
    updateDOM();
    window.location.reload();
  }
}

function removeProject(e) {
  // search through local storage and compare button id to project ids, remove project with same id as button
  for (let project of user.projects) {
    if (project.id == e.target.id) {
      user.projects = user.projects.filter((p) => p !== project);
      localStorage.setItem("projects", JSON.stringify(user.projects));
    }
  }
  updateDOM();
  window.location.reload();
}

function addTodo(e) {
  if (document.querySelector("input[name='todo-name']").value) {
    for (let project of user.projects) {
      if (project.id == e.target.id) {
        user.todo(
          project.id,
          document.querySelector("input[name='todo-name']").value
        );
        localStorage.setItem("projects", JSON.stringify(user.projects));
      }
    }
  }
  updateDOM();
  window.location.reload();
}

let createProjectButton = document.querySelector(
  "button[name='create-project']"
);
let deleteButtons = document.querySelectorAll("button.delete-project");
let createTodoButtons = Array.prototype.slice.apply(
  document.querySelectorAll("button[name='add-todo']")
);

createProjectButton.addEventListener("click", addProject);
deleteButtons.forEach((btn) => btn.addEventListener("click", removeProject));

[...createTodoButtons].forEach((btn) => btn.addEventListener("click", addTodo));

// only first button of each nodelist works
// delete buttons only work after refresh : don't work after todo creation, or after todo deletion
// todos are overwriting each other

// cool functionality:

//// have user rank todos by priority (0 to 5) - rank todos by prio
//// on hover, show todo form and options button that gives user option to view todos, and delete project
