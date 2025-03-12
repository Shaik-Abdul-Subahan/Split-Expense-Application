function split() {
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');
    let result = (amount.value / persons.value).toFixed(2);
    document.getElementById('title').innerText = '₹' + result;
}
function reset() {
    document.getElementById('amount').value = '';
    document.getElementById('persons').value = '';
    document.getElementById('title').innerHTML = '👉💰';
    document.getElementById('result').innerHTML = '';
}