// Confirm script connection
console.log("=== SpendWise Budget Tracker Initialized ===");

// 1. Application Data Variables (Strings & Numbers)
const appName = "SpendWise";
const currency = "KES";

// 2. Collect User Input via Prompts
let userName = prompt("Welcome to SpendWise! What is your name?") || "User";
let monthlyBudget = Number(prompt(`Hi ${userName}, enter your total monthly budget (${currency}):`));

let firstExpenseName = prompt("Enter the name of your first expense (e.g., Rent):") || "Expense 1";
let firstExpenseAmount = Number(prompt(`Enter the amount for ${firstExpenseName} (${currency}):`));

let secondExpenseName = prompt("Enter the name of your second expense (e.g., Groceries):") || "Expense 2";
let secondExpenseAmount = Number(prompt(`Enter the amount for ${secondExpenseName} (${currency}):`));

// 3. Reusable Calculation Functions
function calculateTotalExpenses(expense1, expense2) {
  return expense1 + expense2;
}

function calculateRemainingBalance(budget, totalExpenses) {
  return budget - totalExpenses;
}

function calculateSpendingPercentage(budget, totalExpenses) {
  if (budget <= 0) {
    return 0;
  }
  return ((totalExpenses / budget) * 100).toFixed(1);
}

// 4. Perform Budget Calculations Using Functions
let totalExpenses = calculateTotalExpenses(firstExpenseAmount, secondExpenseAmount);
let remainingBalance = calculateRemainingBalance(monthlyBudget, totalExpenses);
let percentageUsed = calculateSpendingPercentage(monthlyBudget, totalExpenses);
let isWithinBudget = remainingBalance >= 0;

// 5. Display Clearly Labeled Results in the Browser Console
function displayBudgetSummary() {
  console.log(`\n--- ${appName} Summary for ${userName} ---`);
  console.log(`Monthly Budget:      ${currency} ${monthlyBudget.toFixed(2)}`);
  console.log(`1. ${firstExpenseName}: ${currency} ${firstExpenseAmount.toFixed(2)}`);
  console.log(`2. ${secondExpenseName}: ${currency} ${secondExpenseAmount.toFixed(2)}`);
  console.log("------------------------------------------");
  console.log(`Total Expenses:      ${currency} ${totalExpenses.toFixed(2)}`);
  console.log(`Remaining Balance:   ${currency} ${remainingBalance.toFixed(2)}`);
  console.log(`Budget Used:         ${percentageUsed}%`);
  console.log(`Within Budget?:      ${isWithinBudget ? "Yes (On Track)" : "No (Over Budget)"}`);
}

displayBudgetSummary();
