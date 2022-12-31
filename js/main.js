const leftBtns = document.querySelectorAll(".btnLeft li")
const rightBtns = document.querySelectorAll(".btnRight li")
const leftInputData = document.querySelector(".left-input");
const rightInputData = document.querySelector(".right-input");
const rightResult = document.querySelector(".right-result span")
const leftResult = document.querySelector(".left-result span")

const url = 'https://api.exchangerate.host/latest?';
let baseData = 'AZN';
let symbolData = 'USD';

onlineConvert()


leftInputData.addEventListener("keyup", () => {
    val = leftInputData.value
    for (let i = 0; i < val.length; i++) {
        if (val[0] === '0')
            leftInputData.value = leftInputData.value.substring(1)
    }
    onlineConvert()
})


leftBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        leftBtns.forEach(item => {
            item.classList.remove("active")
        })
        e.target.classList.add("active")
        baseData = e.target.innerText;
        onlineConvert()
    })
})


rightBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        rightBtns.forEach(item => {
            item.classList.remove("active")
        })
        e.target.classList.add("active")
        symbolData = e.target.innerText
        onlineConvert()
    })
})


function onlineConvert() {
    fetch(`${url}base=${baseData}&symbols=${symbolData}`)
        .then(res => res.json())
        .then(data => {
            rightInputData.value = (leftInputData.value * data.rates[symbolData]).toFixed(2)
            leftResult.innerText = `1 ${baseData} = ${(data.rates[symbolData]).toFixed(2)} ${symbolData} `
            rightResult.innerText = `1 ${symbolData} = ${(1 / data.rates[symbolData]).toFixed(2)} ${baseData} `
        })
}











// Responsive Menu start
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

// Responsive Menu end