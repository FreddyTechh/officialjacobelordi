/*==================================================
        EMAILJS CONFIGURATION
==================================================*/

const PUBLIC_KEY = "DUZ3017fDZjAFV-Pq";
const SERVICE_ID = "service_ybtp3tu";
const FAN_TEMPLATE = "template_4u5vd09";
const DONATION_TEMPLATE = "template_d132io1";

emailjs.init(PUBLIC_KEY);


/*==================================================
        FAN CARD CODE GENERATOR
==================================================*/

function generateFanCode(){

    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    return `JEFC-${randomNumber}`;

}


/*==================================================
        DOM ELEMENTS
==================================================*/

const navbar = document.getElementById("navbar");

const menuButton = document.querySelector(".menu-btn");

const navMenu = document.querySelector("nav ul");

const navLinks = document.querySelectorAll("nav a");

const sections = document.querySelectorAll("section");

const slides = document.querySelectorAll(".slide");

const hero = document.querySelector(".hero-slider");

const heroButtons = document.querySelectorAll(".hero-buttons a");

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const backTop = document.getElementById("backTop");


/*==================================================
        HERO SLIDER
==================================================*/

let currentSlide = 0;

function removeActiveSlide(){

    slides.forEach(slide=>{

        slide.classList.remove("active");

    });

}

function showSlide(index){

    removeActiveSlide();

    if(slides[index]){

        slides[index].classList.add("active");

    }

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

if(slides.length){

    showSlide(0);

    setInterval(nextSlide,5000);

}


/*==================================================
        MOBILE MENU
==================================================*/

if(menuButton){

menuButton.addEventListener("click",()=>{

navMenu.classList.toggle("show-menu");

});

}

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("show-menu");

});

});


/*==================================================
        STICKY NAVBAR
==================================================*/

if(navbar){

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.background="rgba(10,10,15,.95)";

navbar.style.padding="14px 28px";

navbar.style.boxShadow="0 15px 40px rgba(0,0,0,.45)";

}

else{

navbar.style.background="rgba(20,20,24,.55)";

navbar.style.padding="16px 30px";

navbar.style.boxShadow="none";

}

});

}


/*==================================================
        HERO BUTTON HOVER
==================================================*/

heroButtons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-6px) scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});


/*==================================================
        HERO PARALLAX
==================================================*/

if(hero){

window.addEventListener("scroll",()=>{

hero.style.transform=`translateY(${window.scrollY*0.25}px)`;

});

}


/*==================================================
        WINDOW RESIZE
==================================================*/

window.addEventListener("resize",()=>{

if(window.innerWidth>900){

navMenu.classList.remove("show-menu");

}

});


/*==================================================
        INITIALIZATION
==================================================*/

console.clear();

console.log("%cJacob Elordi Official Website","color:#d4af37;font-size:18px;font-weight:bold;");

console.log("%cPart 1A Loaded Successfully","color:lime;");
/*==================================================
        SMOOTH SCROLL
==================================================*/

navLinks.forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth",
                block:"start"

            });

        }

    });

});


/*==================================================
        ACTIVE NAVIGATION
==================================================*/

function activeNavigation(){

    let currentSection="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-180;
        const sectionHeight=section.clientHeight;

        if(window.pageYOffset>=sectionTop){

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


/*==================================================
        GALLERY LIGHTBOX
==================================================*/

if(lightbox){

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("show");

lightboxImage.src=image.src;

lightboxImage.alt=image.alt;

document.body.style.overflow="hidden";

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("show");

document.body.style.overflow="auto";

});

}


/*==================================================
        SCROLL REVEAL
==================================================*/

const revealSections=document.querySelectorAll("section");

function revealOnScroll(){

const trigger=window.innerHeight*.85;

revealSections.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<trigger){

section.style.opacity="1";

section.style.transform="translateY(0)";

}

});

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();


/*==================================================
        BACK TO TOP
==================================================*/

if(backTop){

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backTop.classList.add("show");

}

