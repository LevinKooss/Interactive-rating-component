Frontend Mentor - Interactive rating component solution
This is a solution to the Interactive rating component challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.
----------------------------------------

Overview ->
The challenge
Users should be able to:

View the optimal layout for the app depending on their device's screen size

See hover states for all interactive elements on the page

Select and submit a number rating

See the "Thank you" card state after submitting a rating
----------------------------------------

Links
Solution URL: https://github.com/LevinKooss/Interactive-rating-component

Live Site URL: https://levinkooss.github.io/Interactive-rating-component/
----------------------------------------

My process
Built with:

Semantic HTML5 markup

CSS custom properties (CSS Variables)

Flexbox for layout and alignment

Mobile-first responsive design

Vanilla JavaScript for interactivity
----------------------------------------

What I learned:
In this project, I focused on creating a fully functional interactive rating component with the following key points:

- How to toggle active states on buttons with JavaScript efficiently

- Managing UI state transitions between rating and thank you screens

- Using CSS variables and custom properties for maintainable color schemes

- Implementing responsive design with media queries to ensure good UX on mobile and desktop

- Handling user input validation and feedback for better UX

- Example JavaScript snippet used to handle active rating button states:

js
Copy code
const ratingButtons = document.querySelectorAll(".feedback-button button");
let selectedRating = null;

ratingButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectedRating = button.textContent;
    ratingButtons.forEach(btn => btn.classList.remove("feedback-button-active"));
    button.classList.add("feedback-button-active");
  });
});
----------------------------------------

Continued development:
- Improve accessibility by adding ARIA attributes and keyboard navigation support

- Explore animations to smooth UI transitions between states

- Refactor JavaScript into modular functions or use a framework like React for scalability

- Add form validation for edge cases, e.g., no rating selected on submit

- Experiment with unit testing for JavaScript UI logic
----------------------------------------

Useful resources:
- Frontend Mentor Challenge – The original challenge brief

- MDN Web Docs - Using the DOM – Understanding DOM manipulation basics

- CSS Tricks - A Complete Guide to Flexbox – Essential Flexbox guide

- JavaScript Info - Event Listeners – Deep dive into JS event handling

Author
Levin Kooss

Frontend Mentor - (https://www.frontendmentor.io/profile/LevinKooss)

Twitter - https://x.com/LevKoDesign
----------------------------------------

Acknowledgments

I completed this project independently, but I want to thank the Frontend Mentor community for providing excellent challenges that sharpen my frontend skills.

