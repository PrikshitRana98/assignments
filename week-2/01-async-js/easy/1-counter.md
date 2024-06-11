<!-- ## Create a counter in JavaScript -->

<!-- We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second -->

// Initialize counter
let counter = 0;

// Function to update and display the counter
function updateCounter() {
  counter++; // Increment counter
  console.log("Counter:", counter); // Display counter value
}

// Set interval to call updateCounter function every second (1000 milliseconds)
setInterval(updateCounter, 1000);


