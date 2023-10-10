
const monthlyPayment = document.querySelector("#monthly-payment");
calculateLoan();
function calculateLoan(){
    const loanAmount = document.querySelector("#loan-amount").value;
    const interestRate = document.querySelector("#interest-rate").value;
    const monthsToPay = document.querySelector("#months-to-pay").value;
    console.log( loanAmount, interestRate ,  monthsToPay);
    result = ((loanAmount *  interestRate * 0.01) /  monthsToPay ).toFixed(3); 
    monthlyPayment.innerText = `Monthly Payment : ${result}`;
    console.log(result);
}