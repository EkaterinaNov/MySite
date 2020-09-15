var formElement=document.forms.commentsForm;
formElement.onsubmit=validateCommentsForm;

function validateCommentsForm() {
    var customerCommentsElement = formElement.elements.customerComments;
    var customerNameElement = formElement.elements.customerName;
    var customerEmailElement = formElement.elements.customerEmail;
    var customerWebsiteElement = formElement.elements.customerWebsite;

    var customerCommentsValue=customerCommentsElement.value;
    var customerNameValue=customerNameElement.value;
    var customerEmailValue=customerEmailElement.value;
    var customerWebsiteValue=customerWebsiteElement.value;

    var mandatoryInMailFirst = "@";
    var mandatoryInMailSecond = ".";
    var falseAnswer = -1;

    if (customerCommentsValue.length < 20) {
        alert('Please enter a comments of at least 20 characters');
        customerCommentsElement.focus();
        return false;
    }

    if (customerNameValue.length > 30) {
        alert('Please enter a name no longer than 30 characters');
        customerNameElement.focus();
        return false;
    }

    else if (customerNameValue.length === 0) {
        alert('Please enter your name');
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

    if (customerWebsiteValue.length > 0 && customerWebsiteValue.indexOf(mandatoryInMailSecond, 2) === falseAnswer) {
        alert('Please enter correct website');
        customerWebsiteElement.focus();
        return false;
    }
}