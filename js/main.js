let btns = document.querySelectorAll('.currency-types li');

btns.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        item.className = 'active';
    })
})