function caseNumber(anything) {
    const getPreviousCaseInputField = document.getElementById("case-num-input");
    const getPreviousCaseInputString = getPreviousCaseInputField.value;
    const getPreviousCaseInputNumber = parseInt(getPreviousCaseInputString);
    let totalCaseNumber;
    if (anything === true) {
        totalCaseNumber = getPreviousCaseInputNumber + 1;
    }
    else {

        if (getPreviousCaseInputNumber > 0) {
            totalCaseNumber = getPreviousCaseInputNumber - 1;
        }
        else {
            return;
        }
    }
    getPreviousCaseInputField.value = totalCaseNumber;
    return totalCaseNumber;
}

// function for calculate case priceses
function casePrice(number) {
    const getCasePriceInput = document.getElementById("case-total-bal");
    if (number >= 0) {
        const casePriceTotal = number * 59;
        getCasePriceInput.innerText = casePriceTotal;
    }
    else {
        return;
    }

}




// call the plus button by addeventlistener
document.getElementById("case-plus-btn").addEventListener('click', function () {
    // calling fot plus button
    const getcase = caseNumber(true);

    // calculate case price by increaseing
    casePrice(getcase);

    // calculateAllPrices by a function which is in common.js file
    calculateAllPrices();
})

// call the minus button by addEventListener
document.getElementById("case-minus-btn").addEventListener('click', function () {
    // calling for minus button
    const getcase = caseNumber(false);

    // calculate case price by decreaseing
    casePrice(getcase);

    // calculateAllPrices by a function which is in common.js file
    calculateAllPrices();
})
