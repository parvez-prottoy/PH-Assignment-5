document.querySelector("#current-date").innerText = dateFormatter();

const completeBtns = document.querySelectorAll(".complete-btn");
const completeCountElement = document.querySelector("#complete-count");
const remainingCountElement = document.querySelector("#remaining-count");

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
  });
}
