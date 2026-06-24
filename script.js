/* ==========================================
   DOM ELEMENTS
========================================== */

const slides = document.querySelectorAll(".slide");

const menuButton = document.querySelector(".menu-btn");

const navMenu = document.querySelector("nav ul");

const navbar = document.getElementById("navbar");

const navLinks = document.querySelectorAll("nav a");

const sections = document.querySelectorAll("section");


/* ==========================================
   HERO IMAGE SLIDER
========================================== */

let currentSlide = 0;

function removeActiveSlide(){

    slides.forEach(slide=>{

        slide.classList.remove("active");

    });

}

function showSlide(index){

    removeActiveSlide();

    slides[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

showSlide(currentSlide);

setInterval(nextSlide,5000);


/* ==========================================
   MOBILE MENU
========================================== */

menuButton.addEventListener("click",()=>{

    navMenu.classList.toggle("show-menu");

});


/* ==========================================
   CLOSE MENU WHEN LINK IS CLICKED
========================================== */

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("show-menu");

    });

});


/* ==========================================
   STICKY NAVIGATION
========================================== */

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        navbar.style.background="rgba(10,10,15,.95)";

        navbar.style.boxShadow="0 15px 40px rgba(0,0,0,.45)";

        navbar.style.padding="14px 28px";

    }

    else{

        navbar.style.background="rgba(20,20,24,.55)";

        navbar.style.boxShadow="none";

        navbar.style.padding="16px 30px";

    }

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

navLinks.forEach(link=>{

    link.addEventListener("click",function(event){

        event.preventDefault();

        const target=this.getAttribute("href");

        const section=document.querySelector(target);

        section.scrollIntoView({

            behavior:"smooth"

        });

    });

});


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

function activeNavigation(){

    let currentSection="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-180;

        const sectionHeight=section.clientHeight;

        if(pageYOffset >= sectionTop){

            currentSection=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + currentSection){

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll",activeNavigation);

activeNavigation();


/* ==========================================
   HERO BUTTON EFFECT
========================================== */

const heroButtons=document.querySelectorAll(".hero-buttons a");

heroButtons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-6px) scale(1.04)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0) scale(1)";

    });

});


/* ==========================================
   LOG
========================================== */

console.log("Part 1 Loaded Successfully");
/* ==========================================
   GALLERY LIGHTBOX
========================================== */

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("show");

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        document.body.style.overflow = "hidden";

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("show");

    document.body.style.overflow = "auto";

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll("section");

function revealSections() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {

            section.style.opacity = "1";

            section.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================
   HERO PARALLAX
========================================== */

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero-slider");

    hero.style.transform = `translateY(${window.scrollY * 0.3}px)`;

});


/* ==========================================
   IMAGE HOVER TILT
========================================== */

const galleryCards = document.querySelectorAll(".gallery-item");

galleryCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 18;

        const rotateX = (0.5 - y / rect.height) * 18;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.04)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});


/* ==========================================
   BIO IMAGE PARALLAX
========================================== */

const bioImage = document.querySelector(".bio-image");

window.addEventListener("mousemove", e => {

    const x = (window.innerWidth / 2 - e.pageX) / 80;

    const y = (window.innerHeight / 2 - e.pageY) / 80;

    bioImage.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* ==========================================
   AWARD CARD ANIMATION
========================================== */

const awardCards = document.querySelectorAll(".award-card");

awardCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) scale(1)";

    });

});


/* ==========================================
   FLOATING EFFECT
========================================== */

const donationCards = document.querySelectorAll(".donation-card");

donationCards.forEach((card, index) => {

    setInterval(() => {

        card.animate([

            {

                transform: "translateY(0px)"

            },

            {

                transform: "translateY(-8px)"

            },

            {

                transform: "translateY(0px)"

            }

        ], {

            duration: 2500 + (index * 300),

            iterations: 1

        });

    }, 3000 + (index * 500));

});


/* ==========================================
   CONSOLE
========================================== */

console.log("Part 2 Loaded Successfully");
/* ==========================================
      FAN REGISTRATION
========================================== */

const fanForm = document.getElementById("fanRegistration");

const successModal = document.getElementById("successModal");

