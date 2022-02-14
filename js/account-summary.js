// main website background color 
document.body.style.backgroundColor = '#6867AC';

/* ##########################################################################################
####################################################################################
deposite event handler : capture deposit input and show in deposite amount  
##########################################################################################
#################################################################################### */
document.getElementById('btn-deposit-input').addEventListener('click', function () {

    const inputValueNumber = gettingInputValueNumber('input-deposit');

    if (inputValueNumber > 0) {
        /*  show deposit total  */
        gettingInputTotalSum('deposit-amount', inputValueNumber);
        /* updating account balance  */
        adjustingBalance(inputValueNumber, true);
    }
    else {
        alert('You have entered wrong value. Plz input correctly');
    }


})
/* ##########################################################################################
####################################################################################
withdraw event handler: withdraw amount add then deduct from balance amount  
##########################################################################################
#################################################################################### */
document.getElementById('btn-withdraw-input').addEventListener('click', function () {
    const inputValueNumber = gettingInputValueNumber('input-withdraw');
    const currentBalanceAmount = currentBalance();

    if (inputValueNumber > 0 && inputValueNumber < currentBalanceAmount) {
        /*  show withdraw total  */
        gettingInputTotalSum('withdarw-amount', inputValueNumber);
        /*  deduct from balance  */
        adjustingBalance(inputValueNumber, false);
    }
    else {
        alert('You have entered wrong value. Plz input correctly');
    }

})
/* ##########################################################################################
####################################################################################
Functions to avoid code repeatation. 
##########################################################################################
#################################################################################### */
// function for capturing input value and converting into a number
function gettingInputValueNumber(inputIdName) {
    const input = document.getElementById(inputIdName);
    const inputValue = input.value;
    const inputValueToNumber = parseFloat(inputValue);
    // clear input field after clicking 
    input.value = '';
    return inputValueToNumber;
}
// function for capturing input amount value total and display sum
function gettingInputTotalSum(amountId, inputValueNumber) {
    // debugger; /* to see in browser console how the function works */
    const depositeAmount = document.getElementById(amountId);
    const depositAmountNumber = parseFloat(depositeAmount.innerText);
    const sum = inputValueNumber + depositAmountNumber;
    depositeAmount.innerText = sum;
}
// function for adjusting balance amount 
function adjustingBalance(inputValueNumber, isAdd) {
    const balanceAmount = document.getElementById('balance-amount');
    const currentBalanceAmount = currentBalance();
    if (isAdd == true) {
        const totalBalanceAmountNumber = currentBalanceAmount + inputValueNumber;
        balanceAmount.innerText = totalBalanceAmountNumber;
    }
    else {
        const totalBalanceAmountNumber = currentBalanceAmount - inputValueNumber;
        balanceAmount.innerText = totalBalanceAmountNumber;
    }
}
// function for current balance 
function currentBalance() {
    const findBalanceAmount = document.getElementById('balance-amount');
    const balanceAmountInnerText = findBalanceAmount.innerText;
    const balanceAmountInnerTextNumber = parseFloat(balanceAmountInnerText);
    return balanceAmountInnerTextNumber;
}

