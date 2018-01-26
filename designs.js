
$(document).ready(function() {

  // Select color input
  const $colorInput = $('#colorPicker');

  // Select size input
  const $sizeForm = $('#sizePicker');

  // When size is submitted by the user, call makeGrid()
  $sizeForm.on('submit', makeGrid);

  function makeGrid(evt) {

    // prevent form's default submit
    evt.preventDefault();

    // debug
    // console.log(evt.target);

    // set up variables
    const $tableElement = $('#pixelCanvas');
    const $gridHeightValue = $('#inputHeight').val();
    const $gridWidthValue = $('#inputWeight').val();

    // debug
    // console.log('grid height: ' + $gridHeightValue + ' and grid width: ' + $gridWidthValue + '.');

    // clear the current grid
    $tableElement.empty();

    // create the grid
    for (var i = 1; i <= $gridHeightValue; i++) {

      // create a table row
      let $trEl = $('<tr></tr>');

      // nested for loop for creating the table cells within the
      // row.
      for (var j = 1; j <= $gridWidthValue; j++) {

        // create table data/cells and append to current table row
        // $trEl.append('<td>' + j.toString() + '</td>');
        $trEl.append('<td></td>');

      } // end nested for loop

      // appends table row to the table
      $tableElement.append($trEl);

    } // end for loop

    // add event delegation to table, we want this to occur only
    // on table data/cells so `td` is passed as an argument
    $tableElement.on('click', 'td', function() {
      // refers to td that was clicked, change it's BG color
      $(this).css('backgroundColor', $colorInput.val());
    });

  }

});
