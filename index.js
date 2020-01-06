/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/



let greet = (time) => {
    
    
    if(parseInt(time) < 12){
      return 'Good Morning'
    } else if (parseInt(time) >= 12 && parseInt(time) < 17 ){
      return 'Good Afternoon'
    }else if (parseInt(time) >= 17){
      return 'Good Evening'

    }else{
      return 'TEST'
    }
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

let displayMessage = (string) => {
    let greet = document.querySelector('#greeting')
    greet.innerText = `${string}`
}