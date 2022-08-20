// increase and decrease by pressing plus and minus button 
function updatePhoneNumber(inOrDecrease) {
    const inputField = document.getElementById('phone-num-input');
    const inputFieldString = inputField.value;
    const inputFieldNumber = parseInt(inputFieldString);

    let newPhoneNumber;
    if (inOrDecrease) {
        newPhoneNumber = inputFieldNumber + 1;
    }
    else {
        if (inputFieldNumber > 1) {
            newPhoneNumber = inputFieldNumber - 1;
        }
        else {
            return;
        }
    }
    inputField.value = newPhoneNumber;
    return newPhoneNumber;
}

// calculate phonePrice
function phonePrice(newPhoneNumber) {
    const getAPhonePrice = document.getElementById('phone-total-bal');
    if (newPhoneNumber >= 1) {
        const calculatePhonePrice = newPhoneNumber * 1219;
        getAPhonePrice.innerText = calculatePhonePrice;
        return calculatePhonePrice;
    }
    else {
        return;
    }
}



// plus button
document.getElementById('phone-plus-btn').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    phonePrice(newPhoneNumber);
    calculateSubTotal();
})

// minus button
document.getElementById('phone-minus-btn').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);
    phonePrice(newPhoneNumber);
    calculateSubTotal();
})


