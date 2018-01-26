
$(document).ready(function() {

  // Select color input
  const $colorInput = $('#colorPicker');

  // Select size input
  const $sizeForm = $('#sizePicker');

  // When size is submitted by the user, call makeGrid()
  $sizeForm.on('submit', makeGrid);

  function makeGrid(evt) {

    // prevent form submitting
    evt.preventDefault();
    console.log(evt.target);

    const $tableElement = $('#pixelCanvas');
    const $gridHeightValue = $('#inputHeight').val();
    const $gridWidthValue = $('#inputWeight').val();
    console.log('grid height: ' + $gridHeightValue + ' and grid width: ' + $gridWidthValue + '.');

    // create the grid
    for (var i = 0; i <= $gridHeightValue; i++) {
      for (var j = 0; j <= $gridHeightValue; j++) {

      }
    }


  };



});