const subject = localStorage.getItem("selectedSubject") || "Unknown";
const score = parseInt(localStorage.getItem("finalScore")) || 0;
const total = parseInt(localStorage.getItem("totalQuestions")) || 25;

let message = "Keep Practicing! 💡";
let emoji = "📘";
let bgColor = "#f5f5f5";

const ratio = score / total;

if (ratio >= 0.8) {
  message = "🌟 Excellent Work! You nailed it!";
  emoji = "🏆";
  bgColor = "#d4edda";
} else if (ratio >= 0.5) {
  message = "👍 Good Effort! You're on the right path.";
  emoji = "🎯";
  bgColor = "#fff3cd";
} else {
  message = "🔁 Keep Practicing! Every step counts.";
  emoji = "💡";
  bgColor = "#f8d7da";
}

document.body.style.backgroundColor = bgColor;

const emojiEl = document.getElementById("emoji-large");
if (emojiEl) emojiEl.textContent = emoji;

document.getElementById("subject-tag").textContent = `${emoji} ${subject}`;
document.getElementById("score-value").textContent = `${score} / ${total}`;
document.getElementById("motivation-text").textContent = message;
