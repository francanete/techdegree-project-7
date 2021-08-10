/*      focus()
 *      set the focus on the input 'name' on page load
 */


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('name').focus();
});

/*      "Job Role" section      */

const jobRole = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');
otherJobRole.hidden = true;

jobRole.addEventListener('change', e => {
    if (e.target.value === 'other'){
        otherJobRole.hidden = false;
    } else if (e.target.value !== 'other'){
        otherJobRole.hidden = true;
    }
});

/*      "T-Shirt Info" section      */


const design = document.getElementById('design');
const color = document.getElementById('color');
const colorOptions = document.getElementById('color').children;
color.disabled = true;


design.addEventListener('change', e => {
    color.disabled = false;
    for (let i = 0; i < colorOptions.length; i++){
        const value = e.target.value;
        const dataTheme = colorOptions[i].getAttribute('data-theme');
        if( value === dataTheme ){
            colorOptions[i].hidden = false;
        } 
        if (value !== dataTheme){
            colorOptions[i].hidden = true;
        } 
    }
})

/*      "Register for Activities" section       */


const registerForActivities = document.getElementById('activities');
const displayTotal = document.getElementById('activities-cost');
let totalCost = 0;
let activities = 0;

registerForActivities.addEventListener('change', e => {
    const dataCost = +e.target.getAttribute('data-cost');
    const checkedBox = e.target;

    for (let i = 0; i < checkbox.length; i++){

        if (checkedBox.getAttribute('data-day-and-time') === checkbox[i].getAttribute('data-day-and-time')){
            if(checkedBox.checked){
                checkbox[i].disabled = true;
                checkbox[i].parentNode.classList.add('disabled');                
            } else if (!checkedBox.checked){
                checkbox[i].disabled = false;
                checkbox[i].parentNode.classList.remove('disabled');
            }
        }
        checkedBox.parentElement.classList.remove('disabled');
        checkedBox.disabled = false;
    }
    if (checkedBox.checked) {
        totalCost = totalCost + dataCost;
        activities = activities +1;
    } else {
        totalCost = totalCost - dataCost;
        activities = activities -1;
    }
    displayTotal.innerHTML = `Total: $${totalCost}`;
})



/*      "Payment Info" section      */

const paymentMethod = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
paymentMethod[1].selected = true;
paypal.hidden = true;
bitcoin.hidden = true;

paymentMethod.addEventListener('change', e => {
    if (e.target.value === 'paypal'){
        creditCard.hidden = true;
        paypal.hidden = false;
        bitcoin.hidden = true;
    } else if (e.target.value === 'bitcoin'){
        creditCard.hidden = true;
        paypal.hidden = true;
        bitcoin.hidden = false;
    } else {
        creditCard.hidden = false;
        paypal.hidden = true;
        bitcoin.hidden = true;

    }
})


/*      Form Validation     */

const userName = document.getElementById('name');
const email = document.getElementById('email');
const cardNumber = document.getElementById('cc-num')
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const form = document.querySelector('form');

const activitiesBox = document.getElementById('activities-box');

const emailHint = document.getElementById('email-hint');

/** Validator function 
*   @param {Element Object} input - represents the input element where we are appliying the validation.
*   @param {Boolean} test - results from testing the validation pattern.
*/


function errorValidator(input, test){
    const parent = input.parentElement;
    if(!test){
        parent.classList.add('not-valid');
        parent.classList.remove('valid');
        parent.lastElementChild.style.display = 'block';
    }
    if(test){
        parent.classList.add('valid');
        parent.classList.remove('not-valid');
        parent.lastElementChild.style.display = 'none';
    }
    return test;
}

/*  Field Validations */

const nameValitation = () => {
    const userNameValue = userName.value;
    const userNameTest = /^[a-zA-Z ]+$/.test(userNameValue);
    const test = errorValidator(userName, userNameTest); 
    return test;
}

const emailValidation = () => {
    const emailValue = email.value;
    const emailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.com$/i.test(emailValue);
    const test = errorValidator(email, emailTest);
    return test;
  }

const activitiesValidation = () => {
    const activitiesChecked = activities >= 1;
    const test = errorValidator(activitiesBox, activitiesChecked);
    return test;
}

const cardNumberValidation = () => {
    const cardNumberValue = cardNumber.value;
    const cardNumberTest = /^\d{13,16}$/.test(cardNumberValue);
    const test = errorValidator(cardNumber, cardNumberTest);
    return test;
} 

const zipValidation = () => {
    const zipValue = zipCode.value;
    const zipTest = /^\d{5}$/.test(zipValue);
    const test = errorValidator(zipCode, zipTest);
    return test;
}

const cvvValidator = () => {
    const cvvValue = cvv.value;
    cvvTest = /^\d{3}$/.test(cvvValue);
    const test = errorValidator(cvv, cvvTest);
    return test;
}

form.addEventListener('submit', e => {
    nameValitation();
    emailValidation();
    activitiesValidation();
    cardNumberValidation();
    zipValidation();
    cvvValidator();

    if ( nameValitation() && emailValidation() && activitiesValidation() ){

    } else {
        if(email.value === ''){
            emailHint.style.display = 'block';
            emailHint.innerHTML = 'Email field cannot be blank';
        }
        e.preventDefault();
    }
    if (paymentMethod.value === 'credit-card'){
        if (cardNumberValidation() && zipValidation() && cvvValidator() ){

        } else {
            e.preventDefault()
        }
    } 
})

/*      Real-time error message     */

userName.addEventListener('keyup', e => {
    if (userName.value){
        nameValitation();
    }
})

email.addEventListener('keyup', e => {
    if(email.value === ''){
        emailHint.style.display = 'block';
        emailHint.innerHTML = 'Email field cannot be blank';
    } else if (!emailValidation()){
        emailHint.innerHTML = 'Email address must be formatted correctly';
    }
    emailValidation();
})

cardNumber.addEventListener('keyup', e => {
    cardNumberValidation();
})

zipCode.addEventListener('keyup', e => {
    zipValidation();
})

cvv.addEventListener('keyup', e => {
    cvvValidator();
})


/*      Accessibility       */

const checkbox = document.querySelectorAll('input[type="checkbox"]');

for (let i = 0; i < checkbox.length; i++){

    checkbox[i].addEventListener('focus', e => {
        e.target.parentElement.classList.add('focus');
    })

    checkbox[i].addEventListener('blur', e => {
        e.target.parentElement.classList.remove('focus');
    })
}

