let transactionHistory = [
   {
    Date: "yyyy-mm-dd",
    Description: "What you purchased",
    Category: "Bills, Food, Entertainment, Clothing ",
    Amount: "Amount Spent",
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


// - array.prototype.filter() - Returns a new array containing all elements of the calling array for which the provided filtering function returns true.


//Sources: https://www.valentinog.com/blog/html-table/



//define the form to be able to pull the data from it 
const transForm = document.querySelector('#transaction');

//function to add a transaction to the array 
transForm.addEventListener("submit", function(e) {
   e.preventDefault();
   const formData = new FormData(transForm);

   //pulling all data from form
   const transDate = formData.get('transDate');
   const transDesc = formData.get('transDesc');
   const transCat = formData.get('transCat');
   const transAmount = formData.get('transAmount');
   
   //creating an object array from the form data
   const newTrans = [{
     Date: transDate,
     Description: transDesc,
     Category: transCat,
     Amount: "$" + transAmount,
   }]

   //adding the form data to the array and updating the history
   transactionHistory.push(newTrans);
   console.log(transactionHistory);
   generateTable(table, newTrans);
   
   //clearing and closing the form
   transForm.reset();
   closeForm();

   //updates the total expenses and the Remaining Balance
   const transAmountNumber = Number(transAmount);
   expenseTotal = Math.round((expenseTotal + transAmountNumber)*100)/100;
   balance = Math.round((balance - transAmountNumber)*100)/100;
   updateBalance();
   updateExpenseTotal();

});

//function to open the addTransaction menu
function openForm(){
   document.getElementById("transaction").style.display ="block";
   document.getElementById("addTransPara").style.display ="none";
   document.getElementById("closeTransaction").style.display ="block";
   document.getElementById("addTransaction").style.display ="none";
   document.querySelector("nav").style.height= "140px";

}

//function to close the addTransaction menu after submission
function closeForm() {
   document.getElementById("transaction").style.display = "none";
   document.getElementById("addTransPara").style.display ="block";
   document.getElementById("closeTransaction").style.display ="none";
   document.getElementById("addTransaction").style.display ="block";
   document.querySelector("nav").style.height= "80px";
   transForm.reset();
 }

// Zina's part
document
    .querySelector('#update_income')
    .addEventListener("click", updateBudget);


// declaring variables to use in functions below. calling the Ids from the HTML
let weeklyBudget = document.querySelector('#weekly_budget');
let incomeInput = document.querySelector('#income_input');
let remainingBalance = document.querySelector('#remaining_balance');
let totalExpenses = document.querySelector('#total_expenses');


let weeklyIncome = 0;
let expenses = []; 
let expenseTotal = 0;
let balance = 0;

function updateBudget(event) { 
    event.preventDefault(); 
    weeklyIncome = incomeInput.value; 
    weeklyBudget.innerText = "$" + weeklyIncome;
    incomeInput.value = ""; 
    updateBalance();
}

function updateBalance() {
    balance = Math.round((weeklyIncome - expenseTotal)*100)/100;
    remainingBalance.innerText = "$" + balance;
    if (balance <= 0) {
        remainingBalance.classList.remove("green");
        remainingBalance.classList.add("red");
        alert("You ran out of money! You can no longer purchase anything.");
    } else {
        remainingBalance.classList.remove("red");
        remainingBalance.classList.add("green");
    }
}

function updateExpenseTotal() {
   totalExpenses.innerText = "$" + expenseTotal;
 }

// end of Zina's part