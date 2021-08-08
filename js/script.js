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

