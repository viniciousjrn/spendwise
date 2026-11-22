# SpendWise — JavaScript Foundation

## What SpendWise Does
SpendWise is a personal budgeting web application that helps users track their monthly income/budget against key expenses. With this JavaScript foundation update, the app moves beyond a static layout to collect user budgeting inputs, compute total spending and remaining balances, and display a formatted financial summary in the browser console.

## JavaScript Concepts Implemented
- **External Script Linking:** Connected `script.js` to `index.html` using `<script src="script.js"></script>`.
- **Variables & Data Types:** Used `const` and `let` with `string`, `number`, and `boolean` values.
- **User Input & Type Conversion:** Collected interactive user input using `prompt()` and converted numeric strings into numbers using `Number()`.
- **Arithmetic & Logical Operations:** Calculated total expenses, remaining balance, percentage of budget spent, and whether the user remained within budget.
- **Reusable Functions:** Organized calculations and console reporting into dedicated, single-purpose functions.
- **Console Output:** Formatted clearly labeled summaries in the browser console using `console.log()` and template literals.

## How Variables Are Being Used
- **Configuration & Identity (`const` / `let` strings):** `appName`, `currency`, `userName`, `firstExpenseName`, and `secondExpenseName` store descriptive labels for the summary output.
- **Financial Figures (`let` numbers):** `monthlyBudget`, `firstExpenseAmount`, `secondExpenseAmount`, `totalExpenses`, and `remainingBalance` store monetary values for arithmetic processing.
- **Status Tracking (`let` boolean):** `isWithinBudget` evaluates whether `remainingBalance >= 0` to indicate if spending is on track.

## How User Input Is Collected
User input is gathered through browser `prompt()` dialogs when the page loads. Users enter their name, their total monthly budget, and the names and amounts of two expenses. Numeric inputs are wrapped in `Number(...)` so they are stored as numbers rather than text strings before any math is performed.

## How Calculations Are Performed
1. **Total Expenses:** Adds the first and second expense amounts together (`expense1 + expense2`).
2. **Remaining Balance:** Subtracts `totalExpenses` from `monthlyBudget` (`budget - totalExpenses`).
3. **Budget Percentage Used:** Divides `totalExpenses` by `monthlyBudget`, multiplies by `100`, and rounds to one decimal place with `.toFixed(1)`.

## How Functions Help Organize the Code
Instead of writing all math and output logic in one flat script, the program separates responsibilities into four reusable functions:
- `calculateTotalExpenses(expense1, expense2)` sums expense entries.
- `calculateRemainingBalance(budget, totalExpenses)` computes the leftover balance.
- `calculateSpendingPercentage(budget, totalExpenses)` safely calculates the percentage of the budget spent (guarding against division by zero).
- `displayBudgetSummary()` formats and prints all labeled results cleanly to the browser console.

## How to Run
1. Clone or download this repository.
2. Open `index.html` in any modern web browser.
3. Follow the on-screen prompts to enter your budget and expenses.
4. Open the browser Developer Console (`F12` or `Ctrl+Shift+I` / `Cmd+Option+I`) to inspect the calculated SpendWise summary.
