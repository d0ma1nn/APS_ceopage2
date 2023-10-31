"use strict"

const av1 = document.querySelector('.avatar1');
const av2 = document.querySelector('.avatar2');
const av3 = document.querySelector('.avatar3');
const text3 = document.querySelector('.text3')
const text2 = document.querySelector('.text2')
const text1 = document.querySelector('.text1')
const button__ok = document.querySelector('.button__ok')
const modal = document.querySelector('.modal')
const modal__1 = document.querySelector(".modal__1");

modal.style.transition = "ease-in 0.5s"



 button__ok.addEventListener('click', function(){
    modal.style.display ="block";
    document.body.style.display = "none";
    console.log(3)
 })

modal__1.addEventListener('click', function(){
    document.body.style.display = "none";
    modal.style.display ="block";
    console.log(3)
 })

av2.style.transition = "ease-in 2s"
av3.style.transition = "ease-out 2s"
av1.style.transition = "ease-in 2s"
text3.style.transition = "ease 1s"
text2.style.transition = "ease 1s"
text1.style.transition = "ease 1s"

// const avat2 = document.querySelector('.avat2');
av2.addEventListener('click', function() {
    if(av2.style.transform === "translateX(0px)") {
        av2.style.transform = 'translateX(-300px)';
        text2.style.transform = "translateX(-300px)"
        av1.style.transform = 'translateX(300px)';
        text1.style.transform = "translateX(300px)"
        text3.style.transform = "translateX(0px)"
        av3.style.transform = "translate(0px)"
    } else if (av2.style.transform ===  "translateX(-300px)") {
        av2.style.transform = 'translateX(0px)';
        av3.style.transform = "translateX(0px)";
        av1.style.transform = "translate(0px)"
    }
    else {
        av2.style.transform = 'translateX(-300px)';
        av1.style.transform = "translateX("+300+"px)";
        text1.stay
    }
})

av3.addEventListener('click', function() {
    if(av3.style.transform === "translateX(0px)") {
        av1.style.transform = 'translateX(600px)';
        text1.style.transform = "translateX(600px)"
        av2.style.transform = 'translateX(0px)';
        text2.style.transform = "translateX(0px)"
        av3.style.transform = "translateX(-600px)"
        text3.style.transform = "translateX(-600px)"

    } else if (av3.style.transform ===  "translateX(-300px)") {
        av3.style.transform = 'translateX(0px)';
        av2.style.transform = "translateX(0px)";
    }
    else {
        av3.style.transform = 'translateX(0px)';
        av1.style.transform = "translateX(0px)";
        text1.style.transform = "translate(0px)"
    }
})

av1.addEventListener('click', function() {
    if(av1.style.transform === "translateX(0px)") {
        let ran = Math.floor(Math.random() * 2 + 2);
        if (ran === 2){
            av3.style.transform = 'translateX(-300px)';
            av2.style.transform = 'translateX(300px)';
            text2.style.transform = "translateX(300px)"
            text3.style.transform = "translate(-300px)"
        } else {
            av2.style.transform = 'translateX(0)';
            av3.style.transform = 'translateX(0)';
            text2.style.transform = "translateX(0px)"
            text3.style.transform = "translate(0px)"
        }
        
    } else if (av1.style.transform ===  "translateX(300px)") {
        av1.style.transform = 'translateX(0px)';
        av2.style.transform = "translateX(0px)";
        text1.style.transform = "translateX(0px)"
    }
    else {
        av1.style.transform = 'translateX(0px)';
        av2.style.transform = "translateX(0px)";

    }
})

// function av2() {

// }

function more() {
    const dots = document.querySelector(".dots");
    const moreText = document.querySelector(".more");
    const btnText = document.getElementById("moreBtn");
    
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}
const moreBtn1 = document.getElementById("moreBtn1")
moreBtn1.addEventListener('click', function() {
    const dots1 = document.querySelector(".dots1");
    const moreText1 = document.querySelector(".more1");
    if (dots1.style.display === "none") {
        dots1.style.display = "inline";
        moreBtn1.innerHTML = "Read More..."
        moreText1.style.display = "none"
    } else {
        dots1.style.display = "none";
        moreBtn1.innerHTML = 'Read Less..'
        moreText1.style.display = "inline"
    }
})
function third(){
    const moreBtn2 = document.getElementById('moreBtn2');
    const dots2 = document.querySelector(".dots2");
    const moreText2 = document.querySelector(".more2");

        if (dots2.style.display === "none") {
            dots2.style.display = 'inline';
            moreBtn2.innerHTML = 'Read moree...'
            moreText2.style.display = 'none'
        } else {
            dots2.style.display = 'none';
            moreBtn2.innerHTML = 'Read less...'
            moreText2.style.display = 'inline'
        }
    
    console.log(moreBtn2)
}

window.onscroll = function () {
    };
    document.addEventListener("scroll", function() {
        const tab = document.getElementById("tablet");
        const tabBtn = document.getElementById("tabBtn")
        const icon1 = document.querySelector(".icon1");
        const icon2 = document.querySelector(".icon2");
        const icon3 = document.querySelector(".icon3");
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        tab.style.transition  = "all 1s";
        tabBtn.style.transition  = "all 1s";
        icon1.style.transition = "ease 1s"
        icon3.style.transition = "ease 2s"
        icon2.style.transition = "ease 1s"
        if (scrollTop < 700) {
            tab.style.transform = "translateX(-100px)"
            tab.style.opacity = "0"
            tabBtn.style.opacity = "0"
            tabBtn.style.transform = "translateX(100px)"
        } else {
            tab.style.opacity = "1"
            tabBtn.style.opacity = "1"
            tab.style.transform = "translateX(0px)"   
            tabBtn.style.transform = "translateX(0px)"
        }
        if (scrollTop < 1900) {
            icon1.style.opacity = "0"
            setTimeout(() => {                
                return icon2.style.opacity = "0"
             }, 500);
             setTimeout(() => {                
                return icon3.style.opacity = "0"
             }, 1000);
        } else {
            setTimeout(() => {                
                return icon3.style.opacity = "1"
             }, 1000);
             setTimeout(() => {                
                return icon2.style.opacity = "1"
             }, 500);
            icon1.style.opacity = "1"
        }
    })