(()=>{"use strict";const e=document.querySelector("#create-project");function t(){const e=document.querySelector("#projects");if(e.innerHTML="",JSON.parse(localStorage.getItem("projects")))for(let t of JSON.parse(localStorage.getItem("projects"))){let r=document.createElement("div");r.classList.add("project"),r.setAttribute("id",t.id),r.innerText=`${t.name}: ${t.description} | ${t.dueDate}`,o(r),e.appendChild(r);let c=document.createElement("div");c.classList.add("todos"),r.appendChild(c)}}function o(e){let t=document.createElement("span");t.classList.add("delete"),t.setAttribute("id",e.id),t.innerHTML="&times;",e.appendChild(t)}function r(){if(document.querySelectorAll(".todo"))for(let e of document.querySelectorAll(".todo"))console.log(e)}localStorage.getItem("projects")&&localStorage.getItem("projects"),t(),r(),e.addEventListener("click",(function(){(function(e,t,o){let r={};r.id=Date.now(),r.name=e,r.description=t,r.dueDate=o,r.todos=[],r.addTodo=function(e,t){let o={id:Date.now(),name:e,priority:t};r.todos.push(o)},function(){if(function(e){let t;try{t=window.localStorage;var o="__storage_test__";return t.setItem(o,o),t.removeItem(o),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}()){localStorage.getItem("projects")||localStorage.setItem("projects",JSON.stringify([]));let e=JSON.parse(localStorage.getItem("projects"));e.push(r),localStorage.setItem("projects",JSON.stringify(e))}}(),Object.freeze(r)})(document.querySelector("input[name='project-name']").value,document.querySelector("textarea[name='project-description']").value,document.querySelector("input[name='project-due-date']").value),document.querySelector("input[name='project-name']").value="",document.querySelector("textarea[name='project-description']").value="",document.querySelector("input[name='project-due-date']").value="",t(),r()}))})();