/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(str) {
  let hours = parseInt(str, 10);
  // if (Number.isInteger(hours) && hours <= 24 && hours >= 0) {

    if (hours < 12) {
      return "Good Morning";
    } else if (hours >= 12 && hours < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }

  // } else if (str === undefined) {
  //   return "Please enter a time.";
  // } else {
  //   return "That is not a valid time.";
  // }

  // if (hours < 12) return "Good Morning";
  // if (hours > 17) return "Good Evening";
  // return "Good Afternoon"
}

/* Write your implementation of displayMessage() */

function displayMessage(str) {
  let greeting = document.getElementById('greeting');
  greeting.innerText = str;
}
