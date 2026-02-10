const envelope = document.querySelector(".envelope");
const card = document.getElementById("card");
const cardInner = document.getElementById("cardInner");
const music = document.getElementById("bgMusic");

const message =
"Every heartbeat reminds me how lucky I am to have you. " +
"You make my world brighter, warmer, and more beautiful every day. " +
"Always remember that I will stay by your side—today, tomorrow, and forever. " +
"My love for you is my most precious treasure, something I will always cherish and take care of. " +
"I love you always, baby ko! " +
"Happy Valentine’s Day ❤️";

let index = 0;

/* Envelope open */
function openEnvelope() {
  envelope.classList.add("open");
  setTimeout(() => {
    envelope.style.display = "none";
    card.classList.remove("hidden");
    cardInner.classList.add("open");
    music.play();
    typeWriter();
  }, 1000);
}

/* Typewriter effect */
function typeWriter() {
  if (index < message.length) {
    document.getElementById("typewriter").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}

/* Hearts */
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);

/* Rose petals */
setInterval(() => {
  const petal = document.createElement("span");
  petal.innerHTML = "🌹";
  petal.style.left = Math.random() * 100 + "vw";
  document.querySelector(".petals").appendChild(petal);
  setTimeout(() => petal.remove(), 6000);
}, 500);

/* Fireworks */
setInterval(() => {
  const firework = document.createElement("span");
  firework.style.left = Math.random() * 100 + "vw";
  firework.style.top = Math.random() * 50 + "vh";
  document.querySelector(".fireworks").appendChild(firework);
  setTimeout(() => firework.remove(), 1000);
}, 700);