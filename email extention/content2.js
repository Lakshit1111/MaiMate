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

    const newGmail = async() => {
        const isExist = document.getElementsByClassName("LButtonk")[0];
        console.log(isExist);
        if (!isExist) {
            const emailContent = document.getElementsByClassName("a3s aiL ")[0];
            const check = document.getElementsByClassName("emailContainer")[0];
            if (emailContent && !check) {
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
                generateButton.style.display = "none";
                generateButton.id = "generate"
                generateButton.addEventListener("click", function() {
                    openDialog("Generate");
                });
                buttonContainer.appendChild(generateButton);

                // Create Yes button
                const yesButton = createButton("Yes");
                yesButton.addEventListener("click", function() {
                    openDialog("Yes");
                });
                buttonContainer.appendChild(yesButton);

                // Create No button
                const noButton = createButton("No");
                noButton.addEventListener("click", function() {
                    openDialog("No");
                });
                buttonContainer.appendChild(noButton);

                // Create Follow up button
                const followUpButton = createButton("Follow up");
                followUpButton.addEventListener("click", function() {
                    openDialog("Follow Up");
                });
                buttonContainer.appendChild(followUpButton);

                // Append icon, type box, and button container to main container
                container.appendChild(icon);
                container.appendChild(typeBox);
                container.appendChild(buttonContainer);

                // Append main container to email content
                emailContent.appendChild(container);

                // Add animation class to the container
                container.classList.add("fadeInDown");

                ///// Dialog Box

                const htmlResponse =  await fetch(chrome.runtime.getURL('dialog.html'));
                const html = await htmlResponse.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const dialogContainer = doc.getElementById('dialog-overlay');
                document.body.appendChild(dialogContainer);

                const script = document.createElement('script');
                script.src = chrome.runtime.getURL('dialog.js');
                document.head.appendChild(script);



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
        buttonContainer.childNodes.forEach(node => {
            if (node.nodeName === "BUTTON" && node.innerText !== "Generate") {
                node.style.display = "none";
            }
        });
        buttonContainer.querySelector("button").style.display = "flex";
    }

    const handleInputBlur = () => {
        buttonContainer.childNodes.forEach(node => {
            if (node.nodeName === "BUTTON" && node.innerText !== "Generate") {
                node.style.display = "flex";
            }
        });
        typeBox.style.border.width = "2px";
        buttonContainer.querySelector("button").style.display = "none";
        typeBox.classList.remove("expanded");
    }

    const openDialog = (text) => {
        const dialog = document.getElementById("dialog-overlay")
        dialog.style.display = "flex";

        var replyTextarea = document.getElementById("replyTextarea");
        // Define the text to be typed
        if(text === "Yes"){
            var textToType = "Yes";
        }else if(text === "No"){
            var textToType = "No";
        }else if(text === "Follow Up"){
            var textToType = "Follow Up";
        }else if(text === "Generate"){
            const input = document.getElementsByClassName("emailTypeInput")[0];
            var textToType = input.value;
        }
        // Define the typing speed (in milliseconds)
        var typingSpeed = 50; // Adjust as needed

        // Function to simulate typing
        function typeText() {
        var index = 0;
        var typingInterval = setInterval(function() {
            // Append the next character to the textarea
            replyTextarea.value += textToType[index];
            index++;
            // Check if all characters have been typed
            if (index >= textToType.length) {
                clearInterval(typingInterval);
            }
        }, typingSpeed);
    }

    // Call the function to start typing when the DOM content is loaded
    typeText();
    }
    

})();
