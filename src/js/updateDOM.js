import * as updateStorage from "./updateStorage";

let projects = document.querySelector("#projects");

updateDOM(); // display projects & todos on refresh / load

function addInfoParagraphForProject(project, parentDiv) {
  let paragragh = document.createElement("p");
  paragragh.classList.add("project-info");
  paragragh.innerHTML = `Complete <b>${project.name}</b> by ${project.dueDate} <br> <hr class='line-break'> ${project.description} `;
  parentDiv.appendChild(paragragh);
}

function addInfoParagraphForTodo(todo, parentDiv) {
  let paragraph = document.createElement("p");
  paragraph.classList.add("todo-info");
  paragraph.innerHTML = `${todo.name}`;
  parentDiv.appendChild(paragraph);
}

function addTodoForm(parentDiv) {
  // create form element
  let todoForm = document.createElement("form");
  todoForm.classList.add(".todo-form");
  // create input for todo name
  let todoName = document.createElement("input");
  todoName.setAttribute("type", "text");
  todoName.setAttribute("id", parentDiv.id);
  todoName.setAttribute("name", "todo-name");
  todoName.setAttribute("placeholder", "Todo Text");
  // create submit button
  let submitButton = document.createElement("button");
  submitButton.innerText = "Add Todo";
  submitButton.setAttribute("type", "button");
  submitButton.setAttribute("id", parentDiv.id);
  submitButton.setAttribute("name", "add-todo");
  // append inputs to form
  todoForm.appendChild(todoName);
  todoForm.appendChild(submitButton);
  // append form to parent el
  parentDiv.appendChild(todoForm);
}

function addDeleteButton(parentDiv) {
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-project");
  deleteButton.setAttribute("id", parentDiv.id);
  deleteButton.setAttribute("type", "submit");
  deleteButton.innerHTML = "&times;";
  parentDiv.appendChild(deleteButton);
}

function addCheckBox(todo, parentDiv) {
  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("name", "checkbox");
  checkBox.setAttribute("id", todo.id);
  parentDiv.appendChild(checkBox);
}

function displayTodos() {
  projects.innerHTML = "";
  if (JSON.parse(localStorage.getItem("projects"))) {
    for (let project of JSON.parse(localStorage.getItem("projects"))) {
      let todosDiv = document.createElement("div");
      todosDiv.classList.add("todos");
      todosDiv.setAttribute("id", project.id);
      projects.appendChild(todosDiv);
      for (let todo of project.todos) {
        let todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        todoDiv.setAttribute("id", todo.id);
        addInfoParagraphForTodo(todo, todoDiv);
        addCheckBox(todo, todoDiv);
        todosDiv.appendChild(todoDiv);
      }
    }
  }
}

function displayProjects() {
  if (JSON.parse(localStorage.getItem("projects"))) {
    for (let project of JSON.parse(localStorage.getItem("projects"))) {
      // create project div to hold project
      let projectDiv = document.createElement("div");
      projectDiv.classList.add("project");
      projectDiv.setAttribute("id", project.id);
      // create paragraph with project info
      addInfoParagraphForProject(project, projectDiv);
      // add todo creation form to project
      addTodoForm(projectDiv);
      // add project delete button to project
      addDeleteButton(projectDiv);
      // append projectDiv to project's section before project's corresponding todo div (same ids)
      for (let todosDiv of document.querySelectorAll(".todos")) {
        if (todosDiv.id == projectDiv.id) {
          projects.insertBefore(projectDiv, todosDiv);
        }
      }
    }
  }
}

export function updateDOM() {
  displayTodos();
  displayProjects();
}

// access elements / nodes
let createProjectButton = document.querySelector(
  "button[name='create-project']"
);
let deleteButtons = document.querySelectorAll("button.delete-project");
let createTodoButtons = document.querySelectorAll("button[name='add-todo']");
let checkboxes = document.querySelectorAll("input[name='checkbox']");

// event listeners
createProjectButton.addEventListener("click", updateStorage.addProject);
deleteButtons.forEach((btn) =>
  btn.addEventListener("click", updateStorage.removeProject)
);
createTodoButtons.forEach((btn) =>
  btn.addEventListener("click", updateStorage.addTodo)
);
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", updateStorage.resolveTodo)
);
