## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


let counter = 0;

function updateCounter() {
  // Increment counter
  counter++;

  // Display counter value
  console.log("Counter:", counter);

  // Call updateCounter again after a delay of 1 second (1000 milliseconds)
  setTimeout(updateCounter, 1000);
}

// Start the counter
updateCounter();






































































(Hint: setTimeout)