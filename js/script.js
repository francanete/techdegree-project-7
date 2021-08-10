/*      focusMethod()
 *      set the focus on the input 'name' on page load
 */


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('name').focus();
});

// focusMethod = function getFocus() {
//     document.getElementById("name").focus();
//   }
// focusMethod();


/*      "Job Role" section:
 * 
 */

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

/*      "T-Shirt Info" section
 * 
 */


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

/*      "Register for Activities" section
 * 
 */

const registerForActivities = document.getElementById('activities');
const displayTotal = document.getElementById('activities-cost');
let totalCost = 0;
let activities = 0;

registerForActivities.addEventListener('change', e => {
    const dataCost = +e.target.getAttribute('data-cost');

    if (e.target.checked) {
        
        totalCost = totalCost + dataCost;
        activities = activities +1;
    } else {
        totalCost = totalCost - dataCost;
        activities = activities -1;
    }
    displayTotal.innerHTML = `Total: $${totalCost}`;
    console.log(activities);
})



/*      "Payment Info" section
 * 
 */

const paymentMethod = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');

paypal.hidden = true;
bitcoin.hidden = true;


// const paymentSelected = paymentMethod.children[1].setAttribute('selected', '');


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


/*      Form Validation
 * 
 */

const userName = document.getElementById('name');
const email = document.getElementById('email');
const cardNumber = document.getElementById('cc-num')
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const form = document.querySelector('form');

/*  Validation functions */

const nameValitation = () => {
    const userNameValue = userName.value;
    return /^[a-zA-Z ]+$/.test(userNameValue);
}

const emailValidation = () => {
    const emailValue = email.value;
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.com$/i.test(emailValue);
  }

const activitiesValidation = () => {
    const activitiesChecked = activities >= 1;
    return activitiesChecked; 
}

const cardNumberValidation = () => {
    const cardNumberValue = cardNumber.value;
    return /^\d{13,16}$/.test(cardNumberValue);
} 

const zipValidation = () => {
    const zipValue = zipCode.value;
    return /^\d{5}$/.test(zipValue);
}

const cvvValidator = () => {
    const cvvValue = cvv.value;
    return /^\d{3}$/.test(cvvValue);
}


form.addEventListener('submit', e => {
    if ( nameValitation() && emailValidation() && activitiesValidation() ){

    } else if (paymentMethod.value === 'credit-card'){
        if (cardNumberValidation() && zipValidation() && cvvValidator() ){
        } else {
            e.preventDefault()
        }
    } else {
        e.preventDefault();
    }
})

