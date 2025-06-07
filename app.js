const ratingButtons = document.querySelectorAll(".feedback-button button");
const submitButton = document.querySelector(".submit");
const ratingScreen = document.querySelector(".rating-screen");
const thankyouScreen = document.querySelector(".thankyou-screen");
const selectedRatingScreen = document.querySelector(".rating-selected");

let selectedRating = null;

ratingButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectedRating = button.textContent;
        
        ratingButtons.forEach(btn => btn.classList.remove("feedback-button-active"));

        button.classList.add("feedback-button-active");
    });
});

submitButton.addEventListener("click", () => {
    if (selectedRating === null) {
        alert("Please select a rating before submitting.");
        return;
    }
    ratingScreen.classList.remove("active");
    thankyouScreen.classList.add("active");

    selectedRatingScreen.textContent = `You selected ${selectedRating} out of 5`;
})