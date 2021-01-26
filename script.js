const enterButton = document.getElementsByClassName("btn")[0];
const container = document.getElementsByClassName("container")[0];
const transactionArea = document.getElementsByClassName("transaction-area")[0];
enterButton.addEventListener('click', () => {
    container.style.display = "none";
    transactionArea.style.display = "block";
});

const depositInput = document.getElementsByClassName("input-field")[2];
const withdrawInput = document.getElementsByClassName("input-field")[3];
const depositButton = document.getElementsByClassName("btn")[1];
const withdrawButton = document.getElementsByClassName("btn")[2];

depositButton.addEventListener('click', () => {
    let depositAmount = parseFloat(depositInput.value);
    setValues("deposit-amount", depositAmount);
    setValues("total-balance", depositAmount);
    depositInput.value = "";
});

withdrawButton.addEventListener('click', () => {
    let withdrawAmount = parseFloat(withdrawInput.value);
    setValues("withdraw-amount", withdrawAmount);
    setValues("total-balance", -1 * withdrawAmount);
    withdrawInput.value = "";
});

function setValues(id, amount) {
    let currentValue = parseFloat(document.getElementById(id).innerText);
    document.getElementById(id).innerText = amount + currentValue;
}