let menu = document.querySelector('.menu')
let menuBtn = document.querySelector('.viewBtn')
let exitBtn = document.querySelector('.exitBtn')
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    exitBtn.style.display = 'block';
})

exitBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    exitBtn.style.display = 'none';
})
