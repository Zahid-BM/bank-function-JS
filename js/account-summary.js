// main website background color 
document.body.style.backgroundColor = '#6867AC';

/* ##########################################################################################
####################################################################################
deposite event handler : capture deposit input and show in deposite amount  
##########################################################################################
#################################################################################### */
document.getElementById('btn-deposit-input').addEventListener('click', function () {
    /*  show deposit total  */
    const inputValueNumber = gettingInputValueNumber('input-deposit');
    gettingInputTotalSum('deposit-amount', inputValueNumber);
    /* updating account balance  */
    adjustingBalance(inputValueNumber, true);
})
/* ##########################################################################################
####################################################################################
withdraw event handler: withdraw amount add then deduct from balance amount  
##########################################################################################
#################################################################################### */
document.getElementById('btn-withdraw-input').addEventListener('click', function () {
    /*  show withdraw total  */
    const inputValueNumber = gettingInputValueNumber('input-withdraw');
    gettingInputTotalSum('withdarw-amount', inputValueNumber);
    /*  deduct from balance  */
    adjustingBalance(inputValueNumber, false);

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
    const balanceAmountInnerText = balanceAmount.innerText;
    const balanceAmountInnerTextNumber = parseFloat(balanceAmountInnerText);
    if (isAdd == true) {
        const totalBalanceAmountNumber = balanceAmountInnerTextNumber + inputValueNumber;
        balanceAmount.innerText = totalBalanceAmountNumber;
    }
    else {
        const totalBalanceAmountNumber = balanceAmountInnerTextNumber - inputValueNumber;
        balanceAmount.innerText = totalBalanceAmountNumber;
    }
}

