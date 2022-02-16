function displayProjects() {
  let projects = document.querySelector("#projects");
  projects.innerHTML = "";
  if (JSON.parse(localStorage.getItem("projects"))) {
    for (let project of JSON.parse(localStorage.getItem("projects"))) {
      // create div to hold project
      let projectDiv = document.createElement("div");
      projectDiv.classList.add("project");
      projectDiv.setAttribute("id", project.id);
      // create paragraph with project info
      addInfoParagraphForProject(project, projectDiv);
      addTodoForm(projectDiv);
      addDeleteButton(projectDiv);
      addTodosDiv(projectDiv, project.id);
      projects.appendChild(projectDiv);
    }
  }
}

function displayTodos() {
  let todosDivs = document.querySelectorAll(".todos");
  if (JSON.parse(localStorage.getItem("projects"))) {
    for (let todosDiv of todosDivs) {
      for (let project of JSON.parse(localStorage.getItem("projects"))) {
        if (project.id == todosDiv.id) {
          for (let todo of project.todos) {
            let todoEl = document.createElement("div");
            todoEl.classList.add("todo");
            todoEl.setAttribute("id", todo.id);
            addInfoParagraphForTodo(todo, todoEl);
            todosDiv.appendChild(todoEl);
          }
        }
      }
    }
  }
}

export function updateDOM() {
  displayProjects();
  displayTodos();
}

function addInfoParagraphForProject(project, el) {
  let paragragh = document.createElement("p");
  paragragh.classList.add("project-info");
  paragragh.innerHTML = `Complete <b>${project.name}</b> by ${project.dueDate} <br> <hr class='line-break'> ${project.description} `;
  el.appendChild(paragragh);
}

function addInfoParagraphForTodo(todo, el) {
  let paragraph = document.createElement("p");
  paragraph.classList.add("todo-info");
  paragraph.innerHTML = `${todo.name}`;
  el.appendChild(paragraph);
}

function addTodoForm(el) {
  // create form element
  let todoForm = document.createElement("form");
  todoForm.classList.add(".todo-form");
  // create input for todo name
  let todoName = document.createElement("input");
  todoName.setAttribute("type", "text");
  todoName.setAttribute("id", el.id);
  todoName.setAttribute("name", "todo-name");
  todoName.setAttribute("placeholder", "Todo Text");
  // create submit button
  let submitButton = document.createElement("button");
  submitButton.innerText = "Add Todo";
  submitButton.setAttribute("type", "button");
  submitButton.setAttribute("id", el.id);
  submitButton.setAttribute("name", "add-todo");
  // append inputs to form
  todoForm.appendChild(todoName);
  todoForm.appendChild(submitButton);
  // append form to parent el
  el.appendChild(todoForm);
}

function addDeleteButton(el) {
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-project");
  deleteButton.setAttribute("id", el.id);
  deleteButton.setAttribute("type", "submit");
  deleteButton.innerHTML = "&times;";
  el.appendChild(deleteButton);
}

function addTodosDiv(el, id) {
  let todosDiv = document.createElement("div");
  todosDiv.classList.add("todos");
  todosDiv.setAttribute("id", id);
  el.appendChild(todosDiv);
}

// store todos below each project
