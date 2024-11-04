//Import functionality from other modules

//Define variables

//Attach event listeners to elements






//Startup code that runs at or during page load


//Functions to define specific behaviours


export function initializeButtonAlerts() {
    // Function to show an alert message
    document.addEventListener("DOMContentLoaded", () => {
      // Function to show an alert message
      function showAlert(event) {
          const buttonText = event.target.textContent.trim(); // Get the button text
          alert(`${buttonText} button clicked!`);
      }
  
      // Select the specific buttons by ID or a more direct class if possible
      const discoverButton = document.querySelector('.button-wrapper a[href="discover.html"] button');
      const tripsButton = document.querySelector('.button-wrapper a[href="plan_trip.html"] button');
      const reviewButton = document.querySelector('.button-wrapper a[href="reviews.html"] button');
      const destinationsButton = document.querySelector('.button-wrapper a[href="destinations.html"] button');
  
      // Add event listeners
      if (discoverButton) discoverButton.addEventListener('click', showAlert);
      if (tripsButton) tripsButton.addEventListener('click', showAlert);
      if (reviewButton) reviewButton.addEventListener('click', showAlert);
      if (destinationsButton) destinationsButton.addEventListener('click', showAlert);
  });
  }

  export function initializeButtonAlerts_sub() {
    document.addEventListener("DOMContentLoaded", () => {
        function showAlert(event) {
            const buttonText = event.target.closest('.button_sub').textContent.trim();
            alert(`${buttonText} button clicked!`);
        }

        const discoverButton = document.querySelector('.button-wrapper_sub a[href="discover.html"] .button_sub');
        const tripsButton = document.querySelector('.button-wrapper_sub a[href="plan_trip.html"] .button_sub');
        const reviewButton = document.querySelector('.button-wrapper_sub a[href="reviews.html"] .button_sub');
        const destinationsButton = document.querySelector('.button-wrapper_sub a[href="destinations.html"] .button_sub');
        const homeButton = document.querySelector('.button-wrapper_sub a[href="index.html"] .button_sub');

        if (discoverButton) discoverButton.addEventListener('click', showAlert);
        if (tripsButton) tripsButton.addEventListener('click', showAlert);
        if (reviewButton) reviewButton.addEventListener('click', showAlert);
        if (destinationsButton) destinationsButton.addEventListener('click', showAlert);
        if (homeButton) homeButton.addEventListener('click', showAlert);
    });
  }


//Functions for general use


  