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
  let projectTechnologies = document.getElementById('#modal-technologies');
  let projectOutcomes = document.getElementById('#modal-outcomes');

  projectName.innerHTML = modalContent[modal].name;
  projectImage.src = modalContent[modal].imagePath;
  projectDescription.innerHTML = modalContent[modal].description;
  projectTechnologies.innerHTML = modalContent[modal].technologies;
  projectOutcomes.innerHTML = modalContent[modal].outcomes;
}


const modalContent = {
  grasping: {
    name: "Robot Grasping Simulation",
    description:  `This project was performed as part of the semi autonomous care robot project at Heemstech Innovative Technology (HiT) in the TU Delft Robo Valley. The goal was to develop',
    a simulation that could be used to train the robot using machine learning/AI to autonomously grasp object. The simulation was the first step towards an AI driven robot. A colleague from Avans was simultaneously working
    on creating a grasping algorithm that was ultimately used to validate this simulation. `,
    technologies:`The simulation was created for the Kinova Mico robotic arm. This arm was integrated with the iteration of the care robot Rose. The robot used the Robot Operating System (ROS) and therefore a key requirements
    was that the simulation integrated with this as well. Gazebo was used for this.`,
    outcomes: `The main outcome was the simulation that you can see on the picture above. The arm was able to grasp the bottle with a similar accuracy as measured in real life. The behavior of the robot was similar with
    only minor differences in the fingertip actuation as the physical robot used under-actuated finger. This was not possible to be simulated due to time constraints.`,
    imagePath: "images/grasping.png"
  },
  cycling: {
    name: "Development and Testing of a Perturbed Cycling Rig",
    description:  `This project, conducted at University College Dublin, was part of my ME thesis. The goal of the project was to investigate the effects of force perturbation during cycling.
    I had modified a turbo trainer so that perturbations could be incuded at different parts of the cycle. Data was gathered by using pedals containing force sensors to obtain the force output on the pedals.
    EMG was used for recording the activation of the muscles of the leg.`,
    technologies:`The rig uses a modified turbo trainer controlled via MATLAB. Electromyocardiogram (EMG) was used in recording muscle activation.`,
    outcomes: `The main outcome of the project was to indentify the effects of the force perturbations. Currently, the project is still ongoing and no outcomes have been found.`,
    imagePath: "images/dumbtrainer.png"
    },
  rehabilitation: {
    name: "Development of a gaming controller for an amputee",
    description:  `This was a project as part of the rehabilitation engineering module at UCD. The goal was to develop a game controller that could be used for a double transradial amputee.`,
    technologies:`A rig was designed in CAD and then prototyped using 3D printed parts and an arduino so that it could be used for gaming.`,
    outcomes: `The project resulted in a working prototype game controller that could be used for playing games`,
    imagePath: "images/game-controller.png"
    },
  mdd: {
    name: "Medical Device Design",
    description:  `During half a year, we worked in groups on improving a current medical procedure by designing a medical device. We were tasked with improving a procedure regarding the urinary tract.
    We quickly identified that stenting procedures were causing discomfort. We designed a urinary stent that aims to minimize pain during and after removal. Part of the project also focused on regulatory strategies. `,
    technologies:`We designed and prototyped an early version of this stent.`,
    outcomes: `We created a working prototype that illustrated how such a device would work. It could lead to further development on urinary stent design.`,
    imagePath: "images/mdd-kidney2.png"
    },
  biomechanics: {
    name: "Motion Analysis",
    description:  `A kinematic and kinetic analysis is often used in diagnosing biomechanical issues. During this project we recorded and analysed a single leg crouch. Recordings were done using high speed video.
    Analysis was performed using Kinovea and MATLAB. After the data was extracted from the video, we did a biomechanical analysis on calculated the forces involved in this motion. `,
    technologies:`We used Kinovea, an open source software used in motion analysis in video, and MATLAB for completing the biomechanical analysis.`,
    outcomes: `We created an overview of all the forces involved in the single leg crouch. This gave us a better understanding of biomechanical analysis. `,
    imagePath: "images/motion-analysis2.PNG"
    },
  life: {
    name: "Game of Life",
    description:  `During the module Software Engineering at UCD, we were tasked to develop a digital version of Hasbro's Game Of Life. The game had to be developed in Java using agile development processes.
    We designed our application using Use Case diagrams, sequence diagrams and class diagrams. Finally we created unit tests for the game.`,
    technologies:`The game was developed in Java using Agile Development Methods.`,
    outcomes: `The game that we designed and programmed was fully playable and provided full functionalities similar to the offline version of the game.`,
    imagePath: "images/gameoflife.PNG"
    }  
};