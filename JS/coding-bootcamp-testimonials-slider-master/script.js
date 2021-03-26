const feedback = document.querySelector('.citation');
const who = document.querySelector('.name');
const profession = document.querySelector('.profession');
const pic = document.querySelector('.image');
const before = document.querySelector('.leftBtn');
const after = document.querySelector('.rightBtn');



const users = [
    {
        username: 'Tanya Sinclair',
        role: 'UX Engineer',
        feedback: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`,
        image: './images/image-tanya.jpg'
    },

    {
        username: 'John Tarkpor',
        role: 'Junior Front-end Developer',
        feedback: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`,
        image: './images/image-john.jpg'
    }
]

var slide = 0;

const navigation = () =>{
    if(slide>users.length-1){
        slide = 0;
    }
    
    pic.innerHTML = `<img src="${users[slide].image}" alt="">`;
    who.innerHTML = `${users[slide].username}`;
    profession.innerHTML= `${users[slide].role}`;
    feedback.innerHTML = `${users[slide].feedback}`;
    slide++;
}



navigation();

before.addEventListener('click', navigation);
after.addEventListener('click', navigation);