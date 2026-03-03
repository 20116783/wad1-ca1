/* This script runs on page load */
$(document).ready(function() {
    console.log("Console Archive Ready!");

    // If we are on the welcome page, show a welcome toast/popup
    if(window.location.pathname === '/') {
        $('.ui.header').transition('pulse');

        // Simple JS Output requirement
        setTimeout(() => {
            alert("Welcome to the Console Archive! Click 'View Collection' to start.");
        }, 500);
    }
});