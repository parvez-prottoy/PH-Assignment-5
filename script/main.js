document.querySelector("#current-date").innerText = dateFormatter();

// change bg color of the body
document.querySelector("#change-bg").addEventListener("click", function () {
  const img = document.querySelector("#change-bg img");
  img.style.transform += "rotate(90deg)";
  const hexColor = generateHexColor();
  console.log(hexColor);
  document.body.style.backgroundColor = hexColor;
});

const completeBtns = document.querySelectorAll(".complete-btn");
const completeCountElement = document.querySelector("#complete-count");
const remainingCountElement = document.querySelector("#remaining-count");

// completed task
const activityLogsElement = document.querySelector("#activity-logs");
for (const btn of completeBtns) {
  btn.addEventListener("click", function (even) {
    alert("Task Completed");
    completeCountElement.textContent =
      Number(completeCountElement.textContent) + 1;
    remainingCountElement.textContent =
      Number(remainingCountElement.textContent) - 1;
    even.target.disabled = true;
    if (even.target.disabled) {
      even.target.style.backgroundColor = "rgba(155,168,248,1)";
    }
    if (Number(remainingCountElement.textContent) === 0) {
      alert("All Tasks Completed");
    }

    const taskName =
      even.target.parentElement.parentElement.querySelector("h3").textContent;
    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour12: true,
    });

    activityLogsElement.innerHTML += `
              <div class="bg-bgPrimary p-6 rounded-xl mb-4">
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
