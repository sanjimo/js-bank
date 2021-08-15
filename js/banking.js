//getInput function
function getInput(inputId) {
    const inputField = document.getElementById(inputId);
    const newInputText = inputField.value;
    const newAmount = parseFloat(newInputText);
    //clear input field
    inputField.value = '';
    // console.log(newAmount);
    return newAmount;
}

//update total amount function
function updateTotalValue(totalFieldId, amount) {
    const previousTotal = document.getElementById(totalFieldId);
    const previousText = previousTotal.innerText;
    const previousAmount = parseFloat(previousText);
    previousTotal.innerText = previousAmount + amount;
}

//get current balance
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    return previousBalanceAmount;
}

//balance update function
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = getCurrentBalance();

    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceAmount + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceAmount - amount;
    }
}


//handle deposit button
document.getElementById('deposit-button').addEventListener('click', function () {

    const newDepositAmount = getInput('deposit-input');
    if (newDepositAmount > 0) {
        updateTotalValue('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
    else {
        alert('Please check your input deposit!');
    }

    //get the deposited amount
    /*const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);*/

    //get previous deposit amount
    /*const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);

    //adding deposit amounts
    const newDepositTotal = newDepositAmount + previousDepositAmount;

    //update deposit total
    depositTotal.innerText = newDepositTotal;*/

    //get previous account balance
    /*const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmountText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountText);*/

    //update account balance
    /*const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;*/
    //console.log(newBalanceTotal);

    //clear the deposit input value field
    //depositInput.value = '';
});



//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {

    const newWithdrawAmount = getInput('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        updateTotalValue('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
    else {
        alert('Check your current balance please!');
    }


    //get withdraw amount
    /*const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);*/

    //get previous withdraw amount
    /*const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmountText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);

    //adding deposit amounts
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;

    //update deposit total
    withdrawTotal.innerText = newWithdrawTotal;*/

    //get previous account balance
    /*const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmountText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountText);*/

    //update account balance
    /* const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;*/

    //clear the withdraw input value field
    // withdrawInput.value = '';
});