
const questions = document.querySelectorAll('li');
const answers = document.querySelectorAll('p');
const arrows = document.querySelectorAll('img');


questions.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        for(let i = 0; i < questions.length; i++){
            questions[i].classList.remove("activeQuestion");
            questions[i].childNodes[1].classList.remove("activeArrow");
            questions[i].childNodes[3].classList.add("invisible");
        }
        item.classList.toggle("activeQuestion");
        item.childNodes[1].classList.toggle("activeArrow");
        item.childNodes[3].classList.toggle("invisible");

       })
    })



