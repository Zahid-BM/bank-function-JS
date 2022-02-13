// main website background color 
document.body.style.backgroundColor = '#6867AC';

// function for capturing deposit input value 
function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputValue = input.value;
    const inputValueToNumber = parseFloat(inputValue);
    // clear input field after clicking 
    input.value = '';
    return inputValueToNumber;
}

// capture deposit input and show in deposite amount  
document.getElementById('btn-deposit-input').addEventListener('click', function () {
    /*  const depositInput = document.getElementById('input-deposit-amount');
     const depositeInputValue = depositInput.value;
     const depositInputValueNumber = parseFloat(depositeInputValue); */
    const depositeInputValueFunction = getInputValue('input-deposit-amount');
    const depositeAmount = document.getElementById('deposit-amount');
    const depositeAmountInnerText = depositeAmount.innerText;
    const depositAmountInnerTextNumber = parseFloat(depositeAmountInnerText);
    const depositSum = depositAmountInnerTextNumber + depositeInputValueFunction;
    depositeAmount.innerText = depositSum;
    // updating account balance 
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountInnerText = balanceAmount.innerText;
    const balanceAmountInnerTextNumber = parseFloat(balanceAmountInnerText);
    const totalBalanceAmountNumber = depositeInputValueFunction + balanceAmountInnerTextNumber;
    balanceAmount.innerText = totalBalanceAmountNumber;
})
// withdraw amount add then deduct from balance amount 
document.getElementById('btn-withdraw-input').addEventListener('click', function () {
    /* const withdrawInput = document.getElementById('input-withdraw-amount');
    const withdrawInputValue = withdrawInput.value;
    const withdrawInputValueNumber = parseFloat(withdrawInputValue); */
    const withdarwInputValueNumber = getInputValue('input-withdraw-amount');
    const withdrawInputAmount = document.getElementById('withdarw-amount');
    const withdrawInputAmountInnerText = withdrawInputAmount.innerText;
    const withdrawInputAmountInnerTextNumber = parseFloat(withdrawInputAmountInnerText);
    const withdrawInputAmountInnerTextNumberTotal = withdarwInputValueNumber + withdrawInputAmountInnerTextNumber;
    withdrawInputAmount.innerText = withdrawInputAmountInnerTextNumberTotal;
    // deduct from balance 
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountInnerText = balanceAmount.innerText;
    const balanceAmountInnerTextNumber = parseFloat(balanceAmountInnerText);
    const totalBalanceAmountNumber = withdarwInputValueNumber + balanceAmountInnerTextNumber;
    balanceAmount.innerText = totalBalanceAmountNumber;
    // clear input field after clicking 
})

