// Code your solutions in this file

// Function to write thank you messages for an array of names
function writeCards(names, event) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  const names = ["Charlie", "Samip", "Ali"];
  const event = "birthday";
  const messages = writeCards(names, event);
  
  console.log(messages);
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  const startNumber = 10;
  countDown(startNumber);