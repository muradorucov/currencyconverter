let btns = document.querySelectorAll('.currency-types li');

const currency = {
    USD: 1.7,
    EUR: 2,
    RUB: 0.2,
    GBP: 1.2
}


btns.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        let childBtn = e.target.parentElement.children
        for (let i = 0; i < childBtn.length; i++) {
            childBtn[i].classList.remove("active")
        }
        e.target.classList.add('active')
        if (item.innerHTML == 'USD') {
            console.log(currency.USD)
        }
    })
})


// https: //api.exchangerate.host/latest