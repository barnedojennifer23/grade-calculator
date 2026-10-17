function calculateGrade() {
    let grade = Number(document.getElementById("grade").value);
    let result = document.getElementById("result");

    if (grade >= 75) {
        result.textContent = "Passed!";
    } else {
        result.textContent = "Failed.";
    }
}
