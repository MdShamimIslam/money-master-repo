
function getInputFieldById(elementId) {
    const valueField = document.getElementById(elementId);
    const valueFieldString = valueField.value;
    const value = parseInt(valueFieldString);
    // valueField.value = '';
    return value;
}

function getTextElementById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementString = textElement.innerText;
    const textElementValue = parseInt(textElementString);
    // textElement.innerText = '';
    return textElementValue;
}

function setElementValueById(elementId, value) {
    const elementValue = document.getElementById(elementId);
    elementValue.innerText = value;
}

document.getElementById('calc-btn').addEventListener('click', function () {
    const incomeField = getInputFieldById('income-field');
    const foodField = getInputFieldById('food-field');
    const rentField = getInputFieldById('rent-field');
    const clothField = getInputFieldById('cloth-field');

    getTextElementById('total-expenses');
    getTextElementById('balance-total');

    const totalExpensesAmount = foodField + clothField + rentField;
    const currentBalance = incomeField - totalExpensesAmount;

    setElementValueById('total-expenses', totalExpensesAmount);
    const balanceTotal = setElementValueById('balance-total', currentBalance);
})

document.getElementById('save-btn').addEventListener('click', function () {
    const saveField = getInputFieldById('save-field');
    const savingAmount = getTextElementById('saving-amount');
    const remainingBalance = getTextElementById('remaining-amount');

    const saving = (saveField / incomeField) * 100;
    const saveTotal = setElementValueById('saving-amount', saving);

    const remaingBalance = balanceTotal - saveTotal;
    setElementValueById('remaining-amount', remaingBalance);

})