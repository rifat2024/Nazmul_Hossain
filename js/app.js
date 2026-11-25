const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');

function openMenu () {
    mobileMenu.classList.remove('translate-x-full');
    menuOverlay.classList.remove('opacity-0','invisible');
    menuToggle.setAttribute('aria-expanded','true')
}

function closeMobileMenu () {
    mobileMenu.classList.add('translate-x-full');
    menuOverlay.classList.add('opacity-0','invisible');
    menuToggle.setAttribute('aria-expanded','false');
}

menuToggle.addEventListener('click',openMenu);
closeMenu.addEventListener('click',closeMobileMenu);
menuOverlay.addEventListener('click',closeMobileMenu);


const mobileLinks = mobileMenu.querySelectorAll('a');

mobileLinks.forEach((link)=>{
    link.addEventListener('click',closeMobileMenu);
})



// theme toggle

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// load save theme

const saveTheme = localStorage.getItem('theme');

// default theme dark

if(saveTheme === 'light'){
    document.documentElement.classList.remove('dark');
    themeIcon.textContent = '🌙';
}else{
    document.documentElement.classList.add('dark');
    themeIcon.textContent = '☀️'
}

themeToggle.addEventListener('click',function(){
    document.documentElement.classList.toggle('dark');

    const isDark = document.documentElement.classList.contains('dark');

    if(isDark){
        localStorage.setItem('theme','dark');
        themeIcon.textContent = '☀️'
    }else{
        localStorage.setItem('theme','light');
        themeIcon.textContent = '🌙';
    }

})


// image gallery lightbox

const gallery = document.getElementById('gallery');
const lightBox = document.getElementById('imageLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeLightbox = document.getElementById('closeLightbox');

// open image

gallery.addEventListener('click',function(e){
    const image = e.target.closest('img');

    if(!image){
        return;
    }

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    lightBox.classList.remove('hidden');
    lightBox.classList.add('flex');

    document.body.style.overflow = 'hidden';

})

// close image

function hideLightBox () {
    lightBox.classList.add('hidden');
    lightBox.classList.remove('flex');

    lightboxImage.src = '';
    document.body.style.overflow = '';
}

// close button

closeLightbox.addEventListener('click',hideLightBox);

// click outside image

lightBox.addEventListener('click',function(e){
    if(e.target === lightBox){
        hideLightBox();
    }
})

// escape key

document.addEventListener('keydown',function(e){
    if(e.key === 'Escape' && !lightBox.classList.contains('hidden')){
        hideLightBox();
    }
})


// Contact Form with EmailJS


const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_9v4clqp",
        "template_ji46t2i",
        contactForm
    )
    .then(() => {
        alert("Message sent successfully!");
        contactForm.reset();
    })
    .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Message sending failed. Please try again.");
    });
});





// EmailJS Initialize
emailjs.init({
    publicKey: "Cd7SDQ_4ZysshhePW",
});


