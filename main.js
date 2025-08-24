
const validpin=1234
 document.getElementById('add-money-btn')
 .addEventListener('click', function(e) {
  e.preventDefault();
  const Bank = document.getElementById('bank').value;
  const accountnumber = document.getElementById('account-number').value;
  const addamount = parseInt(document.getElementById('add-amount').value);
  const addpin = parseInt(document.getElementById('add-pin').value);
  const availableBalance = parseInt(document.getElementById('available-balance').innerText);
  if(accountnumber.length <11){
    alert('please provied valid account number')
    return;
  }
  if(addpin!=validpin){
    alert('please provied valid pin number')
  }
  const totalnewbalance = addamount + availableBalance;
  document.getElementById('available-balance').innerText = totalnewbalance;
})