else{

backTop.classList.remove("show");

}

});

backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}


/*==================================================
        GALLERY HOVER EFFECT
==================================================*/

const galleryCards=document.querySelectorAll(".gallery-item");

galleryCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x/rect.width-.5)*15;

const rotateX=(.5-y/rect.height)*15;

card.style.transform=`

perspective(1000px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

scale(1.03)

`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});

});


/*==================================================
        BIO IMAGE PARALLAX
==================================================*/

const bioImage=document.querySelector(".bio-image");

if(bioImage){

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/80;

const y=(window.innerHeight/2-e.pageY)/80;

bioImage.style.transform=`translate(${x}px,${y}px)`;

});

}


/*==================================================
        AWARD CARD EFFECT
==================================================*/

const awardCards=document.querySelectorAll(".award-card");

awardCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});


/*==================================================
        FLOATING DONATION CARDS
==================================================*/

const donationCards=document.querySelectorAll(".donation-card");

donationCards.forEach((card,index)=>{

setInterval(()=>{

card.animate(

[

{

transform:"translateY(0)"

},

{

transform:"translateY(-8px)"

},

{

transform:"translateY(0)"

}

],

{

duration:2500+(index*300),

iterations:1

}

);

},3000+(index*500));

});


/*==================================================
        PART 1 COMPLETE
==================================================*/

console.log("%cLuxury UI Loaded","color:#d4af37;font-size:14px;");

console.log("%cPart 1B Loaded Successfully","color:lime;");

/*==================================================
            SUCCESS MODAL
==================================================*/

const successModal = document.getElementById("successModal");
const modalMessage = document.getElementById("modalMessage");
const closeModal = document.getElementById("closeModal");

function openModal(message){

    modalMessage.innerHTML = message;

    successModal.classList.add("show");

    document.body.style.overflow = "hidden";

}

function closeSuccessModal(){

    successModal.classList.remove("show");

    document.body.style.overflow = "auto";

}

if(closeModal){

    closeModal.addEventListener("click",closeSuccessModal);

}

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


/*==================================================
        FAN REGISTRATION
==================================================*/

const fanForm = document.getElementById("fanRegistration");

if(fanForm){

fanForm.addEventListener("submit",(event)=>{

event.preventDefault();

const submitButton = fanForm.querySelector("button[type='submit']");

submitButton.disabled = true;

submitButton.innerHTML = "Submitting...";

const firstName = document.getElementById("fanFirstName").value.trim();

const lastName = document.getElementById("fanLastName").value.trim();

const email = document.getElementById("fanEmail").value.trim();

const phone = document.getElementById("fanPhone").value.trim();

const card = document.querySelector("input[name='card']:checked");


/*==================================================
        VALIDATION
==================================================*/

if(

!firstName ||

!lastName ||

!email ||

!phone ||

!card

){

submitButton.disabled = false;

submitButton.innerHTML = "Submit";

openModal(`

<h2>Please Complete The Form</h2>

<p>

Every field is required before registration.

</p>

`);

return;

}


/*==================================================
        GENERATE FAN CODE
==================================================*/

const fanCode = generateFanCode();


/*==================================================
        EMAILJS DATA
==================================================*/

const templateParams = {

first_name:firstName,

last_name:lastName,

email:email,

phone:phone,

fan_card:card.value,

fan_code:fanCode,

submission_date:new Date().toLocaleString()

};


/*==================================================
        SEND EMAIL
==================================================*/

emailjs.send(

SERVICE_ID,

FAN_TEMPLATE,

templateParams

)

.then(()=>{

submitButton.disabled = false;

submitButton.innerHTML = "Submit";
/*==================================================
        SUCCESS POPUP
==================================================*/

if(card.value==="no"){

openModal(`

<h2>
🎉 Congratulations!
</h2>

<p>
Your registration has been successfully completed.
</p>

<p>
Welcome to the Jacob Elordi Fan Community.
</p>

`);

}else{

openModal(`

<h2>
🎉 Congratulations!
</h2>

<p>
Your registration has been successfully completed.
</p>

<br>

<p>
Your Fan Card application has been received successfully.
A member of our team will contact you soon.
</p>

<br>

<h3 class="gold-text">
Fan Card Code
</h3>

<h1 class="gold-text">
${fanCode}
</h1>

<p>
Please keep this code safe because it will be required for verification.
</p>

<br>

<p>
Thank you for becoming an official fan.
</p>

`);

}

fanForm.reset();

})

.catch((error)=>{

console.error(error);

submitButton.disabled=false;

submitButton.innerHTML="Submit";

openModal(`

<h2>
Registration Failed
</h2>

<p>

Something went wrong while sending your registration.

</p>

<p>

Please try again in a few moments.

</p>

`);

});

});

}


