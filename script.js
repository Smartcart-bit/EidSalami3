// Get query params
const urlParams = new URLSearchParams(window.location.search);
const sender = urlParams.get("sender") || "Anonymous";
const receiver = urlParams.get("receiver") || "Friend";
const amount = urlParams.get("amount") || "0";

document.getElementById("sender").innerText = sender;
document.getElementById("receiver").innerText = receiver;
document.getElementById("amountValue").innerText = amount;

// Random quote
const quotes = [
  "Eid is a day to cheer and to laugh with all your heart!",
  "Give generously, smile widely, and celebrate fully!",
  "A kind heart always gives the best salami!",
  "Joy shared is joy doubled — Happy Eid!",
  "Even fake salami brings real smiles!",
  "Let your kindness shine brighter than your Eidi!"
];
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("quote").innerText = randomQuote;

// Reveal amount + show share buttons
function revealAmount() {
  document.getElementById("amountDetails").style.display = "block";
  document.querySelector("#amount-section button").style.display = "none";
}

// Toggle send form
function toggleSend() {
  const section = document.getElementById("sendSection");
  section.style.display = section.style.display === "none" ? "block" : "none";
}

// Generate new link
function generateLink() {
  const newSender = document.getElementById("newSender").value.trim();
  const newReceiver = document.getElementById("newReceiver").value.trim();
  const newAmount = document.getElementById("newAmount").value.trim();

  if (newSender && newReceiver && newAmount) {
    const base = window.location.origin + window.location.pathname;
    const link = `${base}?sender=${encodeURIComponent(newSender)}&receiver=${encodeURIComponent(newReceiver)}&amount=${encodeURIComponent(newAmount)}`;
    document.getElementById("generatedLink").innerText = link;
  } else {
    document.getElementById("generatedLink").innerText = "Please fill in all fields.";
  }
}

// Prefilled share links
const pageURL = window.location.href;
const waText = `🎉 You got Eid Salami! Click to open: ${pageURL}`;
document.getElementById("waLink").href = `https://wa.me/?text=${encodeURIComponent(waText)}`;

const msText = encodeURIComponent(`🎉 Eid Salami Received! Tap to see: ${pageURL}`);
document.getElementById("msLink").href = `https://www.facebook.com/sharer/sharer.php?u=${pageURL}&quote=${msText}`;
