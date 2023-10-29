"use strict"

function more() {
    var dots = document.querySelector(".dots");
    var moreText = document.querySelector(".more");
    var btnText = document.getElementById("moreBtn");
    
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

window.onscroll = function (e) {
        console.log(window.scrollY); 
    };
    document.addEventListener("scroll", function() {
        const tab = document.getElementById("tablet");
        const tabBtn = document.getElementById("tabBtn")
        const icon1 = document.querySelector(".icon1");
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        tab.style.transition  = "all 1s";
        tabBtn.style.transition  = "all 1s";
        icon1.style.transition = "ease 1s"
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
        } else {
            icon1.style.opacity = "1"
        }
    })