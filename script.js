const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbz8Fz8xSgC5Pzqp9fIkUfsF4hRCDj-KhOkoCtY9aqUscKsfHCb2R1QxxW6EiYNayjRj3A/exec";

let selectedRating = 0;

function rate(stars) {
  selectedRating = stars;

  for (let i = 1; i <= 5; i++) {
    document.getElementById("s" + i).innerHTML = i <= stars ? "★" : "☆";
  }
}

async function submitFeedback() {

  const parent = document.getElementById("parent").value.trim();
  const student = document.getElementById("student").value.trim();
  const cls = document.getElementById("class").value;
  const feedback = document.getElementById("feedback").value.trim();

  if (!parent || !student || cls === "Select Class" || !feedback) {
    alert("Please fill all fields.");
    return;
  }

  if (selectedRating === 0) {
    alert("Please select rating.");
    return;
  }

  const data = {
    parent: parent,
    student: student,
    class: cls,
    rating: selectedRating,
    feedback: feedback
  };

  try {

    const response = await fetch(WEB_APP_URL, {
      method: "POST",
      body: JSON.stringify(data)
    });

    const result = await response.text();

    alert("✅ Feedback submitted successfully.");

    document.getElementById("parent").value = "";
    document.getElementById("student").value = "";
    document.getElementById("class").selectedIndex = 0;
    document.getElementById("feedback").value = "";

    selectedRating = 0;

    for (let i = 1; i <= 5; i++) {
      document.getElementById("s" + i).innerHTML = "☆";
    }

  } catch (err) {
    console.log(err);
    alert("❌ Unable to submit feedback");
  }
}
