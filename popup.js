document.addEventListener("mouseover", function(e) {
    let hexCode = window.getComputedStyle(e.target, null).getPropertyValue("background-color");
    document.getElementById("hex-code").innerHTML = hexCode;
  });
  
  document.addEventListener("click", function(e) {
    let hexCode = window.getComputedStyle(e.target, null).getPropertyValue("background-color");
    let tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = hexCode;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Hex code copied to clipboard: " + hexCode);
  });
  