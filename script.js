const words = ["Typing Services", "Fast Delivery", "100% Accuracy", "NeoType"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typingElement = document.getElementById("typing");

function type() {
  currentWord = words[i];
  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, j--);
  } else {
    typingElement.textContent = currentWord.substring(0, j++);
  }

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1200); // Pause before deleting
    return;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 60 : 120);
}

type();
