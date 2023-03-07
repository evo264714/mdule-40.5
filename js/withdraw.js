// *Add even handler with withdraw button
// *Get the withdraw amount from the withdraw input field
// *Also make sure to convert the input into a number by using parseFloat
// *Get previous withdraw total 
// *Calculate total withdraw amount
// *Set total withdraw amount
// * Get the previous balance total
// *Clculate new balance total
// *Set the balance total
// *Clear the input field

//* Step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){

//* step-2:
const withdrawField = document.getElementById('withdraw-field');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);

//* Step-7:
withdrawField.value = '';

if(isNaN(newWithdrawAmount)){
    alert('Please provide a number');
    return;
}

//* step-3:
const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);



//* Step-5:
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

if(newWithdrawAmount > previousBalanceTotal){
    alert('Not enough money');
    return;
}

//* Step-4:
const currentWithdrawTotal = previousWithdrawTotal +  newWithdrawAmount;
withdrawTotalElement.innerText = currentWithdrawTotal;

//* Step-6:
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotalElement.innerText = newBalanceTotal;


})