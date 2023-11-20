// Event listener for the Dark/Light mode toggle switch
document.getElementById("toggleSwitch").addEventListener("change", function () {
  const body = document.body;
  const title = document.getElementById("title");
  const subtitle1 = document.getElementById("subtitle1");
  const subtitle2 = document.getElementById("subtitle2");
  const subtitle3 = document.getElementById("subtitle3");
  const subtitle4 = document.getElementById("subtitle4");
  const subtitle5 = document.getElementById("subtitle5");

<<<<<<< HEAD
  var myHeading = document.getElementById('myHeading')

=======
>>>>>>> e307a97c903f79bd9fe0a52d04dcfc9130bddefc
  const isDarkMode = this.checked;

  // Adjust styles based on the selected mode
  if (isDarkMode) {
    body.style.backgroundColor = "#333";
    body.style.color = "#fff";
    title.style.color = "#fff";
<<<<<<< HEAD
    myHeading.style.color = "#fff";
=======
>>>>>>> e307a97c903f79bd9fe0a52d04dcfc9130bddefc
    subtitle1.style.color = "#fff";
    subtitle2.style.color = "#fff";
    subtitle3.style.color = "#fff";
    subtitle4.style.color = "#fff";
    subtitle5.style.color = "#fff";
  } else {
    body.style.backgroundColor = "";
    body.style.color = "";
    title.style.color = "black";
<<<<<<< HEAD
    myHeading.style.color = "black";
=======
>>>>>>> e307a97c903f79bd9fe0a52d04dcfc9130bddefc
    subtitle1.style.color = "black";
    subtitle2.style.color = "black";
    subtitle3.style.color = "black";
    subtitle4.style.color = "black";
    subtitle5.style.color = "black";
  }

  // Send a message to the content script indicating the mode change
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "toggleMode", isDarkMode });
  });
});

// Event listener for the "Default Font" button
document.getElementById("defaultFont").addEventListener("click", function () {
  // Query the active tab in the current window
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // Send a message to the content script with the action "defaultFont"
    chrome.tabs.sendMessage(tabs[0].id, { action: "defaultFont" });
  });
});

// Event listener for the "Change Font - OpenDyslexic" button
document.getElementById("changeFontOpenDyslexic").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "changeFont", font: "OpenDyslexic" });
  });
});

// Event listener for the "Change Font - Helvetica" button
document.getElementById("changeFontHelvetica").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "changeFont", font: "Helvetica" });
  });
});

// Event listener for the "Change Font - Lexend" button
document.getElementById("changeFontLexend").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "changeFont", font: "Lexend" });
  });
});

// Event listener for the "Change Font - Roboto" button
document.getElementById("changeFontRoboto").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "changeFont", font: "Roboto, sans-serif" });
  });
});

// Event listener for the "Change Font - Verdana" button
document.getElementById("changeFontVerdana").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "changeFont", font: "Verdana, sans-serif" });
  });
});

document.getElementById("defaultFontSize").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "defaultFontSize" });
  });
});

// Event listeners for font size buttons (12, 13, 14, 15)
for (let size = 12; size <= 15; size++) {
  document.getElementById("changeFontSize" + size).addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "changeFontSize", size });
    });
  });
}

// Add event listeners for buttons that increase word spacing (1-5x)
for (let i = 1; i <= 5; i++) {
  document.getElementById("increaseWordSpacing" + i).addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "increaseWordSpacing", value: i });
    });
  });
}


// Event listeners for buttons that increase letter spacing (1-5x)
for (let i = 1; i <= 5; i++) {
  document.getElementById("increaseSpacing" + i).addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // Send a message to the content script with the action "increaseSpacing" and the value
      chrome.tabs.sendMessage(tabs[0].id, { action: "increaseSpacing", value: i });
    });
  });
}

// Event listeners for buttons that adjust line height (1-5x)
for (let i = 1; i <= 5; i++) {
  document.getElementById("adjustLineHeight" + i).addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "adjustLineHeight", value: i });
    });
  });
}