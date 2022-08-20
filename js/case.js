// increase and decrease by pressing plus and minus button 
function updateCaseNumber(inOrDecrease) {
    const inputField = document.getElementById('case-num-input');
    const inputFieldString = inputField.value;
    const inputFieldNumber = parseInt(inputFieldString);

    let newCaseNumber;
    if (inOrDecrease) {
        newCaseNumber = inputFieldNumber + 1;
    }
    else {
        if (inputFieldNumber > 1) {
            newCaseNumber = inputFieldNumber - 1;
        }
        else {

            return;
        }
    }
    inputField.value = newCaseNumber;
    return newCaseNumber;
}

// calculate phonePrice
function casePrice(newCaseNumber) {
    const getACasePrice = document.getElementById('case-total-bal');
    if (newCaseNumber >= 1) {
        const calculatePhonePrice = newCaseNumber * 59;
        getACasePrice.innerText = calculatePhonePrice;
    }
    else {
        return;
    }
}









// plus button
document.getElementById('case-plus-btn').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    casePrice(newCaseNumber);
    calculateSubTotal();

})

// minus button
document.getElementById('case-minus-btn').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    casePrice(newCaseNumber);
    calculateSubTotal();

})