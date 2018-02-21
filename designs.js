/*
 * design.js
 *
 * plain javascript variant of the pixel art maker challenge, no jQuery
 *
 */


// wait for page content to load, may not be needed on codepen
window.addEventListener('load', function() {
  // 'use strict';

  // Select color input
  const colorInput = document.getElementById('colorPicker');

  // Select size input
  const sizeForm = document.getElementById('sizePicker');

  // When size is submitted by the user, call makeGrid()
  sizeForm.addEventListener('submit', makeGrid, false);

  /**
   * @description Generates an HTML table element
   * @param {object} evt - The event object
   */

  function makeGrid(evt) {

    // prevent form's default submit
    evt.preventDefault();

    // set up variables
    const tableElement = document.getElementById('pixelCanvas');
    const gridHeightValue = document.getElementById('inputHeight').value;
    const gridWidthValue = document.getElementById('inputWeight').value;

    // clear the current grid
    tableElement.innerHTML = '';

    // create the grid
    for (let i = 1; i <= gridHeightValue; i++) {

      // create a table row
      let trEl = document.createElement('tr');

      // nested for loop for creating the table cells within the
      // row.
      for (let j = 1; j <= gridWidthValue; j++) {

        // create table data/cells and append to current table row
        trEl.append(document.createElement('td'));

      } // end nested for loop

      // appends table row to the table
      tableElement.append(trEl);

    } // end for loop

    // add event delegation to table, we want this to occur only
    // on table data/cells so `td` is passed as an argument
    tableElement.addEventListener('click', function(evt) {
      // refers to td that was clicked, change it's BG color

      // check if node was a TD elem, if not then do nothing
      if (evt.target.nodeName.toUpperCase() === 'TD') {

        // check if color value is available
        if (colorInput && colorInput.value !== undefined) {

          // use value provided
          evt.target.style.background = colorInput.value;
        } else {
          // use errornous red color
          evt.target.style.background = 'red';
        } // end if...else
      } else {
        // do nothing
        return;
      } // end if..else
    });

  } // end makeGrid function

}); // end of window load event handler
