'use strict';

// Setting Up variable 

const tabBtn1 = document.querySelector('#openTab1')
const tabBtn2 = document.querySelector('#openTab2')
const tabBtn3 = document.querySelector('#openTab3')

const tab1Content = document.querySelector('.tab1Content')
const tab2Content = document.querySelector('.tab2Content')
const tab3Content = document.querySelector('.tab3Content')

const showTab1 = function (){
    tab1Content.classList.replace('hide', 'show')
}

const showTab2 = function (){
    tab2Content.classList.replace('hide', 'show')
}

const showTab3 = function (){
    tab3Content.classList.replace('hide', 'show')
}


document.getElementById("defaultOpen").click();

tabBtn1.addEventListener('click', showTab1)
tabBtn2.addEventListener('click', showTab2)
tabBtn3.addEventListener('click', showTab3)