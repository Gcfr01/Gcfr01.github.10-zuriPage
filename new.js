const btns = document.querySelectorAll('.q-btn')
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement.parentElement
        
        question.classList.toggle('show')
        console.log(question.classList);
    })
})