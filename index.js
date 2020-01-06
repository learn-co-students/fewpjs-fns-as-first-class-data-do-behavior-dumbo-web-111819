/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString){
  let timeNumber=Number(timeString.slice(0,-3))
  if (timeNumber<12 && timeNumber>=0){
    return "Good Morning"
  }
  else if (timeNumber>=12 && timeNumber< 17){
    return "Good Afternoon"
  }
  else if (timeNumber>=17 && timeNumber<24) {
    return "Good Evening"
  }
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function displayMessage(string1){
   document.querySelector("#greeting").innerText=string1
  // greeting.innerText = greet
}
