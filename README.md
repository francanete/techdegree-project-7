<h1 align="center">✏️ Interactive registration form</h1>

<h2>Description</h2>
<p>This interactive registration form, takes the necessary data from the user and apply input validations before submitting the form.</p> 

<h3>Key features</h3>
<p><strong>Real-time error message:</strong> this function provides real-time input validation and shows to the user a useful error message.</p>

<p><strong>Conditional error message:</strong> this functionality checks what type of error has been detected, then shows to the user a real-time error message for that specific error.</p>

```
email.addEventListener('keyup', e => {
    if(email.value === ''){
        emailHint.style.display = 'block';
        emailHint.innerHTML = 'Email field cannot be blank';
    } else if (!emailValidation()){
        emailHint.innerHTML = 'Email address must be formatted correctly';
    }
    emailValidation();
})
```


<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://twitter.com/francanetecom" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="francanetecom" height="30" width="40" /></a>
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>
