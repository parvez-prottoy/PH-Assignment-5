// back to home page
document.querySelector("#back-desk").addEventListener("click", function () {
  window.location.href = "/index.html";
});

// questions data
const questions = [
  {
    number: 1,
    question: "What are the different ways to select an element in the DOM?",
    answer:
      "DOM-এ এলিমেন্ট সিলেক্ট করার বিভিন্ন উপায় আছে, যেমন: getElementsByTagName() getElementById() getElementsByClassName() querySelector() querySelectorAll()",
  },
  {
    number: 2,
    question:
      "What is the difference between innerHTML, innerText, and textContent?",
    answer:
      "innerHTML, innerText, এবং textContent-এর মধ্যে পার্থক্য নিম্নরূপ: innerHTML এলিমেন্টের ভেতরের HTML কোড ট্যাগসহ রিটার্ন করে বা সেট করে, innerText শুধু দৃশ্যমান টেক্সট রিটার্ন করে (স্টাইল বিবেচনা করে), আর textContent সম্পূর্ণ টেক্সট রিটার্ন করে (লুকানো টেক্সটসহ, ট্যাগ বাদে)।",
  },
  {
    number: 3,
    question: "What is event delegation in the DOM?",
    answer:
      "ইভেন্ট ডেলিগেশন হলো প্যারেন্ট এলিমেন্টে একটি ইভেন্ট লিসেনার দিয়ে চাইল্ড এলিমেন্টের ইভেন্ট ধরার পদ্ধতি।",
  },
  {
    number: 4,
    question: "What is event bubbling in the DOM?",
    answer:
      "ইভেন্ট বাবলিং হলো DOM-এ এমন একটি প্রক্রিয়া যেখানে কোনো ইভেন্ট চাইল্ড এলিমেন্ট থেকে শুরু হয়ে প্যারেন্ট পর্যন্ত উঠে যায়। যেমন, একটি বাটনে ক্লিক করলে ইভেন্টটি বাটন থেকে তার প্যারেন্ট, তারপর গ্র্যান্ডপ্যারেন্ট পর্যন্ত প্রচারিত হয়।",
  },
  {
    number: 5,
    question: "How do you create, add, and remove elements using JavaScript?",
    answer:
      "document.createElement('tag') দিয়ে নতুন এলিমেন্ট তৈরি করা যায়, যেমন let div = document.createElement('div')। appendChild() বা append() দিয়ে এটি DOM-এ যোগ করা হয়, যেমন parent.appendChild(div)।  removeChild() বা remove() দিয়ে এলিমেন্ট মুছে ফেলা যায়, যেমন parent.removeChild(div) বা div.remove()।",
  },
];
const questionsElement = document.querySelector("#questions");
for (const question of questions) {
  questionsElement.innerHTML += `
                    <div class=" bg-white rounded-lg">
                        <h3 class="p-6 text-xl font-medium">Question-${question.number}: ${question.question}</h3>
                        <hr class="border-dashed border-1" />
                        <p class="p-6 text-lg">${question.answer} 
                        </p>
                    </div>
    `;
}