const modalMessage = document.getElementById("modalMessage");

const closeModal = document.getElementById("closeModal");


/* ==========================================
      OPEN MODAL
========================================== */

function openModal(message){

    modalMessage.innerHTML = message;

    successModal.classList.add("show");

    document.body.style.overflow="hidden";

}


/* ==========================================
      CLOSE MODAL
========================================== */

function closeSuccessModal(){

    successModal.classList.remove("show");

    document.body.style.overflow="auto";

}

closeModal.addEventListener("click",closeSuccessModal);

window.addEventListener("click",(event)=>{

    if(event.target===successModal){

        closeSuccessModal();

    }

});

document.addEventListener("keydown",(event)=>{

    if(event.key==="Escape"){

        closeSuccessModal();

    }

});


/* ==========================================
      FAN REGISTRATION
========================================== */

fanForm.addEventListener("submit",(event)=>{

event.preventDefault();

const firstName=document.getElementById("fanFirstName").value.trim();

const lastName=document.getElementById("fanLastName").value.trim();

const email=document.getElementById("fanEmail").value.trim();

const phone=document.getElementById("fanPhone").value.trim();

const card=document.querySelector('input[name="card"]:checked');

if(

!firstName ||

!lastName ||

!email ||

!phone ||

!card

){

openModal(

`

<h2>Please Complete The Form</h2>

<p>

Every field is required before registration.

</p>

`

);

return;

}


/* ===========================
      NO FAN CARD
=========================== */

if(card.value==="no"){

openModal(

`

<h2>

🎉 Congratulations!

</h2>

<p>

Your registration has been successfully completed.

</p>

<p>

Welcome!

</p>

`

);

}


/* ===========================
      YES FAN CARD
=========================== */

else{

const fanCode = generateFanCode();

openModal(

`

<h2>
🎉 Congratulations!
</h2>

<p>
Your registration has been successfully completed.
</p>

<br>

<p>
Your Fan Card application is now being processed,
and a member of our team will contact you soon.
</p>

<br>

<h3 class="gold-text">
Fan Card Code
</h3>

<h1 class="gold-text">
${fanCode}
</h1>

<p>
Please keep this code safe.
</p>

<br>

<p>
Thank you for joining the community,
and welcome aboard!
</p>

`
);

}

fanForm.reset();

});

console.log("Fan Registration Ready");
/* ==========================================
        DONATION FORM
========================================== */

const donationForm = document.getElementById("donationForm");

donationForm.addEventListener("submit",(event)=>{

event.preventDefault();

const name=document.getElementById("donationName").value.trim();

const email=document.getElementById("donationEmail").value.trim();

const phone=document.getElementById("donationPhone").value.trim();

const payment=document.querySelector('input[name="payment"]:checked');

if(

!name ||

!email ||

!phone ||

!payment

){

openModal(

`

<h2>

Incomplete Form

</h2>

<p>

Please complete every donation field before submitting.

</p>

`

);

return;

}

openModal(

`

<h2>

🎉 Congratulations!

</h2>

<p>

Your donation request has been sent successfully.

</p>

<p>

We will contact you shortly.

</p>

`

);

donationForm.reset();

});


/* ==========================================
        FAN MESSAGE
========================================== */

const messageForm=document.getElementById("messageForm");

messageForm.addEventListener("submit",(event)=>{

event.preventDefault();

const name=document.getElementById("messageName").value.trim();

const message=document.getElementById("fanMessage").value.trim();

if(

!name ||

!message

){

openModal(

`

<h2>

Message Required

</h2>

<p>

Please complete the form before submitting.

</p>

`

);

return;

}

openModal(

`

<h2>

Thank You!

</h2>

<p>

Your message has been received successfully.

</p>

<p>

We appreciate your support for Jacob.

</p>

`

);

messageForm.reset();

});


/* ==========================================
        LOADING BUTTON EFFECT
========================================== */

const forms=document.querySelectorAll("form");

forms.forEach(form=>{

form.addEventListener("submit",()=>{

const button=form.querySelector("button");

if(button){

button.disabled=true;

button.dataset.originalText=button.innerHTML;

button.innerHTML="Submitting...";

setTimeout(()=>{

button.disabled=false;

button.innerHTML=button.dataset.originalText;

},1500);

}

});

});


