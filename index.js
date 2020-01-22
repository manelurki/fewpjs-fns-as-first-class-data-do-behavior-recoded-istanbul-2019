/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time) {
  
  const h = parseInt(time);
  if ( h < 12) return "Good Morning"
  if ( h > 17) return "Good Evening"
 else { return "Good Afternoon"}
}
displayMessage(msg){
  document.getElementById("greeting").innerText =msg;
}