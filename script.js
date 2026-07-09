let transactionList = document.getElementById("transactionList");
//array to store transactions
let transactions = [];


// Balance Elements
let balance = document.getElementById("balance");
let income = document.getElementById("income");
let expense = document.getElementById("expenses"); // Make sure your HTML uses id="expense"

// Input Elements
let titleInput = document.getElementById("title");
let amountInput = document.getElementById("amount");
let categoryInput = document.getElementById("category");
let dateInput = document.getElementById("date");

// Button
let button = document.getElementById("addBtn");

// Add Event Listener
button.addEventListener("click", addTransaction);

// Function to Add Transaction
function addTransaction(event) {

    if (
    titleInput.value === "" ||
    amountInput.value === "" ||
    categoryInput.value === "" ||
    dateInput.value === ""
) {
    alert("Please fill all the fields.");
    return;
}
    // Prevent form from refreshing
    event.preventDefault();

    // Create Transaction Object
    let transaction = {
        title: titleInput.value,
        amount: Number(amountInput.value),
        category: categoryInput.value,
        date: dateInput.value
    };
    transactions.push(transaction);
    saveTransactions();
    // Print Transaction Object
    displayTransactions();
    updateSummary();
    titleInput.value = "";
    amountInput.value = "";
    categoryInput.value = "";
    dateInput.value = "";
}
function displayTransactions() {

    transactionList.innerHTML = "";

    for (let i = 0; i < transactions.length; i++) {

        let transaction = transactions[i];
        transactionList.innerHTML += `
                      <div class="transaction-card">
                       <div>
                       <h3>${transaction.title}</h3>
                    <p>${transaction.category}</p>
                    <small>${transaction.date}</small>
                     </div>

                 <div class="right">
                 <h2>₹${transaction.amount}</h2>
                <button onclick="deleteTransaction(${i})">Delete</button>
                </div>
                </div>
                                 `;

      
                               
                             }
                         }


function updateSummary() {

    let incomeTotal = 0;
    let expenseTotal = 0;

    for (let i = 0; i < transactions.length; i++) {

        let transaction = transactions[i];

        if (transaction.category === "Salary") {
            incomeTotal += transaction.amount;
        } else {
            expenseTotal += transaction.amount;
        }

    }

    let balanceTotal = incomeTotal - expenseTotal;

    income.textContent = "₹" + incomeTotal;
    expense.textContent = "₹" + expenseTotal;
    balance.textContent = "₹" + balanceTotal;
}
function saveTransactions() {
    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
}
function deleteTransaction(index) {

    transactions.splice(index, 1);
    saveTransactions();

    displayTransactions();

    updateSummary();

}
let savedTransactions = localStorage.getItem("transactions");

if (savedTransactions) {
    transactions = JSON.parse(savedTransactions);

    displayTransactions();
    updateSummary();
}
