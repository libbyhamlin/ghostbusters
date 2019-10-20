// We need a function to grab our user's initial info and set their "state" to begin the challenge
import makeUser from './make-user.js';
// we need to save userInfo to localStorage
import { saveUser } from '../data/api.js';


// go grab the form from the home page
const userSignUp = document.getElementById('user-sign-up');

// The goal of a class object is to have a function and data "slots" available for reuse - "object instance"
// when we submit
userSignUp.addEventListener('submit', function(event) {
    // maske it so it doesnt weirdly redirect
    event.preventDefault();

    // make a new form data object that will create objects/arrays of key+value pairs
    const formData = new FormData(userSignUp);
    // use the form data object to make a user
    const user = makeUser(formData);

    // pop that user in local storage
    saveUser(user);

    // redirect us to the map page
    window.location = 'map';
});