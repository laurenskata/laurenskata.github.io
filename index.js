'use strict';
let modalActive = '';
let closeButton = '';


function copyToClipboard () {
  let tooltip = document.querySelector('.tooltip');
  tooltip.classList.add('visible');

  /* Get the text field */
  var el = document.createElement('textarea');
  // Set value (string to be copied)
  el.value = 'lajmverhulst@gmail.com';
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute('readonly', '');
  el.style = {position: 'absolute', left: '-9999px'};
  document.body.appendChild(el);
  // Select text inside element
  el.select();
  // Copy text to clipboard
  document.execCommand('copy');
  // Remove temporary element
  document.body.removeChild(el);
  
  setTimeout( () => {
    tooltip.classList.remove('visible')
  }, 2000);
  return;
}
function openModal(target){
  modalActive = document.querySelector(target);
  modalActive.classList.add('is-active');
  closeButton = document.querySelector(".close-button");
  closeButton.addEventListener("click", toggleModal);
  return;
}

function toggleModal() {
  modalActive.classList.toggle("is-active");
  modalActive = '';
  return;
}

function windowOnClick(event) {
  if (event.target.className === 'modal-background') {
    toggleModal();
  }
  return;
}


window.addEventListener("click", windowOnClick);
