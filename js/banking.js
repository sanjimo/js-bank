//disable deposit button
document.getElementById("deposit-input").addEventListener('keyup', function (event) {
    if (event.target.value > 0) {
        document.getElementById('deposit-button').removeAttribute('disabled');
    }
    else {
        document.getElementById('deposit-button').setAttribute('disabled', true);
    }
});


//handle deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the deposited amount
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);


    //get previous deposit amount
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);

    //adding deposit amounts
    const newDepositTotal = newDepositAmount + previousDepositAmount;

    //update deposit total
    depositTotal.innerText = newDepositTotal;


    //get previous account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmountText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountText);

    //update account balance
    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    //console.log(newBalanceTotal);


    //clear the deposit input value field
    depositInput.value = '';
});


//disable withdraw button
document.getElementById("withdraw-input").addEventListener('keyup', function (event) {
    const withdrawButton = document.getElementById('withdraw-button');
    //const withdrawInput = document.getElementById('withdraw-input');
    if (event.target.value > 0) {
        withdrawButton.removeAttribute('disabled');
    }
    else {
        withdrawButton.setAttribute('disabled', true);
    }
    //withdrawInput.value = '';
});


//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get withdraw amount
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);

    //get previous withdraw amount
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmountText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);

    //adding deposit amounts
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;

    //update deposit total
    withdrawTotal.innerText = newWithdrawTotal;

    //get previous account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmountText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountText);

    //update account balance
    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear the withdraw input value field
    withdrawInput.value = '';
});