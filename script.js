//let input=document.getElementById('int');
//let button =document.querySelectorAll('.calc button');
//
//// Add click event to each button
//  button.forEach(button => {
//    button.addEventListener("click", () => {
//      display.value += button.innerText;
//    });
//  });
//
//  // Handle clear button
//  document.getElementById("Ac").addEventListener("click", () => {
//    display.value = "";
//  });
//
//  // Handle equal (=) button
//  document.getElementById("equal").addEventListener("click", () => {
//    try {
//      display.value = eval(display.value); // Evaluate the expression
//    } catch {
//      display.value = "Error"; // Show error for invalid input
//    }
//});
// Get the input field
const input = document.getElementById('int');

// Get all buttons inside .calc (excluding the input)
const buttons = document.querySelectorAll('.calc button');

// Loop through each button and add event listeners
buttons.forEach(button => {
  const value = button.innerText;

  // AC button clears the display
  if (value === 'AC') {
    button.addEventListener('click', () => {
      input.value = '';
    });
  }

  // DEL button removes the last character
  else if (value === 'DEL') {
    button.addEventListener('click', () => {
      input.value = input.value.slice(0, -1);
    });
  }

  // Equal button evaluates the expression
  else if (value === '=') {
    button.addEventListener('click', () => {
      try {
        input.value = eval(input.value);
      } catch {
        input.value = 'Error';
      }
    });
  }

  // All other buttons append their value to the input
  else {
  button.addEventListener('click', () => {
    // If the button is "." (decimal point)
    if (value === '.') {
      // Split the current input by operators to isolate the last number
      const parts = input.value.split(/[\+\-\*\/%]/);
      const lastPart = parts[parts.length - 1];

      // If the last part already contains a dot, ignore the input
      if (lastPart.includes('.')) return;
    }

    // Append the button value to the input
    input.value += value;
  });
}

});

