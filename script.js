const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbz-6XtMYS1d9HdGol2t8YWntCyiGtUGPz7RnjmxtoEGCn_Aw9Y087GQknuCDtFMsqJB/exec";

let selectedRating = 0;

// ⭐ Rating
function rate(stars) {
    selectedRating = stars;

    for (let i = 1; i <= 5; i++) {
        document.getElementById("s" + i).innerHTML = (i <= stars) ? "★" : "☆";
    }
}

// 📤 Submit
function submitFeedback() {

    const parent = document.getElementById("parent").value.trim();
    const student = document.getElementById("student").value.trim();
    const cls = document.getElementById("class").value;
    const feedback = document.getElementById("feedback").value.trim();

    if (parent === "" || student === "" || cls === "Select Class" || feedback === "") {
        alert("Please fill all the fields.");
        return;
    }

    if (selectedRating === 0) {
        alert("Please select a rating.");
        return;
    }

    const data = {
        parent: parent,
        student: student,
        class: cls,
        rating: selectedRating,
        feedback: feedback
    };

    fetch(WEB_APP_URL, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
        alert("✅ Thank you! Your feedback has been submitted.");

        document.getElementById("parent").value = "";
        document.getElementById("student").value = "";
        document.getElementById("class").selectedIndex = 0;
        document.getElementById("feedback").value = "";

        selectedRating = 0;

        for (let i = 1; i <= 5; i++) {
            document.getElementById("s" + i).innerHTML = "☆";
        }
    })
    .catch(error => {
        console.log(error);
        alert("❌ Unable to submit feedback.");
    });

}
