// Increase and Decrease by pressing button
function phoneNumber(anything) {
    const getPreviousPhoneInputField = document.getElementById("phone-num-input");
    const getPreviousPhoneInputString = getPreviousPhoneInputField.value;
    const getPreviousPhoneInputNumber = parseInt(getPreviousPhoneInputString);
    let totalPhoneNumber;
    if (anything === true) {
        totalPhoneNumber = getPreviousPhoneInputNumber + 1;
    }
    else {
        // the phone number can not be less than 1
        if (getPreviousPhoneInputNumber > 0) {
            totalPhoneNumber = getPreviousPhoneInputNumber - 1;
        }
        else {
            return;
        }
    }

    getPreviousPhoneInputField.value = totalPhoneNumber;
    return totalPhoneNumber;
}

// function for calculate case priceses
function phonePrice(number) {
    const phonePrice = document.getElementById('phone-total-bal');
    if (number >= 0) {
        const phonePriceTotal = number * 1219;
        phonePrice.innerText = phonePriceTotal;
    }
}


// call the plus button by addeventlistener
document.getElementById('phone-plus-btn').addEventListener('click', function () {
    // calling fot plus button
    const getphone = phoneNumber(true);

    // calculate phone price by increaseing
    phonePrice(getphone);

    // calculateAllPrices by a function which is in common.js file
    calculateAllPrices();
})

// call the minus button by addEventListener
document.getElementById('phone-minus-btn').addEventListener('click', function () {
    // calling for minus button
    const getphone = phoneNumber(false);

    // calculate phone price by decreaseing
    phonePrice(getphone);

    // calculateAllPrices by a function which is in common.js file
    calculateAllPrices();
})