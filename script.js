const params = new URLSearchParams(window.location.search);
const sender = params.get("sender");
const receiver = params.get("receiver");
const amount = params.get("amount");

const quotes = [
  "May your Eid be as rich as your heart!",
  "Spread love, joy, and salami this Eid.",
  "Kindness is the best gift – Salami comes next!",
  "Eid is better with a little fun and fake money!",
  "Even a virtual salami brings a real smile.",
  "Salami doesn’t grow on trees — except here 😄"
];

// Salami view
if (sender && receiver && amount) {
  document.getElementById("salami-section").style.display = "block";
  document.getElementById("form-section").style.display = "none";

  document.getElementById("message").textContent =
    `${sender} has sent ৳${amount} Eid Salami to ${receiver}! 🎁`;
  document.getElementById("amount").textContent = `৳${amount}`;
  document.getElementById("quote").textContent =
    quotes[Math.floor(Math.random() * quotes.length)];

  lottie.loadAnimation({
    container: document.getElementById("animation"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "https://assets1.lottiefiles.com/packages/lf20_2ksqgjss.json"
  });

  // Confetti
  const confettiCanvas = document.getElementById("confetti-canvas");
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  // Use any confetti lib or just ignore if not available
  // confetti.start();
}

// Copy salami link
const copyBtn = document.getElementById("copyBtn");
if (copyBtn) {
  copyBtn.onclick = () => {
    navigator.clipboard.writeText(window.location.href);
    document.getElementById("copied").style.display = "block";
    setTimeout(() => (document.getElementById("copied").style.display = "none"), 2000);
  };
}

// Generate link from input
const generateBtn = document.getElementById("generateBtn");
generateBtn.onclick = () => {
  const s = document.getElementById("inputSender").value.trim();
  const r = document.getElementById("inputReceiver").value.trim();
  const a = document.getElementById("inputAmount").value.trim();

  if (s && r && a) {
    const url = `${window.location.origin}${window.location.pathname}?sender=${encodeURIComponent(s)}&receiver=${encodeURIComponent(r)}&amount=${encodeURIComponent(a)}`;
    navigator.clipboard.writeText(url);
    document.getElementById("generated").style.display = "block";
    setTimeout(() => (document.getElementById("generated").style.display = "none"), 3000);
  } else {
    alert("Please fill all fields!");
  }
};
