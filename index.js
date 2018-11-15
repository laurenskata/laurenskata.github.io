'use strict';

function copyToClipboard () {
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
}
