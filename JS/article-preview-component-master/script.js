shareButton = document.querySelector('.share');
shareDiv = document.querySelector('.active')

shareButton.addEventListener('click',function(){
    shareDiv.classList.toggle("off");
})