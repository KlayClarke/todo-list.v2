let modalToggleButton = document.querySelector("#modal-toggle");
let projectFormModal = document.querySelector(".project-form-modal");
let modalCloseButton = document.querySelector(".modal-close-button");

function windowOnClick(e) {
  if (e.target === projectFormModal) {
    toggleModal();
  }
}

function toggleModal() {
  projectFormModal.classList.toggle("show-modal");
}

modalToggleButton.addEventListener("click", toggleModal);
modalCloseButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
