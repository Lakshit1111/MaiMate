// Function to toggle the sliding animation
// document.addEventListener('DOMContentLoaded', function() {
//     var sendButton = document.getElementById('sendButton');
//     sendButton.addEventListener('click', sendMessage);
// });

document.addEventListener('DOMContentLoaded', async function() {
    var container = document.getElementById('slideIn');
    container.classList.toggle('slide-in');
  })
function toggleSlide() {
    var container = document.getElementById('slideIn');
    container.classList.toggle('slide-in');
    container.classList.toggle('slide-out');
  }
  
function toggleSlideout() {
    var container = document.getElementById('slideIn');
    container.classList.toggle('slide-out');
  }
  // Function to send a message
  function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var messageText = messageInput.value;
    
    if (messageText.trim() === '') {
      alert('Please enter a message.');
      return;
    }
  
    var chat = document.getElementById('chat');
    if (!chat) {
      console.error('Chat container not found.');
      return;
    }
  
    var message = document.createElement('div');
    message.className = 'message sender';
    message.textContent = messageText;
    chat.appendChild(message);
    
    // Clear input field after sending message
    messageInput.value = '';
  }
  

//   toggleSlide();
  
  // Attach event listener to the send button
  document.getElementById('sendButton').addEventListener('click', sendMessage);
  