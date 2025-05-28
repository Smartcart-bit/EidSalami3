// Get URL params
const params = new URLSearchParams(window.location.search);
const sender = params.get('sender') || 'Someone';
const receiver = params.get('receiver') || 'You';
const amount = params.get('amount') || '0';

// Quotes
const quotes = [
  "May your Eid be as rich as your heart!",
  "Spread love, joy, and salami this Eid.",
  "Kindness is the best gift – Salami comes next!",
  "Eid is better with a little fun and fake money!",
  "Even a virtual salami brings a real smile.",
  "Salami doesn’t grow on trees — except here 😄"
];

// Update DOM
document.getElementById('message').textContent =
  `${sender} has sent ৳${amount} Eid Salami to ${receiver}! 🎁`;
document.getElementById('amount').textContent = `৳${amount}`;
document.getElementById('quote').textContent =
  quotes[Math.floor(Math.random() * quotes.length)];

// Copy button
const copyBtn = document.getElementById('copyBtn');
const copiedMsg = document.getElementById('copied');

copyBtn.onclick = () => {
  navigator.clipboard.writeText(window.location.href);
  copiedMsg.style.display = 'block';
  setTimeout(() => (copiedMsg.style.display = 'none'), 2000);
};

// Load Lottie animation
lottie.loadAnimation({
  container: document.getElementById('animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets1.lottiefiles.com/packages/lf20_2ksqgjss.json' // Eid animation URL
});

// 🎉 Confetti
const confettiCanvas = document.getElementById("confetti-canvas");
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;
confetti.start();
