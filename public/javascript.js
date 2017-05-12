// Original
// var columns = document.getElementById('table_id').rows[0].cells.length
// var table = document.getElementsByTagName('table')[0];
// var cells = table.getElementsByTagName("td");

// Revised 1
// var columns = document.getElementsByTagName('table')[0].rows[0].cells.length
// var table = document.getElementsByTagName('table')[0];
// var cells = table.getElementsByTagName("td");

// Revised 2 (better to focus on ID so can specifically target board table)
var columns = document.getElementById('table_id').rows[0].cells.length
var table = document.getElementById('table_id');
var cells = table.getElementsByTagName("td");

console.log(columns)  // 3
console.log(table)  // HTML table object
console.log(cells)  // (9) [td, td, td, td, td, td, td, td, td]

for(var i = 1; i < cells.length; i++){

    // cell Object
    var cell = cells[i];

    // track with onclick
    cell.onclick = function(){
        var cellIndex  = this.cellIndex;  
        var rowIndex = this.parentNode.rowIndex;
        var padding = 0;

        // calculate padding if not in first row
        if (rowIndex > 0) {
            padding = (rowIndex * columns)
        }

        var table_index = cellIndex + padding
        
        alert(table_index)
    }
}