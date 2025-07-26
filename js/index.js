let selectedSubject = "";
let selectedDifficulty = "";

// 🎨 Subject background styles
const subjectBackgrounds = {
  English: "linear-gradient(to bottom right, #c7d2fe, #eef2ff)",
  Physics: "linear-gradient(to bottom right, #fce7f3, #f3e8ff)",
  Maths: "linear-gradient(to bottom right, #e0f2fe, #f0fdf4)",
  Chemistry: "linear-gradient(to bottom right, #fef9c3, #fcd34d)"
};

// ✅ Subject Selection
document.querySelectorAll(".subjectline").forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'selected' class from all buttons
    document.querySelectorAll(".subjectline").forEach((btn) =>
      btn.classList.remove("selected")
    );

    // Add 'selected' to clicked button
    button.classList.add("selected");

    // Store selection
    selectedSubject = button.dataset.subject;
    localStorage.setItem("selectedSubject", selectedSubject);

    // Apply subject-specific background
    document.getElementById("mainBody").style.background =
      subjectBackgrounds[selectedSubject];
  });
});

// ✅ Difficulty Selection
document.querySelectorAll(".difficulty").forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'selected' from all buttons
    document.querySelectorAll(".difficulty").forEach((btn) =>
      btn.classList.remove("selected")
    );

    // Add 'selected' to clicked
    button.classList.add("selected");

    // Store selection
    selectedDifficulty = button.dataset.level.toLowerCase();
    localStorage.setItem("selectedDifficulty", selectedDifficulty);
  });
});

// ✅ Start Quiz Button
document.getElementById("startQuizBtn").addEventListener("click", () => {
  if (!selectedSubject || !selectedDifficulty) {
    alert("Please select both subject and difficulty to begin.");
    return;
  }

  console.log("Starting quiz with:", selectedSubject, selectedDifficulty);

  // Redirect to quiz
  window.location.href = "../PrepMaster/quiz.html";
});
