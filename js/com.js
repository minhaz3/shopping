function getElementId(id) {
    const getId = document.getElementById(id);
    const getIdString = getId.innerText;
    const getIdNumber = parseInt(getIdString);
    return getIdNumber;
}

function setTextElementValueById(elementId, value) {
    const subTotalElementis = document.getElementById(elementId);
    subTotalElementis.innerText = value;
    // console.log(subTotalElement);
}

function calculateSubTotal() {
    // calculate total

    const currentTotalPhone = getElementId('phone-total-bal');

    const currentCaseTotal = getElementId('case-total-bal');


    const currentSubTotal = currentTotalPhone + currentCaseTotal;

    setTextElementValueById('sub-total', currentSubTotal);
    // calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('sub-total-tax', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('total', finalAmount);
}