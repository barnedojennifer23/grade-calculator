function calculateGrade() {
    let grade = Number(document.getElementById("grade").value);
    let result = document.getElementById("result");

    if (grade >= 75) {
       result.textContent = "Congratulations! You Passed!";
    } else {
       result.textContent = "Sorry, You Failed.";
    }
}
