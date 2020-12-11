let transactionHistory = [
   {
    Date: "12/15/2020",
    Description: "DTE Energy",
    Category: "Bills",
    Amount: 68.50,
   }, 
   {
    Date: "12/01/2020",
    Description: "Movies",
    Category: "Entertainment",
    Amount: 7.99,
   }, 
];

//Generating Transaction History in HTML table from transactionHistory Array
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


//transactionHistory.unshift(Date, Description, Category, Amount) - adding to array from form

//transactionHistory.prototype.filter() - Returns a new array containing all elements of the calling array for which the provided filtering function returns true.




//Sources: https://www.valentinog.com/blog/html-table/



//define the form to be able to pull the data from it 
const transForm = document.querySelector('#transaction');

//function to add a transaction to the array 
transForm.addEventListener('submit', function(e) {
   e.preventDefault();
   const formData = new FormData(transForm);

   const transDate = formData.get('transDate');
   console.log(transDate);
   const transDesc = formData.get('transDesc');
   console.log(transDesc);
   const transCat = formData.get('transCat');
   console.log(transCat);
   const transAmount = formData.get('transAmount');
   console.log(transAmount);

   //const newTrans = new addTransaction(transDate,transDesc,transCat,transAmount);
   
   const newTrans = {
      Date: transDate,
      Description: transDesc,
      Category: transCat,
      Amount: transAmount
   }

   transactionHistory.unshift(newTrans);
   console.log(transactionHistory);

   //generateTable(table, transactionHistory);
   //generateTableHead(table, data);
   table.refresh();
   transForm.reset();



});

console.log(transactionHistory);

//function to open the addTransaction menu
function openForm(){
   document.getElementById("addTransactionForm").style.display ="block";
}