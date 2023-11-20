// content.js

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // Check the action specified in the message
  if (request.action === "defaultFont") {
    // If the action is to set the default font, call the changeFontFamily function with an empty font value
    changeFontFamily("");
  } else if (request.action === "changeFont") {
    // If the action is to change the font, call the changeFontFamily function with the specified font
    changeFontFamily(request.font);
  } else if (request.action === "increaseSpacing") {
    // If the action is to increase letter spacing, call the increaseLetterSpacing function with the specified value
    increaseLetterSpacing(request.value);
  } else if (request.action === "defaultFontSize") {
    resetFontSize(); // Reset font size to the original size
  } else if (request.action === "changeFontSize") {
    changeFontSize(request.size); // Change font size to the specified value
  // Add a new condition for word spacing in the message listener
  } else if (request.action === "increaseWordSpacing") {
    increaseWordSpacing(request.value);
  // Add a new condition for line height in the message listener
  } else if (request.action === "adjustLineHeight") {
    adjustLineHeight(request.value);
  }
});

// Function to change the font family of selected text elements
function changeFontFamily(font) {
  // Select specific text elements (paragraphs, headings, spans, divs with class myTextClass)
  document.querySelectorAll('p, h1, h2, h3, span, div.myTextClass').forEach(element => {
    // Set the font family to the specified value
    element.style.fontFamily = font;
  });
}

// Function to change the font family of selected text elements
function changeFontFamily(font) {
  let fontUrl;

  // Check if the specified font is OpenDyslexic, Helvetica, or Lexend
  if (font === "OpenDyslexic") {
    fontUrl = chrome.runtime.getURL("fonts/OpenDyslexicAlta-Regular.otf");
  } else if (font === "Helvetica") {
    fontUrl = chrome.runtime.getURL("fonts/Helvetica.otf");
  } else if (font === "Lexend") {
    fontUrl = chrome.runtime.getURL("fonts/Lexend-Regular.ttf");
  }

  // Load the font from the extension resources
  if (fontUrl) {
    const style = document.createElement("style");
    style.textContent = `
      @font-face {
        font-family: '${font}';
        src: url('${fontUrl}') format('opentype');
      }
    `;
    document.head.appendChild(style);
  }

  // Select specific text elements (paragraphs, headings, spans, divs with class myTextClass)
  document.querySelectorAll('p, h1, h2, h3, span, div.myTextClass').forEach(element => {
    // Use the specified font if specified, otherwise use the default font
    element.style.fontFamily = font ? font : `'Helvetica', sans-serif`;
  });
}

// Store original font size for each element
const originalFontSizes = new Map();

function storeOriginalFontSize() {
  document.querySelectorAll('p, h1, h2, h3, span, div.myTextClass').forEach(element => {
    // Store the original font size of each element
    originalFontSizes.set(element, window.getComputedStyle(element).fontSize);
  });
}

// Call the function when the extension is first loaded
storeOriginalFontSize();

// Function to reset font size to the original size
function resetFontSize() {
  originalFontSizes.forEach((originalSize, element) => {
    element.style.fontSize = originalSize;
  });
}

// Function to change the font size of selected text elements
function changeFontSize(size) {
  document.querySelectorAll('p, h1, h2, h3, span, div.myTextClass').forEach(element => {
    element.style.fontSize = size + "px";
  });
}

// Function to increase word spacing of selected text elements
function increaseWordSpacing(value) {
  // Select specific text elements (paragraphs, headings, spans, divs with class myTextClass)
  document.querySelectorAll('p, h1, h2, h3, span, div.myTextClass').forEach(element => {
    // Set the word spacing to a more drastic value
    element.style.wordSpacing = (value * 3.5) + "px";
  });
}

// Function to increase letter spacing of selected text elements
function increaseLetterSpacing(value) {
  // Select specific text elements (paragraphs, headings, spans, divs with class myTextClass)
  document.querySelectorAll('p, h1, h2, h3, span, div.myTextClass').forEach(element => {
    // Set the letter spacing to the specified value
    element.style.letterSpacing = (value * 1.5) + "px";
  });
}

// Function to adjust line height of selected text elements
function adjustLineHeight(value) {
  // Select specific text elements (paragraphs, headings, spans, divs with class myTextClass)
  document.querySelectorAll('p, h1, h2, h3, span, div.myTextClass').forEach(element => {
      // Set the line height to the specified value
      element.style.lineHeight = value;
  });
}