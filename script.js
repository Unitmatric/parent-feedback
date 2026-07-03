const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbz-6XtMYS1d9HdGol2t8YWntCyiGtUGPz7RnjmxtoEGCn_Aw9Y087GQknuCDtFMsqJB/exec";

let selectedRating = 0;

// ⭐ Star Rating
function rate(stars) {
    selectedRating = stars;
    alert("You selected " + stars + " star(s).");
}

// 📩 Submit Feedback
function submitFeedback() {

    const parent = document.getElementById("parent").value.trim();
    const student = document.getElementById("student").value.trim();
    const cls = document.getElementById("class").value;
    const feedback = document.getElementById("feedback").value.trim();

    if (parent === "" || student === "" || cls === "Select Class" || feedback === "") {
        alert("Please fill all the details.");
        return;
    }

    if (selectedRating === 0) {
        alert("Please select a star rating.");
        return;
    }

    fetch(WEB_APP_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            parent: parent,
            student: student,
            class: cls,
            rating: selectedRating,
            feedback: feedback
        })
    })
    .then(response => response.text())
    .then(data => {
        alert("✅ Thank you! Your feedback has been submitted.");

        document.getElementById("parent").value = "";
        document.getElementById("student").value = "";
        document.getElementById("class").selectedIndex = 0;
        document.getElementById("feedback").value = "";
        selectedRating = 0;
    })
    .catch(error => {
        console.error(error);
        alert("❌ Submission failed. Please try again.");
    });
}
