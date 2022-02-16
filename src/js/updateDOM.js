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
      addTodosDiv(projectDiv);
      projects.appendChild(projectDiv);
    }
  }
}

function displayTodos() {
  let todosDiv = document.querySelector(".todos");
  if (JSON.parse(localStorage.getItem("projects"))) {
    for (let project of JSON.parse(localStorage.getItem("projects"))) {
      for (let todo of project.todos) {
        let todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        todoDiv.setAttribute("id", todo.id);
        addInfoParagraphForTodo(todo, todoDiv);
        todosDiv.appendChild(todoDiv);
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
  let deleteButton = document.createElement("span");
  deleteButton.classList.add("delete-project");
  deleteButton.setAttribute("id", el.id);
  deleteButton.innerHTML = "&times;";
  el.appendChild(deleteButton);
}

function addTodosDiv(el) {
  let todosDiv = document.createElement("div");
  todosDiv.classList.add("todos");
  el.appendChild(todosDiv);
}
