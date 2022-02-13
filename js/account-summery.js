// main website background color 
document.body.style.backgroundColor = '#6867AC';

// function for capturing deposit input value 
function getInputValue(inputId) {
    const depositInput = document.getElementById(inputId);
    const depositeInputValue = depositInput.value;
    const depositInputValueNumber = parseFloat(depositeInputValue);
    // clear input field after clicking 
    depositInput.value = '';
    return depositInputValueNumber;
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
    const withdrawInput = document.getElementById('input-withdraw-amount');
    const withdrawInputValue = withdrawInput.value;
    const withdrawInputValueNumber = parseFloat(withdrawInputValue);
    const withdrawInputAmount = document.getElementById('withdarw-amount');
    const withdrawInputAmountInnerText = withdrawInputAmount.innerText;
    const withdrawInputAmountInnerTextNumber = parseFloat(withdrawInputAmountInnerText);
    const withdrawInputAmountInnerTextNumberTotal = withdrawInputValueNumber + withdrawInputAmountInnerTextNumber;
    withdrawInputAmount.innerText = withdrawInputAmountInnerTextNumberTotal;
    // deduct from balance 
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountInnerText = balanceAmount.innerText;
    const balanceAmountInnerTextNumber = parseFloat(balanceAmountInnerText);
    const balanceAmountInnerTextNumberTotal = balanceAmountInnerTextNumber + withdrawInputAmountInnerTextNumber;
    balance.innerText = balanceAmountInnerTextNumberTotal - withdrawInputAmountInnerTextNumber;
    // clear input field after clicking 
    withdrawInput.value = '';
})

