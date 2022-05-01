let have = document.querySelector(".result-have");
let buy = document.querySelector(".result-buy");
let btnsHave = document.querySelectorAll('.have li');
let btnsBuy = document.querySelectorAll('.want-to-buy li');
let defaultResult1 = "RUB"
let defaultResult2 = "USD"
let inputValue1 = 0
let inputValue2 = 0

fetch(`https://api.exchangerate.host/latest?base=${defaultResult1}&symbols=${defaultResult2}`)
    .then(res => res.json())
    .then(data => {
        let rate = data.rates
        let ratesValue = Object.values(rate)
        let ratesKeys = Object.keys(rate)
        have.addEventListener("keyup", () => {
            let inputValue1 = Number(have.value)
            let inputValue2 = (buy.value)
            buy.value = inputValue1 * ratesValue
        })

    })


btnsHave.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        let childBtn = e.target.parentElement.children
        for (let i = 0; i < childBtn.length; i++) {
            childBtn[i].classList.remove("active")
        }
        e.target.classList.add('active')
        defaultResult1 = e.target.id
        fetch(`https://api.exchangerate.host/latest?base=${defaultResult1}&symbols=${defaultResult2}`)
            .then(res => res.json())
            .then(data => {
                let rate = data.rates
                let ratesValue = Object.values(rate)
                let ratesKeys = Object.keys(rate)
                let inputValue1 = Number(have.value)
                let inputValue2 = (buy.value)
                buy.value = inputValue1 * ratesValue


            })
    })
})
btnsBuy.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        let childBtn = e.target.parentElement.children
        for (let i = 0; i < childBtn.length; i++) {
            childBtn[i].classList.remove("active")
        }
        e.target.classList.add('active')
        defaultResult2 = e.target.id
        fetch(`https://api.exchangerate.host/latest?base=${defaultResult2}&symbols=${defaultResult1}`)
            .then(res => res.json())
            .then(data => {
                let rate = data.rates
                let ratesValue = Object.values(rate)
                let ratesKeys = Object.keys(rate)
                console.log(data);
                let inputValue1 = Number(have.value)
                let inputValue2 = Number(buy.value)
                have.value = inputValue2 * ratesValue
            })
    })
})