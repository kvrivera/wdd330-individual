const h1 = document.getElementById("countdown");
const button = document.getElementById("startButton");

// Create a variable to store the starting time (e.g., 10 seconds).
let startTime = 10;

//Add an event listener to the button that starts the countdown when clicked.
button.addEventListener('click', () => {
    // Use setInterval() to decrement the countdown every second.
    h1.textContent = "Here comes the countdown...";
    let timerId = setInterval(function updateH1() {
        // Update the <h1> tag with the remaining time.
        h1.innerText = startTime--;
        return startTime;
    }, 1000);

    // Use setTimeout() to stop the countdown when it reaches 0.
    setTimeout(() => { clearInterval(timerId); function displayEndMsg() {
        h1.textContent = "All done!";
    } displayEndMsg(); }, 11000);

    setTimeout()

    // Display a message like "Time's up!" when the countdown ends.
})
