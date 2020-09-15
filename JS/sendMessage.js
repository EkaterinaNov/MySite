var formElement=document.forms.messageForm;
formElement.onsubmit=validateMessageForm;


function validateMessageForm() {
    var customerNameElement = formElement.elements.customerName;
    var customerEmailElement = formElement.elements.customerEmail;
    var customerMessageElement = formElement.elements.customerMessage;

    var customerNameValue=customerNameElement.value;
    var customerEmailValue=customerEmailElement.value;
    var customerMessageValue=customerMessageElement.value;

    var mandatoryInMailFirst = "@";
    var mandatoryInMailSecond = ".";
    var falseAnswer = -1;

    if (customerNameValue.length > 30) {
        alert('Please enter a name no longer than 30 characters');
        customerNameElement.focus();
        return false;
    }

    if (customerEmailValue.indexOf(mandatoryInMailFirst) === falseAnswer) {
        alert('Please enter correct email');
        customerEmailElement.focus();
        return false;
    }

    else if (customerEmailValue.indexOf(mandatoryInMailSecond) === falseAnswer) {
        alert('Please enter correct email');
        customerEmailElement.focus();
        return false;
    }

    if (customerMessageValue.length < 20) {
        alert('Please enter a message of at least 20 characters');
        customerMessageElement.focus();
        return false;
    }

    return true;
}