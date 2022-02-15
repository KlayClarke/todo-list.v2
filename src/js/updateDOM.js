function displayProject() {}

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
      addTodoForm(projectDiv);
      addDeleteButton(projectDiv);
      // append newly created project to div of all projects
      projects.appendChild(projectDiv);
    }
  }
}

function addDeleteButton(el) {
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-project");
  deleteButton.classList.add("hide");
  deleteButton.setAttribute("id", el.id);
  deleteButton.innerHTML = "&times;";
  el.appendChild(deleteButton);
}

function addTodoForm(el) {
  // create form element
  let todoForm = document.createElement("form");
  todoForm.classList.add(".todo-form");
  // create input for todo name
  let todoName = document.createElement("input");
  todoName.setAttribute("type", "text");
  todoName.setAttribute("name", "todo-name");
  todoName.setAttribute("placeholder", "Todo Text");
  // create submit button
  let submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Add Todo");
  // append inputs to form
  todoForm.appendChild(todoName);
  todoForm.appendChild(submitButton);
  // append form to parent el
  el.appendChild(todoForm);
}

export function updateDOM() {
  displayProjects();
  console.log(JSON.parse(localStorage.getItem("projects")));
}

// build delete button for all, but show it only when hover

// create factory functions for these
