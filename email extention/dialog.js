let close = document.getElementsByClassName("close-button")[0];

function off() {
    var replyTextarea = document.getElementById("replyTextarea");
    const dialog = document.getElementById("dialog-overlay")
    dialog.style.display = "none";
    replyTextarea.value = ""
  }

  close.addEventListener("click", off);