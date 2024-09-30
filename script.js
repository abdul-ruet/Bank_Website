// Login Button event handler

const loginBtn = document.getElementById("login");
      loginBtn.addEventListener("click", function () {
        const loginArea = document.getElementById("login-area");
        loginArea.style.display = "none";
        const transactionArea = document.getElementById("transaction-area");
        transactionArea.style.display = "block";
      });

// deposit button

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener('click', function(){
    
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber= parseFloat(depositAmount);


    // const currentDeposit = document.getElementById('current-deposit').innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);

    // const totalDeposit = depositNumber + currentDepositNumber;
    // // console.log(totalDeposit);
    // document.getElementById('current-deposit').innerText = totalDeposit;
    updateSpanText("current-deposit", depositNumber)

    document.getElementById('depositAmount').value = "";
    updateSpanText("current-balance", depositNumber)

    // const currentBalance = document.getElementById('current-balance').innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositNumber + currentBalanceNumber ;
    // document.getElementById("current-balance").innerText = totalBalance;

    document.getElementById("depositAmount").value = "";


})

//withdraw button
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click" ,function(){
  //const withdrawNumber = getInputNumber ("withdrawAmount");
  const withdrawNumber = getInputNumber("withdrawAmount")
  console.log(withdrawNumber);
 
   
})
function getInputNumber(id){
  const withdrawAmount = document.getElementById(id).value;
  const withdrawNumber = parseFloat(withdrawAmount);
  return withdrawNumber;

}

function updateSpanText(id, depositNumber){
  const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber ;
    document.getElementById(id).innerText = totalAmount;


}