// Function to change text in the paragraph
function changeText() {
    const message = document.getElementById("message");
    message.textContent = "You clicked the button!";
    message.style.color = "blue";
    message.style.fontWeight = "bold";
  }
  
  // Function to toggle the box on/off
  function toggleBox() {
    const container = document.getElementById("box-container");
    const existingBox = document.getElementById("box");
  
    if (existingBox) {
      container.removeChild(existingBox);
    } else {
      const box = document.createElement("div");
      box.id = "box";
      container.appendChild(box);
    }
  }
  
  // Function to change the background color
  function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
  }
  
  // Function to update the message based on user input
  function updateMessage() {
    const input = document.getElementById("user-input").value;
    if (input.trim() === "") {
      alert("Please enter some text!");
    } else {
      document.getElementById("message").textContent = input;
    }
  }
  
  