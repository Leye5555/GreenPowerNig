////////////////////// this is the script for the navSlide /////////////////////////////////////////
let main = document.querySelectorAll("main");
let footer = document.querySelector("footer");
let navBar = document.querySelector(".navBar");
let navSlide = document.querySelector(".navSlide"); 
let header = document.getElementById("header");
let bgcover = document.querySelector(".bgcover");
let navBarToggle = document.querySelector(".navBarToggle");
let navLink = document.querySelectorAll(".navLink");

navBar.addEventListener("click", () => {
    navSlide.classList.toggle("navSlideToggle"); 
    navBar.style.backgroundColor = "rgb(5, 29, 5);";
    // navBar.style.border = "1px solid rgb(16, 71, 16)";
    navBar.style.height = "30px";
});

navBarToggle.addEventListener("click", () => {
    navSlide.classList.toggle("navSlideToggle"); 
    navBar.style.backgroundColor = "rgb(5, 29, 5);";
    navBar.style.border = "none";
    navBar.style.paddingBottom = "30px";
})

bgcover.addEventListener("click", () => {
    navSlide.classList.remove("navSlideToggle");
    navBar.style.backgroundColor = "rgb(5, 29, 5);";
    navBar.style.border = "none";
})
main[0].addEventListener("click", click = () => {
    navSlide.classList.remove("navSlideToggle");
    navBar.style.backgroundColor = "rgb(5, 29, 5);";
    // navBar.style.border = "1px solid rgb(16, 71, 16)";
    navBar.style.paddingBottom = "30px";
    console.log("working");
})



footer.addEventListener("click", click = () => {
    navSlide.classList.remove("navSlideToggle");
})
///////////////////////////////////// the end of the navSlide script //////////////////////////////// 






//////////////////////////////// the codes for the scroll up navigation upon page scroll /////////////////////
let logo = document.getElementById("logo");
let logoWrap = document.querySelector(".logoWrap");
let container = document.querySelector(".container");
let dropMenu = document.querySelectorAll(".drop");
let scrollUpBtn = document.querySelector(".scrollUpBtn");
let navItem = document.querySelectorAll(".item");
let slides = document.querySelector(".slides");
container.addEventListener("scroll", () => {
    if (container.scrollTop > 200) {
        header.style.top = "-100%";
        header.style.transition = "all 5s";
        bgcover.style.height = "calc(846px - 20vw)";
        dropMenu.forEach((drop) => drop.style.backgroundColor = "white")
    }

    if (container.scrollTop < 150) {
        header.style.position = "fixed";
        header.style.top = "0px";
        container.style.animationPlayState = "paused" ? "running" : "paused";
        navItem.forEach((item) => {
            item.style.paddingTop = "30px";
        }) 
        navItem[0].style.paddingTop = "10px";
        logo.style.width = "max(159px,15vw)";
        logo.style.height = "max(90px,4.5vw)";
        logo.style.paddingBottom = "0px";
        logoWrap.style.backgroundColor = "rgba(234, 243, 234, 0.322)";
        logoWrap.style.paddingTop = "10px";
        header.style.height = "80px";
        header.style.backgroundColor = "transparent";
        header.style.transition = "all 1s";
        bgcover.style.height = "calc(930px - 20vw)";
        navLink.forEach((link) => link.style.color = "rgb(172, 170, 170)");
        dropMenu.forEach((drop) => drop.style.backgroundColor = "white");
    }
    if (container.scrollTop > 500) {
        header.style.position = "fixed";
        header.style.top = "0px";
        header.style.height = "60px";
        header.style.zIndex = "6";
        header.style.backgroundColor = "white";
        header.style.transition = "all 1.5s";
        container.style.animationPlayState = "running" ? "paused" : "running";
        navItem.forEach((item) => {
            item.style.paddingTop = "20px";
        })
        navItem[0].style.paddingTop = "10px";
        logo.style.height = "52px";
        logo.style.marginTop = "0px";
        logo.style.paddingTop = "0px";
        logo.style.paddingBottom = "10px";
        logoWrap.style.backgroundColor = "unset"
        navLink.forEach((link) => link.style.color = "black");
    }
    if (container.scrollTop >= 1500) {
        scrollUpBtn.removeAttribute("hidden");
    }
    if (container.scrollTop < 1500) {
        scrollUpBtn.setAttribute("hidden","hidden");
    }

    if (container.scrollTop <= 50) {
        header.style.height = "80px";
        header.style.position = "absolute";
    }
 
})

scrollUpBtn.addEventListener("click", (e) => {
    e = setInterval(() => {
        container.scrollTop = container.scrollTop - 700;
    }, 50);
    setTimeout(() => {clearInterval(e);}, 1000)  
})

//////////////////////////////// end of the codes for the scroll up navigation upon page scroll /////////////////////











//////////////////////////////////// this is the block of code for page search /////////////////////////////////////////////////
let search = document.getElementById("search");
let searchWrapper = document.querySelector(".searchWrapper");
let p = document.querySelectorAll("p");
let div = document.querySelectorAll("div");
let span = document.querySelectorAll("span");
let h1 = document.querySelectorAll("h1");
let h3 = document.querySelectorAll("h3");
searchWrapper.addEventListener("click", (word) => {
    word = search.value;
    word = word.toLowerCase()
    p.forEach((pElement) => {
        let pElement2 = pElement.textContent.toLowerCase().toString();
         let firstChar = pElement2.indexOf(word);
            if ( firstChar != -1) {
                 pElement.innerHTML = pElement2.slice(firstChar, word.length);
                 let testSpan = document.createElement("span");
                 testSpan.style.color = "green";
                 testSpan.innerHTML = word;
                 pElement.appendChild(testSpan);
                 pElement.innerHTML = pElement2.slice(word.length + 1, pElement2.length);
            }
           
    })

    div.forEach((dElement) => {
        dElement = dElement.textContent.toLowerCase();
   })
  
})









//////////////////////////////////the block of codes for the click events on the Team profile/////////////////////////// 
let next = document.getElementById("next");
let prev = document.getElementById("helpPrev");
let box = document.querySelector(".box");
let iteration = 0;
// add a click event the prev button
prev.addEventListener("click", (back) => {
    iteration = iteration - 90;
    if (iteration >= -360) {
             back = iteration + "deg";
    box.style.transform = "rotateY" + "(" + back + ")";
    box.style.transition = "all 1s";
    }
    if (iteration < -360) { 
        iteration = 0;
        back = iteration + "deg";
        box.style.transform = "rotateY" + "(" + back + ")";
        box.style.transition = "unset";
    }
})

next.addEventListener("click", (back) => {
    iteration = iteration + 90;
    if (iteration <= 360) {
             back = iteration + "deg";
    box.style.transform = "rotateY" + "(" + back + ")";
    box.style.transition = "all 1s";
    }
    if (iteration > 360) { 
        iteration = 0;
        back = iteration + "deg";
        box.style.transform = "rotateY" + "(" + back + ")";
        box.style.transition = "unset";
    }
})


