import "./storage";
import { Project } from "./factory";

if (localStorage.getItem("projects")) {
  localStorage.getItem("projects");
}

function createProject() {
  let name = document.querySelector("input[name='project-name']").value;
  let description = document.querySelector(
    "textarea[name='project-description']"
  ).value;
  let dueDate = document.querySelector("input[name='project-due-date']").value;
  Project(name, description, dueDate);
  // clear input fields
  document.querySelector("input[name='project-name']").value = "";
  document.querySelector("textarea[name='project-description']").value = "";
  document.querySelector("input[name='project-due-date']").value = "";
  updateDOM();
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

function displayProjects() {
  const projects = document.querySelector("#projects");
  projects.innerHTML = "";
  if (JSON.parse(localStorage.getItem("projects"))) {
    for (let project of JSON.parse(localStorage.getItem("projects"))) {
      // create div to hold project
      let projectDiv = document.createElement("div");
      projectDiv.classList.add("project");
      projectDiv.setAttribute("id", project.id);
      projectDiv.innerText = `${project.name}: ${project.description} | ${project.dueDate}`;
      // add delete button to project div
      addDeleteButton(projectDiv);
      // append newly created project to div of all projects
      projects.appendChild(projectDiv);
      // create div to hold todos in project
      let todosDiv = document.createElement("div");
      todosDiv.classList.add("todos");
      projectDiv.appendChild(todosDiv);
    }
  }
}

function addDeleteButton(el) {
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.setAttribute("id", el.id);
  deleteButton.type = "submit";
  deleteButton.innerHTML = "&times;";
  el.appendChild(deleteButton);
}

function displayTodos() {
  if (document.querySelectorAll(".todo")) {
    for (let todo of document.querySelectorAll(".todo")) {
      console.log(todo);
    }
  }
}

function updateDOM() {
  displayProjects();
  displayTodos();
}

updateDOM();

let createProjectButton = document.querySelector("#create-project");
let deleteButtons = document.querySelectorAll(".delete");

createProjectButton.addEventListener("click", createProject);

deleteButtons.forEach((btn) => btn.addEventListener("click", deleteProject));

// eventually create own DOM file where we house element creation ... get organized
