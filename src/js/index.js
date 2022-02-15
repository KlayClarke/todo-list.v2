import "./storage";
import { updateDOM } from "./updateDOM";
import { Project } from "./factory";

updateDOM();

let createProjectButton = document.querySelector("#create-project");
let deleteButtons = document.querySelectorAll(".delete-project");

function createProject() {
  if (
    document.querySelector("input[name='project-name']").value &&
    document.querySelector("textarea[name='project-description']").value &&
    document.querySelector("input[name='project-due-date']").value
  ) {
    let name = document.querySelector("input[name='project-name']").value;
    let description = document.querySelector(
      "textarea[name='project-description']"
    ).value;
    let dueDate = document.querySelector(
      "input[name='project-due-date']"
    ).value;
    let id = Date.now();
    Project(name, description, dueDate);
    // clear input fields
    document.querySelector("input[name='project-name']").value = "";
    document.querySelector("textarea[name='project-description']").value = "";
    document.querySelector("input[name='project-due-date']").value = "";
    updateDOM();
  }
}

function deleteProject(e) {
  // search through local storage and compare button id to project ids, remove project with same id as button
  for (let project of JSON.parse(localStorage.getItem("projects"))) {
    if (project.id == e.target.id) {
      let projects = JSON.parse(localStorage.getItem("projects"));
      let newProjects = projects.filter((project) => project.id != e.target.id);
      localStorage.setItem("projects", JSON.stringify(newProjects));
    }
  }
  updateDOM();
}

// function to add todo to project
function addTodo(id) {
  let todo = {
    id: Date.now(),
    name: name,
    priority: priority,
  };
  for (let project of JSON.parse(localStorage.getItem("projects"))) {
    if (project.id == id) {
      console.log(project);
    }
  }
}

createProjectButton.addEventListener("click", createProject);
deleteButtons.forEach((btn) => btn.addEventListener("click", deleteProject));

// eventually create own DOM file where we house element creation ... get organized

//delete buttons only work after refresh : don't work after todo creation, or after todo deletion
// make it so delete buttons allows you to delete 2 projects back to back
