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

document.querySelector('.hl').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link
    this.classList.toggle('special-white'); // Toggle the 'colored' class
});

document.querySelector('.prnavbg').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link
    document.querySelector('.hl').classList.toggle('special-white'); // Toggle the 'colored' class
});
/*
document.querySelector('.hl').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link
    document.querySelector('.sec-sedan').classList.toggle('special-black'); // Toggle the 'colored' class
});
*/

document.querySelector('.hl').addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".tab-link");
    var contents = document.querySelectorAll(".tab-content");
  
    // Show the first section by default
    contents[0].classList.add("active");
    links[0].classList.add("active-link");
  
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
  
            // Remove active classes from all links and contents
            links.forEach(function(link) {
                link.classList.remove("active-link");
            });
            contents.forEach(function(content) {
                content.classList.remove("active");
            });
  
            // Add active class to clicked link and corresponding content
            link.classList.add("active-link");
            var section = document.querySelector("#" + link.getAttribute("data-section"));
            section.classList.add("active");
        });
    });
});
  








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
