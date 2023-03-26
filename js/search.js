// The text to animate
const initialText = " hello w!@#$";
const promptText = " search something...";
const typingInterval = 100;
const deleteInterval = 50;
// Get the input element and clear the placeholder text
const input = document.querySelector('input[type="text"]');
input.placeholder = "";
// Start the typing animation
let i = 0;
const typeNextCharacter = () => {
let currentText = input.placeholder;
currentText += initialText[i];
input.placeholder = currentText;
i++;
if (i < initialText.length) {
setTimeout(typeNextCharacter, typingInterval);
} else {
setTimeout(deleteText, typingInterval * 3);
}
};
// Delete the initial text
const deleteText = () => {
let currentText = input.placeholder;
currentText = currentText.slice(0, -1);
input.placeholder = currentText;
if (currentText.length > 0) {
setTimeout(deleteText, deleteInterval);
} else {
input.placeholder = "";
i = 0;
setTimeout(typePrompt, typingInterval * 3);
}
};
// Type the prompt text
const typePrompt = () => {
let currentText = input.placeholder;
currentText += promptText[i];
input.placeholder = currentText;
i++;
if (i < promptText.length) {
setTimeout(typePrompt, typingInterval);
}
};
setTimeout(typeNextCharacter, typingInterval);
