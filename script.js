const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbz-6XtMYS1d9HdGol2t8YWntCyiGtUGPz7RnjmxtoEGCn_Aw9Y087GQknuCDtFMsqJB/exec";

function submitFeedback() {
  const parent = document.getElementById("parent").value;
  const student = document.getElementById("student").value;
  const cls = document.getElementById("class").value;
  const feedback = document.getElementById("feedback").value;

  fetch(WEB_APP_URL, {
    method: "POST",
    body: JSON.stringify({
      parent: parent,
      student: student,
      class: cls,
      feedback: feedback
    })
  })
  .then(() => {
    alert("Thank you! Your feedback has been submitted successfully.");
  })
  .catch(() => {
    alert("Error submitting feedback.");
  });
}

function rate(stars) {
  alert("You rated " + stars + " star(s).");
}
