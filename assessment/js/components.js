//Import functionality from other modules
import {countTitleCharacters, countReviewCharacters, validateForm, getAllReviews, review} from './reviewscript.js';

//Define variables

//Attach event listeners to elements

document.getElementById('chatPostForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behaviour
    
    // Create headers for authentication
    const myHeaders = new Headers();
    myHeaders.append("student_number", "s4845110");
    myHeaders.append("uqcloud_zone_id", "592c492f");

    // Get the form element
    const form = document.getElementById('chatPostForm');

    // Create FormData from the form
    const formData = new FormData(form);

    // Prepare the fetch request options
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData, // Pass the serialized form data
        redirect: "follow"
    };

    // Send the POST request
    fetch("https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/genericchat/", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result); 
            getAllReviews();    
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

//Startup code that runs at or during page load

console.log(review);
window.onload = getAllReviews;

//Functions to define specific behaviours
countTitleCharacters();

countReviewCharacters();

validateForm();

//Functions for general use