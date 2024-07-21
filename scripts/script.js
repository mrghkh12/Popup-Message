const $ = document

let showPopupBtn = $.querySelector('.show-btn')
let popupElem = $.querySelector('.popupElem')

let clossPopupBtn = $.querySelector('.clossPopup')

showPopupBtn.addEventListener('click' , () => {
    popupElem.classList.add('open-popup')
})

clossPopupBtn.addEventListener('click' , () => {
    popupElem.classList.remove('open-popup')
})