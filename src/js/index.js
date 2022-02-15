import { Project, storeProject } from "./factory";
import "./storage";
import "./modal";

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
}

function displayProjects() {
  const projects = document.querySelector("#projects");
  projects.innerHTML = "";
  if (JSON.parse(localStorage.getItem("projects"))) {
    for (let project of JSON.parse(localStorage.getItem("projects"))) {
      let projectDiv = document.createElement("div");
      projectDiv.classList.add("project");
      projectDiv.innerText = `${project.name}: ${project.description} | ${project.dueDate}`;
      projects.appendChild(projectDiv);
    }
  }
}

displayProjects();

createProjectButton.addEventListener("click", createProject);
