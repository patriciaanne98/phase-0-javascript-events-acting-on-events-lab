const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}
function moveDodgerRight() {
    const newPosition = dodger.style.left.replace("px", "");
    const left = parseInt(newPosition, 10);
  
    if (left > 0 ) {
      dodger.style.left = `${left + 1}40px`;
    }
  }