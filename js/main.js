// current date, month and year
const dateElement = getElement("#current-date");
dateElement.innerText = dateFormatter();

// change bg color of the body
document.querySelector("#change-bg").addEventListener("click", function () {
  const imgElement = getElement("#change-bg img");
  imgElement.style.transform += "rotate(90deg)";
  const hexColor = generateHexColor();
  document.body.style.backgroundColor = hexColor;
});

// task complete
const completeBtns = document.querySelectorAll(".complete-btn");
const completeCountElement = getElement("#complete-count");
const remainingCountElement = getElement("#remaining-count");
const activityLogsElement = getElement("#activity-logs");
for (const btn of completeBtns) {
  btn.addEventListener("click", function (even) {
    alert("Board updated successfully ✅");
    completeCountElement.textContent =
      Number(completeCountElement.textContent) + 1;
    remainingCountElement.textContent =
      Number(remainingCountElement.textContent) - 1;
    even.target.disabled = true;
    if (even.target.disabled) {
      even.target.style.backgroundColor = "rgba(155,168,248,1)";
    }
    if (Number(remainingCountElement.textContent) === 0) {
      alert("🏆 You have complete all the current task 🎉");
    }
    const taskName =
      even.target.parentElement.parentElement.querySelector("h3").textContent;
    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour12: true,
    });
    activityLogsElement.innerHTML += `
              <div class="bg-bgPrimary p-4 rounded-xl mb-4">
                <p class="text-secondary/70">
                  You have Complete The Task Add ${taskName} at ${currentTime}
                </p>
              </div>`;
  });
}
// clear all logs
document.querySelector("#clear-logs").addEventListener("click", function () {
  activityLogsElement.innerHTML = "";
});

// new-today
const newTodayElement = getElement("#new-today");
newTodayElement.addEventListener("click", function () {
  window.location.href = "blog.html";
});
