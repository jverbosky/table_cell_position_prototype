// Get table cell position index on click

var table = document.getElementById("table_id");
var cells = table.getElementsByTagName("td");

for (var i = 0; i < cells.length; i++) {

    // Cell Object
    var cell = cells[i];
    cell.positionIndex = i;
    cell.totalCells = cells.length;

    // Track with onclick
    cell.onclick = function () {
        alert("I am position " + this.positionIndex + " (out of " + this.totalCells + " cells)");
    };
}


//-----------------Research------------------------------------

///////
// Note - Useful and learned from this, 
// but doesn't work for first cell in table...
//////

// Original
// var columns = document.getElementById('table_id').rows[0].cells.length
// var table = document.getElementsByTagName('table')[0];
// var cells = table.getElementsByTagName("td");

// Revised 1
// var columns = document.getElementsByTagName('table')[0].rows[0].cells.length
// var table = document.getElementsByTagName('table')[0];
// var cells = table.getElementsByTagName("td");

// Revised 2 (better to focus on ID so can specifically target board table)
// var columns = document.getElementById('table_id').rows[0].cells.length
// var table = document.getElementById('table_id');
// var cells = table.getElementsByTagName('td');

// console.log(columns)  // 3
// console.log(table)  // HTML table object
// console.log(cells)  // (9) [td, td, td, td, td, td, td, td, td]

// for (var i = 1; i < cells.length; i++) {

//     // cell Object
//     var cell = cells[i];

//     // track with onclick
//     cell.onclick = function(){
//         var cellIndex  = this.cellIndex;  
//         var rowIndex = this.parentNode.rowIndex;
//         // var padding = 0;

//         // calculate padding if not in first row
//         if (rowIndex > 0) {
//             padding = (rowIndex * columns)
//         }

//         // var table_index = cellIndex + padding;
        
//         // console.log(table_index)
//         // alert(table_index)
//         alert(cellIndex)
//     }
// }

//-------------------------------------------------------------

///////
// This one works for the first cell in the table...
//////

// // Track onclicks on all td elements
// var table = document.getElementsByTagName("table")[0];
// // Get all the rows in the table
// var rows = table.getElementsByTagName("tr");

// for (var i = 0; i < rows.length; i++) {
//     //Get the cells in the given row
//     var cells = rows[i].getElementsByTagName("td");
//     for (var j = 0; j < cells.length; j++) {
//         // Cell Object
//         var cell = cells[j];
//         cell.rowIndex = i;
//         cell.positionIndex = j;
//         cell.totalCells = cells.length;
//         cell.totalRows = rows.length;
//         // Track with onclick
//         console.log(cell);
//         cell.onclick = function () {
//             alert("I am position " + this.positionIndex + " (out of " + this.totalCells + " cells)");
//         };
//     }
// }

//-------------------------------------------------------------

///////
// This one works for the first cell in the table!  ^_^
// It also works for the entire cell space, not just the text!!!  \ ^O^ /
//////

// var table = document.getElementById("table_id");
// var cells = table.getElementsByTagName("td");

// for (var i = 0; i < cells.length; i++) {

//     // Cell Object
//     var cell = cells[i];
//     cell.positionIndex = i;
//     cell.totalCells = cells.length;

//     // Track with onclick
//     cell.onclick = function () {
//         alert("I am position " + this.positionIndex + " (out of " + this.totalCells + " cells)");
//     };
// }