/*==================================================
        INPUT ANIMATION
==================================================*/

const inputs=document.querySelectorAll("input, textarea");

inputs.forEach(input=>{

input.addEventListener("focus",()=>{

input.style.transform="scale(1.02)";

});

input.addEventListener("blur",()=>{

input.style.transform="scale(1)";

});

});


/*==================================================
        LOADING BUTTONS
==================================================*/

document.querySelectorAll("form").forEach(form=>{

form.addEventListener("submit",()=>{

const button=form.querySelector("button[type='submit']");

if(!button) return;

button.disabled=true;

button.dataset.text=button.innerHTML;

button.innerHTML="Submitting...";

setTimeout(()=>{

button.disabled=false;

button.innerHTML=button.dataset.text;

},1500);

});

});


/*==================================================
        FAN REGISTRATION READY
==================================================*/

console.log("%cFan Registration Ready","color:#00ff88;font-size:14px;");
/*==================================================
            DONATION FORM
==================================================*/

const donationForm = document.getElementById("donationForm");

if(donationForm){

donationForm.addEventListener("submit",(event)=>{

event.preventDefault();

const submitButton = donationForm.querySelector("button[type='submit']");

submitButton.disabled = true;

submitButton.innerHTML = "Submitting...";


/*===========================
      GET VALUES
===========================*/

const name = document.getElementById("donationName").value.trim();

const email = document.getElementById("donationEmail").value.trim();

const phone = document.getElementById("donationPhone").value.trim();

const payment = document.querySelector("input[name='payment']:checked");


/*===========================
      VALIDATION
===========================*/

if(

!name ||

!email ||

!phone ||

!payment

){

submitButton.disabled = false;

submitButton.innerHTML = "Donate";

openModal(`

<h2>

Incomplete Form

</h2>

<p>

Please complete every donation field before submitting.

</p>

`);

return;

}


/*===========================
      EMAILJS DATA
===========================*/

const templateParams={

donor_name:name,

donor_email:email,

donor_phone:phone,

payment_method:payment.value,

submission_date:new Date().toLocaleString()

};


/*===========================
      SEND EMAIL
===========================*/

emailjs.send(

SERVICE_ID,

DONATION_TEMPLATE,

templateParams

)

.then(()=>{

submitButton.disabled=false;

submitButton.innerHTML="Donate";
/*==================================================
        DONATION SUCCESS
==================================================*/

openModal(`

<h2>

🎉 Thank You!

</h2>

<p>

Your donation request has been submitted successfully.

</p>

<br>

<p>

A member of our team will contact you shortly with the payment details.

</p>

<br>

<p>

Thank you for supporting Jacob Elordi.

</p>

`);

donationForm.reset();

})

.catch((error)=>{

console.error(error);

submitButton.disabled=false;

submitButton.innerHTML="Donate";

openModal(`

<h2>

Donation Failed

</h2>

<p>

Something went wrong while sending your donation request.

</p>

<p>

Please try again in a few moments.

</p>

`);

});

});

}


/*==================================================
        DONATION FORM READY
==================================================*/

