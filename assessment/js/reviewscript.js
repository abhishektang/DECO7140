alert("Javascript works");
console.log("This is reviewpage");

function countTitleCharacters() {
    console.log("Inside the Title Character funcion");
    const titleTextarea = document.getElementById('reviewTitle');
    const titleCount = document.getElementById('titleCount');
    const charCount = titleTextarea.value.length;
    titleCount.textContent = `${charCount}/120 characters`;

    // Alert if max character limit is exceeded
    if (charCount > 120) {
        alert("You have exceeded the maximum character limit for the title (120 characters).");
    }
}

// Character count for review
function countReviewCharacters() {
    console.log("Inside the Review Character funcion");
    const reviewTextarea = document.getElementById('reviewText');
    const reviewCount = document.getElementById('reviewCount');
    const charCount = reviewTextarea.value.length;
    reviewCount.textContent = `${charCount}/100 characters (min)`;
}

// Form validation
function validateForm() {
    console.log("Validate form");
    const reviewTextarea = document.getElementById('reviewText');
    const reviewTitleTextarea = document.getElementById('reviewTitle');
    
    const reviewText = reviewTextarea.value.trim();
    const reviewTitleText = reviewTitleTextarea.value.trim();
    
    const reviewCharCount = reviewText.length;
    const titleCharCount = reviewTitleText.length;

    // Check if the review text area is empty
    if (reviewCharCount === 0) {
        alert("Please write your review before submitting.");
        return false; // Prevent form submission
    }

    // Check if the title text area is empty
    if (titleCharCount === 0) {
        alert("Please provide a title for your review.");
        return false; // Prevent form submission
    }

    // Validate review length (at least 100 characters)
    if (reviewCharCount < 100) {
        alert("Your review must be at least 100 characters long.");
        return false; // Prevent form submission
    }

    // Validate title length (no more than 120 characters)
    if (titleCharCount > 120) {
        alert("The title of your review cannot exceed 120 characters.");
        return false; // Prevent form submission
    }

    // All validations passed, form can be submitted
    return true;

}

// Tag selection logic
function setTagValue(value) {
    document.getElementById('whoWith').value = value;
    let tags = document.querySelectorAll('.tag');
    tags.forEach(tag => tag.classList.remove('active'));
    event.target.classList.add('active');
}

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
        })
        .catch(error => {
            console.error('Error:', error);
        });
});