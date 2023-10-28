"use strict"



  

    window.onscroll = function (e) {
        console.log(window.scrollY); 
    };
    document.addEventListener("scroll", function() {
        const tab = document.getElementById("tablet");
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        tab.style.transition  = "all 2s";
        if (scrollTop < 700) {
            tab.style.transform = "translateX(-100px)"
            tab.style.opacity = "0"
        } else if (scrollTop > 701) {
            tab.style.opacity = "1"
            tab.style.transform = "translateX(0px)"            
        }
    })