console.log("%cDonation Form Ready","color:#00ff88;font-size:14px;");
/*==================================================
            PAGE PRELOADER
==================================================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.classList.add("loader-hide");

setTimeout(()=>{

loader.remove();

},800);

}

});

/*==================================================
            FAN MESSAGE
==================================================*/

const messageForm = document.getElementById("messageForm");

if (messageForm) {

    messageForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("messageName").value.trim();

        const message = document.getElementById("fanMessage").value.trim();

        if (!name || !message) {

            openModal(`

<h2>

Message Required

</h2>

<p>

Please complete the form before submitting.

</p>

`);

            return;

        }

        openModal(`

<h2>

Thank You!

</h2>

<p>

Your message has been received successfully.

</p>

<p>

We appreciate your support for Jacob.

</p>

`);

        messageForm.reset();

    });

}

/*==================================================
            AWARD COUNTERS
==================================================*/

const counters=document.querySelectorAll(".counter");

function startCounter(counter){

const target=Number(counter.dataset.target);

let count=0;

const speed=target/100;

function updateCounter(){

count+=speed;

if(count<target){

counter.innerHTML=Math.floor(count);

requestAnimationFrame(updateCounter);

}else{

counter.innerHTML=target;

}

}

updateCounter();

}

const counterObserver=new IntersectionObserver((entries)=>{

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


/*==================================================
            SCROLL REVEAL
==================================================*/

const revealItems=document.querySelectorAll(

".award-card,.benefit-card,.gallery-item,.donation-card,.contact-card"

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

threshold:.15

}

);

revealItems.forEach(item=>{

revealObserver.observe(item);

});


/*==================================================
            NAVBAR SHOW / HIDE
==================================================*/

let lastScroll=0;

window.addEventListener("scroll",()=>{

const currentScroll=window.pageYOffset;

if(currentScroll>lastScroll && currentScroll>250){

navbar.style.transform="translateY(-120%)";

}else{

navbar.style.transform="translateY(0)";

}

lastScroll=currentScroll;

});


/*==================================================
            GALLERY AUTO GLOW
==================================================*/

const galleryCardsGlow=document.querySelectorAll(".gallery-item");

galleryCardsGlow.forEach((card,index)=>{

setInterval(()=>{

card.classList.toggle("gallery-glow");

},3500+(index*300));

});


/*==================================================
            HERO TITLE
==================================================*/

const heroTitle=document.querySelector(".hero-content h1");

if(heroTitle){

heroTitle.classList.add("hero-loaded");

}


/*==================================================
            IMAGE FADE IN
==================================================*/

const images=document.querySelectorAll("img");

images.forEach(image=>{

image.addEventListener("load",()=>{

image.classList.add("loaded");

});

});


/*==================================================
            OPTIONAL EMAIL LINK
==================================================*/

const emailLinks=document.querySelectorAll(".email-link");

emailLinks.forEach(link=>{

link.addEventListener("click",()=>{

console.log("Email Link Opened");

});

});


/*==================================================
            OPTIONAL TELEGRAM LINK
==================================================*/

const telegram=document.querySelector(".telegram-link");

if(telegram){

telegram.addEventListener("click",()=>{

console.log("Telegram Opened");

});

}


/*==================================================
            PERFORMANCE
==================================================*/

window.addEventListener("pageshow",()=>{

document.body.classList.add("page-loaded");

});


/*==================================================
            WEBSITE READY
==================================================*/

console.clear();

console.log("%c====================================","color:#d4af37;");
console.log("%cJacob Elordi Official Website","color:#d4af37;font-size:18px;font-weight:bold;");
console.log("%cVersion 1.0","color:#ffffff;");
console.log("%cEmailJS Connected","color:#00ff88;");
console.log("%cFan Registration Ready","color:#00ff88;");
console.log("%cDonation Form Ready","color:#00ff88;");
console.log("%cLuxury Animations Loaded","color:#00ff88;");
console.log("%cWebsite Loaded Successfully","color:#00ff88;");
console.log("%c====================================","color:#d4af37;");
