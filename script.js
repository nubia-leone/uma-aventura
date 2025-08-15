const avanca = document.querySelectorAll('.btn-next');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const current = document.querySelector('.active');
        const nextStep = 'step-' + this.getAttribute('next-date');

        current.classList.remove('active');
        document.getElementById(nextStep).classList.add('active');
    })
})
