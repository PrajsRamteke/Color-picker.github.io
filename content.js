function changeColor() {
  var color = document.getElementById("color-picker").value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
  document.getElementById("hex-code").innerText = color;
}
