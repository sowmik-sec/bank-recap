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
