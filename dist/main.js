(()=>{var e={60:()=>{let e=document.querySelector("#modal-toggle"),t=document.querySelector(".project-form-modal"),o=document.querySelector(".modal-close-button");function r(){t.classList.toggle("show-modal")}e.addEventListener("click",r),o.addEventListener("click",r),window.addEventListener("click",(function(e){e.target===t&&r()}))}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var d=t[r]={exports:{}};return e[r](d,d.exports,o),d.exports}(()=>{"use strict";o(60);let e=document.querySelector("#projects");function t(e,t){let o=document.createElement("p");o.classList.add("project-info"),o.innerHTML=`Complete <b>${e.name}</b> by ${e.dueDate} <br> <hr class='line-break'> ${e.description} `,t.appendChild(o)}function r(e,t){let o=document.createElement("p");o.classList.add("todo-info"),o.innerHTML=`${e.name}`,t.appendChild(o)}function n(e){let t=document.createElement("form");t.classList.add(".todo-form");let o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("id",e.id),o.setAttribute("name","todo-name"),o.setAttribute("placeholder","Todo Text");let r=document.createElement("button");r.innerText="Add Todo",r.setAttribute("type","button"),r.setAttribute("id",e.id),r.setAttribute("name","add-todo"),t.appendChild(o),t.appendChild(r),e.appendChild(t)}function d(e){let t=document.createElement("button");t.classList.add("delete-project"),t.setAttribute("id",e.id),t.setAttribute("type","submit"),t.innerHTML="&times;",e.appendChild(t)}function c(e,t){let o=document.createElement("input");o.setAttribute("type","checkbox"),o.setAttribute("name","checkbox"),o.setAttribute("id",e.id),t.appendChild(o)}function i(){!function(){if(e.innerHTML="",JSON.parse(localStorage.getItem("projects")))for(let t of JSON.parse(localStorage.getItem("projects"))){let o=document.createElement("div");o.classList.add("todos"),o.setAttribute("id",t.id),e.appendChild(o);for(let e of t.todos){let t=document.createElement("div");t.classList.add("todo"),t.setAttribute("id",e.id),r(e,t),c(e,t),o.appendChild(t)}}}(),function(){if(JSON.parse(localStorage.getItem("projects")))for(let o of JSON.parse(localStorage.getItem("projects"))){let r=document.createElement("div");r.classList.add("project"),r.setAttribute("id",o.id),t(o,r),n(r),d(r);for(let t of document.querySelectorAll(".todos"))t.id==r.id&&e.insertBefore(r,t)}}()}i();let l=document.querySelector("button[name='create-project']"),a=document.querySelectorAll("button.delete-project"),s=document.querySelectorAll("button[name='add-todo']"),u=document.querySelectorAll("input[name='checkbox']");l.addEventListener("click",m),a.forEach((e=>e.addEventListener("click",b))),s.forEach((e=>e.addEventListener("click",f))),u.forEach((e=>e.addEventListener("click",j)));let p=function(){let e={projects:[],project:function(t,o="",r){let n={};n.id=Date.now(),n.name=t,n.description=o,n.dueDate=r,n.todos=[],e.projects.push(n)},todo:function(t,o){let r={};r.id=Date.now(),r.name=o;for(let o of e.projects)o.id==t&&o.todos.push(r)}};return e}();function m(){let e=document.querySelector("input[name='project-name']"),t=document.querySelector("textarea[name='project-description']"),o=document.querySelector("input[name='project-due-date']");if(e.value&&o.value){p.project(e.value,t.value,o.value);for(let r of[e,t,o])r.value="";localStorage.setItem("projects",JSON.stringify(p.projects)),i(),window.location.reload()}}function f(e){let t=document.querySelectorAll("input[name='todo-name']");for(let o of t)for(let t of p.projects)o.id==e.target.id&&t.id==e.target.id&&o.value&&(p.todo(t.id,o.value),localStorage.setItem("projects",JSON.stringify(p.projects)));i(),window.location.reload()}function b(e){for(let t of p.projects)t.id==e.target.id&&(p.projects=p.projects.filter((e=>e!==t)),localStorage.setItem("projects",JSON.stringify(p.projects)));i(),window.location.reload()}function j(e){if(e.target.checked)for(let t of p.projects){let o=p.projects.indexOf(t);for(let r of t.todos)r.id==e.target.id&&(t.todos.indexOf(r),p.projects[o].todos=p.projects[o].todos.filter((e=>e!==r)),0===p.projects[o].todos.length?(p.projects=p.projects.filter((e=>e!==t)),localStorage.setItem("projects",JSON.stringify(p.projects))):localStorage.setItem("projects",JSON.stringify(p.projects)))}i(),window.location.reload()}localStorage.getItem("projects")||localStorage.setItem("projects",JSON.stringify(p.projects)),p.projects=JSON.parse(localStorage.getItem("projects"));let S=document.querySelector("#projects");function g(e,t){let o=document.createElement("p");o.classList.add("project-info"),o.innerHTML=`Complete <b>${e.name}</b> by ${e.dueDate} <br> <hr class='line-break'> ${e.description} `,t.appendChild(o)}function A(e,t){let o=document.createElement("p");o.classList.add("todo-info"),o.innerHTML=`${e.name}`,t.appendChild(o)}function h(e){let t=document.createElement("form");t.classList.add(".todo-form");let o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("id",e.id),o.setAttribute("name","todo-name"),o.setAttribute("placeholder","Todo Text");let r=document.createElement("button");r.innerText="Add Todo",r.setAttribute("type","button"),r.setAttribute("id",e.id),r.setAttribute("name","add-todo"),t.appendChild(o),t.appendChild(r),e.appendChild(t)}function E(e){let t=document.createElement("button");t.classList.add("delete-project"),t.setAttribute("id",e.id),t.setAttribute("type","submit"),t.innerHTML="&times;",e.appendChild(t)}function y(e,t){let o=document.createElement("input");o.setAttribute("type","checkbox"),o.setAttribute("name","checkbox"),o.setAttribute("id",e.id),t.appendChild(o)}(function(){if(S.innerHTML="",JSON.parse(localStorage.getItem("projects")))for(let e of JSON.parse(localStorage.getItem("projects"))){let t=document.createElement("div");t.classList.add("todos"),t.setAttribute("id",e.id),S.appendChild(t);for(let o of e.todos){let e=document.createElement("div");e.classList.add("todo"),e.setAttribute("id",o.id),A(o,e),y(o,e),t.appendChild(e)}}})(),function(){if(JSON.parse(localStorage.getItem("projects")))for(let e of JSON.parse(localStorage.getItem("projects"))){let t=document.createElement("div");t.classList.add("project"),t.setAttribute("id",e.id),g(e,t),h(t),E(t);for(let e of document.querySelectorAll(".todos"))e.id==t.id&&S.insertBefore(t,e)}}();let L=document.querySelector("button[name='create-project']"),v=document.querySelectorAll("button.delete-project"),k=document.querySelectorAll("button[name='add-todo']"),C=document.querySelectorAll("input[name='checkbox']");L.addEventListener("click",m),v.forEach((e=>e.addEventListener("click",b))),k.forEach((e=>e.addEventListener("click",f))),C.forEach((e=>e.addEventListener("click",j)))})()})();