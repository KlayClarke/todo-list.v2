import "./storage";
import { Project } from "./factory";

const createProjectButton = document.querySelector("#create-project");

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
  displayProjects();
  displayTodos();
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
  let deleteButton = document.createElement("span");
  deleteButton.classList.add("delete");
  deleteButton.setAttribute("id", el.id);
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

displayProjects();
displayTodos();

createProjectButton.addEventListener("click", createProject);
