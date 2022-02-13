// main website background color 
document.body.style.backgroundColor = '#6867AC';

// function for capturing input value 
function gettingInputValue(inputIdName) {
    const input = document.getElementById(inputIdName);
    const inputValue = input.value;
    const inputValueToNumber = parseFloat(inputValue);
    // clear input field after clicking 
    input.value = '';
    return inputValueToNumber;
}
// function for capturing input total value 
function inputTotalSum(amountidName) {
    const totalInputAmount = document.getElementById(amountidName)
    const totalInputAmountInnerText = totalInputAmount.innerText;
    const totalInputAmountInnerTextNumber = parseFloat(totalInputAmountInnerText);
    totalInputAmount.innerText = totalInputAmountInnerTextNumber;
    return totalInputAmountInnerTextNumber;
}

// capture deposit input and show in deposite amount  
document.getElementById('btn-deposit-input').addEventListener('click', function () {
    const depositeInputValueNumber = gettingInputValue('input-deposit-amount');
    const totalDeposit = inputTotalSum('deposit-amount');
    const depositAmount = document.getElementById('deposit-amount');
    const depositSummery = totalDeposit + depositeInputValueNumber;
    // console.log('Success');
    depositAmount.innerText = depositSummery;
    // updating account balance 
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountInnerText = balanceAmount.innerText;
    const balanceAmountInnerTextNumber = parseFloat(balanceAmountInnerText);
    const totalBalanceAmountNumber = depositeInputValueNumber + balanceAmountInnerTextNumber;
    balanceAmount.innerText = totalBalanceAmountNumber;
})
// withdraw amount add then deduct from balance amount 
document.getElementById('btn-withdraw-input').addEventListener('click', function () {
    const withdarwInputValueNumber = gettingInputValue('input-withdraw-amount');
    const totalwithdraw = inputTotalSum('withdarw-amount');
    const withdrawSummery = totalwithdraw + withdarwInputValueNumber;
    const withdrawInputAmount = document.getElementById('withdarw-amount');
    withdrawInputAmount.innerText = withdrawSummery;
    // deduct from balance 
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountInnerText = balanceAmount.innerText;
    const balanceAmountInnerTextNumber = parseFloat(balanceAmountInnerText);
    const totalBalanceAmountNumber = withdarwInputValueNumber + balanceAmountInnerTextNumber;
    balanceAmount.innerText = totalBalanceAmountNumber;
    // clear input field after clicking 
})

