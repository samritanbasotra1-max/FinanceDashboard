let balance=document.getElementById("balance");
balance.textContent="$500";
let income=document.getElementById("income");
income.textContent="1000";
let expenses=document.getElementById("expenses");
expenses.textContent="$500";

let button = document.getElementById("addBtn");

button.addEventListener("click", function () {
    console.log("Button Clicked!");
});

function addTransaction() {
    console.log("Transaction Added!");
        event.preventDefault();
        console.log(titleInput.value);
       console.log(amountInput.value);
       console.log(categoryInput.value);
      console.log(dateInput.value);
}

button.addEventListener("click", addTransaction);

let titleInput = document.getElementById("title");

let amountInput = document.getElementById("amount");

let categoryInput = document.getElementById("category");

let dateInput = document.getElementById("date");