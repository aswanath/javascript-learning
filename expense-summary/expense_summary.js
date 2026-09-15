function calculateTotal(expenses) {
  return expenses.reduce((val, expense) => expense.amount + val, 0);
}

function calculateCategoryTotal(expenses, category) {
  return expenses.reduce((val, expense) => {
    if (expense.category === category) {
      return expense.amount + val;
    }
    return val;
  }, 0);
}

function findLargestExpense(expenses) {
  return expenses.reduce((val, expense) => {
    if (expense.amount > val.amount) {
      return expense;
    }
    return val;
  }, expenses[0]);
}

function createExpenseSummary(expenses) {
  const total = calculateTotal(expenses);
  const foodTotal = calculateCategoryTotal(expenses, "food");
  const transportTotal = calculateCategoryTotal(expenses, "transport");
  const largestExpense = findLargestExpense(expenses);
  return {
    total,
    foodTotal,
    transportTotal,
    largestExpense,
  };
}

const expenses = [
  { id: 1, category: "food", amount: 24 },
  { id: 2, category: "transport", amount: 15 },
  { id: 3, category: "food", amount: 18 },
  { id: 4, category: "books", amount: 40 },
];

console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, "food"));
console.log(calculateCategoryTotal(expenses, "health"));
console.log(findLargestExpense(expenses));
