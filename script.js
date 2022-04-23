const selectQuestions = document.querySelectorAll(".question");

selectQuestions.forEach((question) => {
  question.addEventListener("click", collapseAnswers);
});


function collapseAnswers(){
    this.children[1].classList.toggle("rotate");

    const panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
}