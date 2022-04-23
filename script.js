const selectQuestions = document.querySelectorAll('.question');


selectQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        question.nextElementSibling.classList.toggle('hide'); 
        question.children[1].classList.toggle('rotate');
    });
});