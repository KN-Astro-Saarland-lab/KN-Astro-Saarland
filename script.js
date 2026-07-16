// ===============================
// KN Astrofotografie
// script.js
// ===============================

// Aktiven Menüpunkt automatisch markieren

document.addEventListener("DOMContentLoaded", () => {

    const currentPage = window.location.pathname.split("/").pop();

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage || (currentPage === "" && href === "index.html")) {
            link.classList.add("active");
        }

    });

});


// Sanftes Scrollen zu internen Bereichen

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// Bilder leicht einblenden

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

},{
    threshold:0.15
});


document.querySelectorAll(".kachel").forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.6s ease";

    observer.observe(card);

});


// Titelbild beim Scrollen minimal verkleinern

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero img");

    if(!hero) return;

    let scale=1-(window.scrollY*0.00015);

    if(scale<0.95) scale=0.95;

    hero.style.transform=`scale(${scale})`;

});


// Nach oben scrollen

const topButton=document.createElement("button");

topButton.innerHTML="▲";

topButton.id="topButton";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.right="30px";
topButton.style.bottom="30px";
topButton.style.width="50px";
topButton.style.height="50px";
topButton.style.border="none";
topButton.style.borderRadius="50%";
topButton.style.background="#b59668";
topButton.style.color="white";
topButton.style.fontSize="22px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.boxShadow="0 4px 12px rgba(0,0,0,.3)";
topButton.style.transition=".3s";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
