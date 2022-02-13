// main website background color 
document.body.style.backgroundColor = '#6867AC';
// capture deposit input and show in deposite amount  
document.getElementById('btn-deposit-input').addEventListener('click', function () {
    // shortcut 
    /*  parseFloat(document.getElementById('deposit-amount').innerText) + parseFloat(document.getElementById('input-deposit-amount').value);
     document.getElementById('deposit-amount').innerText = parseFloat(document.getElementById('deposit-amount').innerText) + parseFloat(document.getElementById('input-deposit-amount').value); */

    // using shortcut and variable
    /*  const depositInputValue = parseFloat(document.getElementById('input-deposit-amount').value);
     const depositAmount = parseFloat(document.getElementById('deposit-amount').innerText);
     const result = depositInputValue + depositAmount;
     document.getElementById('deposit-amount').innerText = result; */

    // using variable and best practice 
    const depositInput = document.getElementById('input-deposit-amount');
    const depositInputNumber = parseFloat(depositInput.value);
    const depositeAmount = document.getElementById('deposit-amount');
    const depositAmountNumber = parseFloat(depositeAmount.innerText);
    const sum = depositInputNumber + depositAmountNumber;
    depositeAmount.innerText = sum;
    // clear input field after clicking 
    depositInput.value = '';
    // updating account balance 
    const balance = document.getElementById('balance-amount');
    const balanceAmountNumber = parseFloat(balance.innerText);
    const totalBalanceAmountNumber = depositInputNumber + balanceAmountNumber;
    balance.innerText = totalBalanceAmountNumber;
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

