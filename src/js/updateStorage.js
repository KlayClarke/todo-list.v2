import { updateDOM } from "./updateDom";
import { initializeUser } from "./factory";

let user = initializeUser(); // save initial user object

if (!localStorage.getItem("projects")) {
  localStorage.setItem("projects", JSON.stringify(user.projects));
}

user.projects = JSON.parse(localStorage.getItem("projects")); // set user objects content using local storage

export function addProject() {
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

export function addTodo(e) {
  let todoNameInputs = document.querySelectorAll("input[name='todo-name']");
  for (let todoNameInput of todoNameInputs) {
    for (let project of user.projects) {
      if (
        todoNameInput.id == e.target.id &&
        project.id == e.target.id &&
        todoNameInput.value
      ) {
        user.todo(project.id, todoNameInput.value);
        localStorage.setItem("projects", JSON.stringify(user.projects));
      }
    }
  }
  updateDOM();
  window.location.reload();
}

export function removeProject(e) {
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

export function resolveTodo(e) {
  // when checkbox is clicked
  if (e.target.checked) {
    for (let project of user.projects) {
      let projectIndex = user.projects.indexOf(project);
      for (let todo of project.todos) {
        // find checkbox's corresponding todo (same id)
        if (todo.id == e.target.id) {
          let todoIndex = project.todos.indexOf(todo);
          user.projects[projectIndex].todos = user.projects[
            projectIndex
          ].todos.filter((t) => t !== todo);
          // check project todos list - if empty, remove project altogether (project is complete / resolved)
          if (user.projects[projectIndex].todos.length === 0) {
            // remove project
            user.projects = user.projects.filter((p) => p !== project);
            localStorage.setItem("projects", JSON.stringify(user.projects));
          } else {
            localStorage.setItem("projects", JSON.stringify(user.projects));
          }
        }
      }
    }
  }
  updateDOM();
  window.location.reload();
}
