const greetings = ["hello", "សួស្តី", "bonjour", "こんにちは"];
const greetingElement = document.getElementById("greeting");
let currentGreetingIndex = 0;

function typeGreeting(greeting, callback) {
    let i = 0;
    const typingSpeed = 100; // Speed in milliseconds

    function typeChar() {
        if (i < greeting.length) {
            greetingElement.innerText += greeting[i];
            i++;
            setTimeout(typeChar, typingSpeed);
        } else if (callback) {
            setTimeout(callback, 1000); // Pause before clearing text
        }
    }
    typeChar();
}

function fadeOut() {
    const loadingScreen = document.querySelector('.loading-screen');
    loadingScreen.classList.add('fade-out'); // Apply the fade-out class
}

function startTyping() {
    typeGreeting(greetings[currentGreetingIndex], () => {
        greetingElement.innerText = ""; // Clear text
        currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length; // Loop the greetings
        startTyping(); // Type the next greeting
    });
}

// Start the typing animation 
window.onload = () => {
    startTyping();

    // Trigger the fade-out after the last greeting has been typed out completely
    const totalTypingTime = greetings[greetings.length - 1].length * 100; // Calculate total typing time
    const fadeOutDelay = totalTypingTime + 1000; // Add 1 second pause after typing for each greeting

    setTimeout(() => {
        fadeOut(); // Fade out the loading screen
    }, fadeOutDelay); // Adjust delay to match the typing animation length
};
