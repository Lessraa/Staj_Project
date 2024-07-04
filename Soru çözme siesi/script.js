document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("actionButton");
    const displayText = document.getElementById("displayText");

    button.addEventListener("click", function() {
        displayText.textContent = "Button clicked!";
    });
});

