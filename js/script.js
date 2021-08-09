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

registerForActivities.addEventListener('change', e => {
    const dataCost = +e.target.getAttribute('data-cost');
    if (e.target.checked) {
        totalCost = totalCost + dataCost;
    } else {
        totalCost = totalCost - dataCost;
    }
    displayTotal.innerHTML = `Total: $${totalCost}`;
})


/*      "Payment Info" section
 * 
 */

const paymentMethod = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');

// creditCard.hidden = true;
paypal.hidden = true;
bitcoin.hidden = true;

console.log(paymentMethod);

const paymentSelected = paymentMethod.children;
paymentSelected.selected;

console.log(paymentSelected);

paymentMethod.addEventListener('change', e => {
    if (paymentSelected === e.target){
        paymentSelected.hidden = false;
    }
    


    console.log(paymentSelected)
})

