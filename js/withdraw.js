document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementValueById("withdraw-total", newWithdrawTotal);
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});

/*
document.getElementById("btn-withdraw").addEventListener("click", function () {
  let withdrawField = document.getElementById("withdraw-field");
  let withdrawAmount = document.getElementById("withdraw-total");
  let wantsToWithdraw = withdrawField.value;
  let balance = document.getElementById("balance-total");
  let curBalance = balance.innerText;
  if (parseFloat(wantsToWithdraw) < parseFloat(curBalance)) {
    balance.innerText =
      parseFloat(curBalance) - parseFloat(withdrawField.value);
    withdrawAmount.innerText =
      parseFloat(withdrawAmount.innerText) + parseFloat(withdrawField.value);
  } else {
    console.log("fuck off man");
  }
  withdrawField.value = "";
});
*/