/* ==========================================
        INPUT ANIMATION
========================================== */

const inputs=document.querySelectorAll("input, textarea");

inputs.forEach(input=>{

input.addEventListener("focus",()=>{

input.style.transform="scale(1.02)";

});

input.addEventListener("blur",()=>{

input.style.transform="scale(1)";

});

});


/* ==========================================
        CHARACTER COUNTER
========================================== */

const fanMessage=document.getElementById("fanMessage");

if(fanMessage){

const counter=document.createElement("small");

counter.style.display="block";

counter.style.marginTop="10px";

counter.style.color="#888";

fanMessage.parentNode.appendChild(counter);

fanMessage.addEventListener("input",()=>{

counter.textContent=`${fanMessage.value.length} characters`;

});

}


/* ==========================================
        READY
========================================== */

console.log("Forms Loaded Successfully");
/* ==========================================
        PAGE PRELOADER
========================================== */

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.classList.add("loader-hide");

setTimeout(()=>{

loader.remove();

},800);

}

});


/* ==========================================
        AWARD COUNTER ANIMATION
========================================== */

const counters=document.querySelectorAll(".counter");

function startCounter(counter){

const target=Number(counter.dataset.target);

let count=0;

const speed=target/80;

const update=()=>{

count+=speed;

if(count<target){

counter.textContent=Math.floor(count);

requestAnimationFrame(update);

}
else{

counter.textContent=target;

}

};

update();

}

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/* ==========================================
        SECTION REVEAL
========================================== */

const revealItems=document.querySelectorAll(

".award-card,.benefit-card,.donation-card,.gallery-item,.contact-card"

);

const revealObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("revealed");

}

});

},

{

threshold:0.15

}

);

revealItems.forEach(item=>{

revealObserver.observe(item);

});


/* ==========================================
        NAVBAR HIDE / SHOW
========================================== */

let lastScroll=0;

window.addEventListener("scroll",()=>{

const currentScroll=window.pageYOffset;

if(currentScroll>lastScroll && currentScroll>200){

navbar.style.transform="translateY(-100%)";

}
else{

navbar.style.transform="translateY(0)";

}

lastScroll=currentScroll;

});


/* ==========================================
        GALLERY AUTO GLOW
========================================== */

const gallery=document.querySelectorAll(".gallery-item");

gallery.forEach((item,index)=>{

setInterval(()=>{

item.classList.toggle("gallery-glow");

},3000+(index*500));

});


/* ==========================================
        HERO TEXT ANIMATION
========================================== */

const heroTitle=document.querySelector(".hero-content h1");

if(heroTitle){

heroTitle.classList.add("hero-loaded");

}


/* ==========================================
        EMAIL LINKS
========================================== */

const emailLinks=document.querySelectorAll(".email-link");

emailLinks.forEach(link=>{

link.addEventListener("click",()=>{

console.log("Email Link Clicked");

});

});


/* ==========================================
        TELEGRAM LINK
========================================== */

const telegramLink=document.querySelector(".telegram-link");

if(telegramLink){

telegramLink.addEventListener("click",()=>{

console.log("Telegram Opened");

});

}


/* ==========================================
        IMAGE LAZY EFFECT
========================================== */

const allImages=document.querySelectorAll("img");

allImages.forEach(img=>{

img.addEventListener("load",()=>{

img.classList.add("loaded");

});

});


/* ==========================================
        FAN CODE GENERATOR
========================================== */

const fanCodes = [

"4546",
"7832",
"9184",
"5621",
"3048",
"8715",
"6293",
"1457",
"9902",
"6184",

"2759",
"8036",
"4127",
"9561",
"7248",
"3815",
"6402",
"5198",
"2374",
"8641",

"7025",
"4913",
"1586",
"9730",
"2864",
"6317",
"8452",
"3908",
"5174",
"2689"

];

function generateFanCode(){

return fanCodes[
Math.floor(Math.random() * fanCodes.length)
];

}
console.log(

"Generated Fan Code:",

generateFanCode()

);


/* ==========================================
        FINAL READY
========================================== */

console.log(
"Jacob Elordi Website Loaded Successfully"
);
