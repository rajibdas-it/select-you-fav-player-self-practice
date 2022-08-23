//Create a function for getting input field value by using id as a parameter
function getValueFromInputFieldByID(elementId) {
  const inputField = document.getElementById(elementId);
  const expenseString = inputField.value;
  const expense = parseFloat(expenseString);
  if (expense <= 0) {
    alert("Expense Amount Cannot be Zero or less than Zero");
  } else {
    return expense;
  }
}

//Create a function for set value in html tag
function setTextValueById(elementId, newValue) {
  const expenseTag = document.getElementById(elementId);
  expenseTag.innerText = newValue;
}
