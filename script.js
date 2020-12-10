let transactionHistory = [
   {
    Date: "12/15/2020",
    Description: "DTE Energy",
    Category: "Bills",
    Amount: "$68.50",
   }, 
   {
    Date: "12/01/2020",
    Description: "Movies",
    Category: "Entertainment",
    Amount: "$7.99",
   }, 
];


//Source: https://www.valentinog.com/blog/html-table/

 function generateTableHead(table, data) {
   let thead = table.createTHead();
   let row = thead.insertRow();
   for (let key of data) {
     let th = document.createElement("th");
     let text = document.createTextNode(key);
     th.appendChild(text);
     row.appendChild(th);
   }
 }

 function generateTable(table, data) {
   for (let element of data) {
     let row = table.insertRow();
     for (key in element) {
       let cell = row.insertCell();
       let text = document.createTextNode(element[key]);
       cell.appendChild(text);
     }
   }
 }
  
 let table = document.querySelector("table");
 let data = Object.keys(transactionHistory[0]);
 generateTable(table, transactionHistory);
 generateTableHead(table, data);


 
//  console.table(values) - Using an array to tabulate a set of values

// - onClickSubmit - listener for event on new input
// - transactionHistory.unshift(newPurchase) - add input as new row in array
// - insertRow(transactionHistory index 0) - Creates create (tr) in html with inputted data
//    const newInput = arr[Symbol.iterator]();
//    const newRow = document.getElementById(transactionHistory);
//    for (let data of newInput) {
//    transactionHistory.innerHTML += "<tr>" + "<td>"+ date + "</td>" + "<td>" + description + "</td>" + "<td>" + category + "</td>" + "<td>" + amount + "</td>" + "</tr>";
//    }

// - array.prototype.filter() - Returns a new array containing all elements of the calling array for which the provided filtering function returns true.
