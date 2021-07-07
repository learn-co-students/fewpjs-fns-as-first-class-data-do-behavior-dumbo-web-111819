/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


function greet(time){
  let hour = parseInt(time , 10)
  if (hour < 12  ) {
    return  "Good Morning";
  }else if (hour > 12 && hour < 17){
    return  "Good Afternoon"
  }else if (hour > 17){
      return  "Good Evening"
      
    }
  }
  let content = document.getElementById("greeting")
  function displayMessage(greeting){
    content.innerText = greeting
    
  }


/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
