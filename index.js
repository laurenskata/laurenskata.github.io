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
  modalActive = document.querySelector('#my-modal');
  onModalOpen(target);
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




function onModalOpen(modal) {
  let projectName = document.getElementById('#project-title');
  let projectImage = document.getElementById('#modal-image');
  let projectDescription = document.getElementById('#modal-description');

  projectName.innerHTML = modalContent[modal].name;
  projectImage.src = modalContent[modal].imagePath;
  projectDescription.innerHTML = modalContent[modal].description;
}


const modalContent = {
  grasping: {
    name: "bla bla",
    description:  `This project was performed as part of the semi autonomous care robot project at Heemstech Innovative Technology (HiT) in the TU Delft Robo Valley. The goal was to develop',
    a simulation that could be used to train the robot using machine learning/AI to autonomously grasp object. The simulation was the first step towards an AI driven robot. A colleague from Avans was simultaneously working
    on creating a grasping algorithm that was ultimately used to validate this simulation. `,
    imagePath: "images/grasping.png"
  },
  cycling: {
      name: "lalalla bla",
      description:  `xxxxxxxxxxxxxxThis project was performed as part of the semi autonomous care robot project at Heemstech Innovative Technology (HiT) in the TU Delft Robo Valley. The goal was to develop',
      a simulation that could be used to train the robot using machine learning/AI to autonomously grasp object. The simulation was the first step towards an AI driven robot. A colleague from Avans was simultaneously working
      on creating a grasping algorithm that was ultimately used to validate this simulation. `,
      imagePath: "images/dumbtrainer.png"
    }
};