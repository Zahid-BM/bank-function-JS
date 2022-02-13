// main website background color 
document.body.style.backgroundColor = '#6867AC';

// function for capturing deposit input value 
function getInputValue() {
    const depositInput = document.getElementById('input-deposit-amount');
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
    const depositeInputValueFunction = getInputValue();
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
    const withdrawInputNumber = parseFloat(withdrawInput.value);
    const withdrawInputAmout = document.getElementById('withdarw-amount');
    const withdrawInputAmoutNumber = parseFloat(withdrawInputAmout.innerText);
    const withdrawInputAmoutNumberTotal = withdrawInputNumber + withdrawInputAmoutNumber;
    withdrawInputAmout.innerText = withdrawInputAmoutNumberTotal;
    // deduct from balance 
    const balance = document.getElementById('balance-amount');
    const balanceAmountNumber = parseFloat(balance.innerText);
    const balanceAmountTotal = balanceAmountNumber + withdrawInputAmoutNumber;
    balance.innerText = balanceAmountTotal - withdrawInputAmoutNumberTotal;

    withdrawInput.value = '';
})

