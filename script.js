function submitFeedback() {
  let parent = document.getElementById("parent").value;
  let student = document.getElementById("student").value;
  let cls = document.getElementById("class").value;
  let feedback = document.getElementById("feedback").value;

  alert(
    "Thank you!\n\nParent: " + parent +
    "\nStudent: " + student +
    "\nClass: " + cls +
    "\n\nYour feedback has been received."
  );
}

function rate(stars) {
  alert("You rated " + stars + " star(s).");
}
