document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueById("deposit-field");
  const previousDepositTotal = getTextElementValueById("deposit-total");

  const newDepositTotal = newDepositAmount + previousDepositTotal;

  setTextElementValueById("deposit-total", newDepositTotal);

  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});

/*
document.getElementById("btn-deposit").addEventListener("click", function () {
  let depositField = document.getElementById("deposit-field");
  let curDeposit = document.getElementById("deposit-total");

  let deposit =
    parseFloat(curDeposit.innerText) + parseFloat(depositField.value);
  curDeposit.innerText = deposit;
  let curBalance = document.getElementById("balance-total");
  curBalance.innerText =
    parseFloat(curBalance.innerText) + parseFloat(depositField.value);
  depositField.value = "";
});
*/
