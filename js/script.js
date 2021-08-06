/*      focusMethod()
 *      set the focus on the input 'name' on page load
 */


// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('name').focus();
//     otherJobRole.style.visibility="hidden";
// });

focusMethod = function getFocus() {
    document.getElementById("name").focus();
  }
focusMethod();


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