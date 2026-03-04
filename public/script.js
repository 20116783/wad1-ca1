$(document).ready(function() {
    console.log("Console Archive Ready!");

    if(window.location.pathname === '/') {
        $('.ui.header').transition('pulse');

        setTimeout(() => {
            alert("Welcome to the Console Archive! Click 'View Collection' to start.");
        }, 500);
    }
});