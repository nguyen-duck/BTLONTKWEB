function showSubnav() {
    const subnav = document.querySelector('.subnav')
    subnav.style.display = 'flex'
}

function hideSubnav() {
    const subnav = document.querySelector('.subnav')
    subnav.style.display = 'none'
}

var togglePrNav = 1;
function showPrNavBg() {
    if(togglePrNav == 1) {
        document.querySelector('.prnavbg').style.display = 'flex'
        togglePrNav = 0;
        event.preventDefault();
    }
    else if(togglePrNav == 0) {
        document.querySelector('.prnavbg').style.display = 'none'
        togglePrNav = 1;
        event.preventDefault();
    }
}

const secAll = document.querySelector('.sec-all');
const secSedan = document.querySelector('.sec-sedan');
const secSUV = document.querySelector('.sec-SUV');
const secHatchback = document.querySelector('.sec-hatchback');
const secCoupe = document.querySelector('.sec-coupe');

const Sedan = document.querySelector('.sedan');
const SUV = document.querySelector('.SUV');
const Hatchback = document.querySelector('.hatchback');
const Coupe = document.querySelector('.coupe');

var highlight = document.querySelector('.hl');

highlight.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link
    this.classList.toggle('special-white'); 
});

document.querySelector('.hl').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link
    Hatchback.style.display = 'none'
    Sedan.style.display = 'flex'
    SUV.style.display = 'none'
    Coupe.style.display = 'none'
    secSedan.classList.add('special-black'); // Toggle the 'colored' class
    secSUV.classList.remove('special-black');
    secCoupe.classList.remove('special-black');
    secHatchback.classList.remove('special-black');
    secAll.classList.remove('special-black');
    document.querySelector('.alll').classList.remove('bigshow');
    document.querySelector('.alll').style.display = 'none'
});

document.querySelector('.sec-sedan').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link
    this.classList.add('special-black'); // Toggle the 'colored' class
    secSUV.classList.remove('special-black');
    secCoupe.classList.remove('special-black');
    secHatchback.classList.remove('special-black');
    secAll.classList.remove('special-black');
    document.querySelector('.prnav').classList.remove('showAll');
});

document.querySelector('.sec-SUV').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link
    this.classList.add('special-black'); // Toggle the 'colored' class
    secSedan.classList.remove('special-black');
    secCoupe.classList.remove('special-black');
    secHatchback.classList.remove('special-black');
    secAll.classList.remove('special-black');
    document.querySelector('.prnav').classList.remove('showAll');
});

document.querySelector('.sec-coupe').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link
    this.classList.add('special-black'); // add the 'colored' class
    secSUV.classList.remove('special-black');
    secSedan.classList.remove('special-black');
    secHatchback.classList.remove('special-black');
    secAll.classList.remove('special-black');
    document.querySelector('.prnav').classList.remove('showAll');
});

document.querySelector('.sec-hatchback').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link
    this.classList.add('special-black'); // add the 'colored' class
    secSUV.classList.remove('special-black');
    secCoupe.classList.remove('special-black');
    secSedan.classList.remove('special-black');
    secAll.classList.remove('special-black');
    document.querySelector('.prnav').classList.remove('showAll');
});

function showHatchback() {
    event.preventDefault();
    Hatchback.style.display = 'flex'
    Sedan.style.display = 'none'
    SUV.style.display = 'none'
    Coupe.style.display = 'none'
    document.querySelector('.showcaseAll').style.display = 'flex'
    document.querySelector('.alll').classList.remove('bigshow');
    document.querySelector('.alll').style.display = 'none'
}

function showSUV() {
    event.preventDefault();
    Hatchback.style.display = 'none'
    Sedan.style.display = 'none'
    SUV.style.display = 'flex'
    Coupe.style.display = 'none'
    document.querySelector('.showcaseAll').style.display = 'flex'
    document.querySelector('.alll').classList.remove('bigshow');
    document.querySelector('.alll').style.display = 'none'
}

function showCoupe() {
    event.preventDefault();
    Hatchback.style.display = 'none'
    Sedan.style.display = 'none'
    SUV.style.display = 'none'
    Coupe.style.display = 'flex'
    document.querySelector('.showcaseAll').style.display = 'flex'
    document.querySelector('.alll').classList.remove('bigshow');
    document.querySelector('.alll').style.display = 'none'
}

function showSedan() {
    event.preventDefault();
    Hatchback.style.display = 'none'
    Sedan.style.display = 'flex'
    SUV.style.display = 'none'
    Coupe.style.display = 'none'
    document.querySelector('.showcaseAll').style.display = 'flex'
    document.querySelector('.alll').classList.remove('bigshow');
    document.querySelector('.alll').style.display = 'none'
}

function showAll() {
    event.preventDefault();
    document.querySelector('.prnav').classList.add('showAll');
    Hatchback.style.display = 'flex'
    Sedan.style.display = 'flex'
    SUV.style.display = 'flex'
    Coupe.style.display = 'flex'
    secHatchback.classList.remove('special-black'); 
    secSUV.classList.remove('special-black');
    secCoupe.classList.remove('special-black');
    secSedan.classList.remove('special-black');
    secAll.classList.add('special-black');
    document.querySelector('.showcaseAll').style.display = 'none'
    document.querySelector('.alll').classList.add('bigshow');
    document.querySelector('.alll').style.display = 'flex'
    
}










function successEmail() {
    const success = document.querySelector('.thank')
    const alert = document.querySelector('.alert')
    if( document.getElementById('email').value === '' ){
        alert.style.display = 'block'
        success.style.display = 'none'
    }
    else {
        success.style.display = 'block'
        alert.style.display = 'none'
    }
}





const form = document.querySelector('form'); 
form.addEventListener('text', function(event) { 
    event.preventDefault(); 
}); 

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("vid");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 33000);
}
