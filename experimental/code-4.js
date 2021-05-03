 // get the table body element
 const table = document.getElementById("tbody");

  // generate the tiles
  for(var y = 0; y < 10; y++) {
    // creating rows elements for the table
    tableRow = document.createElement("tr");
      // putting the new rows into the table
      table.appendChild(tableRow);
      for(var x = 0; x < 10; x++) {
        // creating the tiles
        tile = document.createElement("td");
          // displaying the tiles
          tableRow.appendChild(tile);
      }
  }