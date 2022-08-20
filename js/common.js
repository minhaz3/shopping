// getting id by this function
function getElementByAnId(id) {
    const getId = document.getElementById(id);
    const getIdValueString = getId.innerText;
    const getIdValueNumber = parseInt(getIdValueString);
    return getIdValueNumber;

}

// set innertext by a function
function setInnerText(element, value) {
    const getElement = document.getElementById(element);
    getElement.innerText = value;
}


function calculateAllPrices() {
    // get sub total 
    const getPhoneTotalPrice = getElementByAnId("phone-total-bal");
    const getCaseTotalPrice = getElementByAnId("case-total-bal");

    // calculate sub total
    const subTotalPrice = getPhoneTotalPrice + getCaseTotalPrice;

    // sent sub total as sub total inner text
    setInnerText("sub-total", subTotalPrice);

    // calculateTax
    const calculateTax = (subTotalPrice * 0.1).toFixed(2);
    const tax = parseFloat(calculateTax);

    // set tax as taxt balance innertext
    setInnerText("sub-total-tax", tax)

    // calculate sub total and taxs sent it on total price
    const totalPrice = subTotalPrice + tax;

    // totalPrice  sent it on total prices
    setInnerText('total', totalPrice);
}
