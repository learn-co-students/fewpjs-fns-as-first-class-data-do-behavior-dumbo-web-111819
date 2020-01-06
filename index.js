/* Given Code, don't edit */


function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  const parsedTime = parseInt(time,10)
  if (parsedTime < 12) return "Good Morning"
  if (parsedTime > 17) return 'Good Evening'
  return 'Good Afternoon' 
}

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}
