let playerExpense = 0;

//Event Listner added for caculate palyer expense button.
document
  .getElementById("btn-player-cost")
  .addEventListener("click", function () {
    const perPlayerExpense = getValueFromInputFieldByID("per-player-expense");
    // console.log(perPlayerCost);
    const totalPlayerExpense = perPlayerExpense * palyersName.length; //getting array.length from palyersName array of app.js

    if (isNaN(totalPlayerExpense)) {
      setTextValueById("player-expense", 0);
    } else {
      playerExpense = playerExpense + totalPlayerExpense;
      setTextValueById("player-expense", totalPlayerExpense);
    }
  });

//Event Listner added for caculate total expense with palyer expense.
document
  .getElementById("btn-total-cost")
  .addEventListener("click", function () {
    //console.log("button clicked");
    const managerExpense = getValueFromInputFieldByID("manager-expense");
    const coachExpense = getValueFromInputFieldByID("coach-expense");
    const totalExpense = playerExpense + managerExpense + coachExpense;
    //console.log(totalExpense);
    if (isNaN(totalExpense)) {
      setTextValueById("total-expense", 0);
    } else {
      setTextValueById("total-expense", totalExpense);
    }
  });
