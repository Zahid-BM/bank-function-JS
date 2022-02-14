// main website background color 
document.body.style.backgroundColor = '#6867AC';

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

// capture deposit input and show in deposite amount  
document.getElementById('btn-deposit-input').addEventListener('click', function () {
    const inputValueNumber = gettingInputValueNumber('input-deposit');
    gettingInputTotalSum('deposit-amount', inputValueNumber);
    // updating account balance 
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountInnerText = balanceAmount.innerText;
    const balanceAmountInnerTextNumber = parseFloat(balanceAmountInnerText);
    const totalBalanceAmountNumber = inputValueNumber + balanceAmountInnerTextNumber;
    balanceAmount.innerText = totalBalanceAmountNumber;
})
// withdraw amount add then deduct from balance amount 
document.getElementById('btn-withdraw-input').addEventListener('click', function () {
    const inputValueNumber = gettingInputValueNumber('input-withdraw');
    gettingInputTotalSum('withdarw-amount', inputValueNumber);
    // deduct from balance 
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountInnerText = balanceAmount.innerText;
    const balanceAmountInnerTextNumber = parseFloat(balanceAmountInnerText);
    const totalBalanceAmountNumber = inputValueNumber + balanceAmountInnerTextNumber;
    balanceAmount.innerText = totalBalanceAmountNumber;
    // clear input field after clicking 
})

