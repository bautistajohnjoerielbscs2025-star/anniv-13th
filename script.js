const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");

const progress = document.getElementById("progress");
const progressContainer = document.querySelector(".progress-container");

const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

let isPlaying = false;

/* PLAY / PAUSE */
playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    isPlaying = true;
  } else {
    audio.pause();
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    isPlaying = false;
  }
});

/* UPDATE PROGRESS */
audio.addEventListener("timeupdate", () => {
  const { currentTime, duration } = audio;

  const percent = (currentTime / duration) * 100;
  progress.style.width = percent + "%";

  currentTimeEl.textContent = formatTime(currentTime);
});

/* SET DURATION */
audio.addEventListener("loadedmetadata", () => {
  durationEl.textContent = formatTime(audio.duration);
});

/* SEEK BAR */
progressContainer.addEventListener("click", (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;

  audio.currentTime = (clickX / width) * audio.duration;
});

/* FORMAT TIME */
function formatTime(sec) {
  const min = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60);
  return `${min}:${seconds < 10 ? "0" : ""}${seconds}`;
}

/* FLIP CARDS */
document.querySelectorAll(".flip-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
const petalContainer = document.querySelector(".petals");

const petals = ["🌸", "🌺", "🌷"];

for (let i = 0; i < 18; i++) {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  petal.innerText = petals[Math.floor(Math.random() * petals.length)];

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = (8 + Math.random() * 10) + "s";
  petal.style.fontSize = (12 + Math.random() * 10) + "px";
  petal.style.opacity = (0.15 + Math.random() * 0.25);

  petal.style.animationDelay = Math.random() * 5 + "s";

  petalContainer.appendChild(petal);
}