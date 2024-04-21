(() => {
  let container;
  let typeBox;
  let buttonContainer;
  let emailInputs;

  chrome.runtime.onMessage.addListener((obj, sender, sendResponse) => {
      const { value } = obj;
      console.log(value);
      if (value === "New") {
          newGmail();
      }
  });

  const newGmail = () => {
      const isExist = document.getElementsByClassName("LButtonk")[0];
      console.log(isExist);
      if (!isExist) {
          const emailContent = document.getElementsByClassName("a3s aiL ")[0];
          if (emailContent) {
              // Create container for type box and buttons
              container = document.createElement('div');
              container.className = "emailContainer";
              container.style.display = "fixed"; // Fixed typo here

              // Create image icon
              const icon = document.createElement('img');
              icon.src = chrome.runtime.getURL("favicon-32x32.png"); // Replace "icon.jpg" with the path to your local image within your extension
              console.log(icon.src);
              icon.className = "emailIcon"; // Add a class for styling if needed

              // Create type box
              typeBox = document.createElement('input');
              typeBox.type = "text";
              typeBox.placeholder = "Enter Email Type";
              typeBox.className = "emailTypeInput";

              // Create button container
              buttonContainer = document.createElement('div');
              buttonContainer.className = "buttonContainer";
              buttonContainer.style.display = "fixed"; // Fixed typo here

              // Create Generate button
              const generateButton = createButton("Generate");
              generateButton.style.display = "none"; // Hide the generate button initially
              generateButton.id = "generate"
              buttonContainer.appendChild(generateButton);

              // Create Yes button
              const yesButton = createButton("Yes");
              buttonContainer.appendChild(yesButton);

              // Create No button
              const noButton = createButton("No");
              buttonContainer.appendChild(noButton);

              // Create Follow up button
              const followUpButton = createButton("Follow up");
              buttonContainer.appendChild(followUpButton);

              // Append icon, type box, and button container to main container
              container.appendChild(icon);
              container.appendChild(typeBox);
              container.appendChild(buttonContainer);

              // Append main container to email content
              emailContent.appendChild(container);

              // Add animation class to the container
              container.classList.add("fadeInDown");

              // Add event listeners to the typeBox input
              typeBox.addEventListener("focus", handleInputFocus);
              typeBox.addEventListener("blur", handleInputBlur);
          }
      }
  }

  const createButton = (text) => {
      const button = document.createElement('button');
      button.innerText = text;
      button.className = "emailButton";
      return button;
  }

  const handleInputFocus = () => {
      // Increase the width of the input box
      
      typeBox.classList.add("expanded");
      // typeBox.style.width = "200px"; // Adjust width as needed
      typeBox.style.border.width= "15px";
      // Hide the button container
      buttonContainer.childNodes.forEach(node => {
        if (node.nodeName === "BUTTON" && node.innerText !== "Generate") {
            node.style.display = "none";
        }
      });
      buttonContainer.querySelector("button").style.display = "flex";
  }

  const handleInputBlur = () => {
      // Restore the width of the input box
    //   typeBox.width= "100px";
      buttonContainer.childNodes.forEach(node => {
        if (node.nodeName === "BUTTON" && node.innerText !== "Generate") {
            node.style.display = "flex";
        }
      });
      // buttonContainer.style.display = "block";
      typeBox.style.border.width = "2px";
      buttonContainer.querySelector("button").style.display = "none";
      typeBox.classList.remove("expanded");
  }

})();
