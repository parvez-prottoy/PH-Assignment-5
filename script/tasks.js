const tasks = [
  {
    id: 1,
    name: "Fix Mobile Button Issue",
    label: "ShopEase",
    description:
      "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly",
    date: "21 March 2025",
  },
  {
    id: 2,
    name: "Add Dark Mode",
    label: "CloudSync",
    description:
      "Store the user's preference in localStorage, update CSS variables dynamically, and apply a smooth transition effect.",
    date: "22 March 2025",
  },
  {
    id: 3,
    name: "Optimize  Home page",
    label: "SwiftPay",
    description:
      "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly",
    date: "23 March 2025",
  },
  {
    id: 4,
    name: "Add new emoji 🤲",
    label: "Meta",
    description:
      "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly",
    date: "24 March 2025",
  },
  {
    id: 5,
    name: "Integrate OpenAI API ",
    label: "Google LLC",
    description:
      "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly",
    date: "25 March 2025",
  },
  {
    id: 6,
    name: "Improve Job searching ",
    label: "Glassdoar",
    description:
      "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly",
    date: "26 March 2025",
  },
];
const tasksElement = getElement("#tasks");
for (const task of tasks) {
  tasksElement.innerHTML += `
            <div class="bg-bgPrimary p-6 rounded-lg space-y-4">
                <h5 class="bg-white inline py-1 px-3 rounded-lg">
                  ${task.label}
                </h5>
                <h3 class="text-xl font-medium">${task.name}</h3>
                <p title='${
                  task.description
                }' class="bg-white p-2 rounded-md overflow-hidden text-primary/40">
                  ${task.description.slice(0, 85)}...
                </p>
                <div class="flex justify-between items-center">
                  <div>
                    <small>Deadline</small>
                    <p>${task.date}</p>
                  </div>
                  <button class="complete-btn bg-bgInfo font-medium px-6 py-2 text-white rounded-lg">
                    Completed
                  </button>
                </div>
            </div>
  `;
}
