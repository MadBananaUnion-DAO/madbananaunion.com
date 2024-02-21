function recordButtonClick(buttonId) {
    // Send an AJAX request to the server to record the button click
    fetch('/record_button_click', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ buttonId }),
    });
}
