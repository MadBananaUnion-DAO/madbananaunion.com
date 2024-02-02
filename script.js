document.addEventListener("DOMContentLoaded", function() {
    const action_execute = {};

    // Function to handle button click
    function function_action(buttonId) {
        // Increment the button click count
        action_execute[buttonId] = (action_execute[buttonId] || 0) + 1;

        // Update the display
        command_count(buttonId, action_execute[buttonId]);

        // Log the click
        logClick(buttonId);
    }

    // Function to log click to the console (you can replace this with your logging logic)
    function logClick(buttonId) {
        console.log(`Button Clicked: ${buttonId}`);
    }

    // Function to update resource count
    function command_count(buttonId, count) {
        // Update the display with the count (you can customize this part)
        const displayElement = document.getElementById(buttonId + "_count");
        if (displayElement) {
            displayElement.textContent = `${buttonId}: ${count * 1000}`;
        }

        // Update local storage
        localStorage.setItem(buttonId, count);
    }

    // Attach click event listeners to buttons
    document.getElementById("water").addEventListener("click", function() {
        function_action("water");
    });

    // Add similar event listeners for other buttons

    // Restore previous counts from local storage
    Object.keys(action_execute).forEach(buttonId => {
        const storedCount = localStorage.getItem(buttonId);
        if (storedCount !== null) {
            action_execute[buttonId] = parseInt(storedCount);
            command_count(buttonId, action_execute[buttonId]);
        }
    });
});
