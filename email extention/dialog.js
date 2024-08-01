let close = document.getElementsByClassName("close-button")[0];

function off() {
    var replyTextarea = document.getElementById("replyTextarea");
    const dialog = document.getElementById("dialog-overlay")
    replyTextarea.value = ""
    dialog.style.display = "none";
    isGenerateButtonClicked = false;
  }

  close.addEventListener("click", off);