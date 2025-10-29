// How
let btnHow = document.getElementById("btn-how");
let how = document.getElementById("how");

btnHow.addEventListener("click", function() {
    how.style.display = "block";
    document.body.style.overflow = "hidden";
});

how.addEventListener("click", function() {
    how.style.display = "none";
    document.body.style.overflow = "auto";
});

// Negative
let btnNegative = document.getElementById("btn-negative");
let negative = document.getElementById("negative");

btnNegative.addEventListener("click", function() {
    negative.style.display = "block";
    document.body.style.overflow = "hidden";
});

negative.addEventListener("click", function() {
    negative.style.display = "none";
    document.body.style.overflow = "auto";
});

// Question
let btnQuestion = document.getElementById("btn-question");
let question = document.getElementById("question");

btnQuestion.addEventListener("click", function() {
    question.style.display = "block";
    document.body.style.overflow = "hidden";
});

question.addEventListener("click", function() {
    question.style.display = "none";
    document.body.style.overflow = "auto";
});

// Repeat
let btnRepeat = document.getElementById("btn-repeat");
let repeat = document.getElementById("repeat");

btnRepeat.addEventListener("click", function() {
    repeat.style.display = "block";
    document.body.style.overflow = "hidden";
});

repeat.addEventListener("click", function() {
    repeat.style.display = "none";
    document.body.style.overflow = "auto";
});

// Examples
let btnExamples = document.getElementById("btn-examples");
let examples = document.getElementById("examples");

btnExamples.addEventListener("click", function() {
    examples.style.display = "block";
    document.body.style.overflow = "hidden";
});

examples.addEventListener("click", function() {
    examples.style.display = "none";
    document.body.style.overflow = "auto";
});