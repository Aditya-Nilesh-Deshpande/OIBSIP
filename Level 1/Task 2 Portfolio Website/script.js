
// Toggle Icon navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//------Making That section active which is currently displayed------
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll= ()=>{
    sections.forEach( sec =>{

        console.log(sec);

        let topp=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(topp>=offset && topp<offset+height){
            navLinks.forEach( links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }

    })
}

// Sticky navbar
let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100);


//Remove Toggle Icon and navbar (Removing Toggle Effect)
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

//Scroll reaveal Effect Animation as page reloads
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top'});
ScrollReveal().reveal('.skills-container, .portfolio-box,.contact form' , { origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img' , { origin:'left'});
ScrollReveal().reveal('.home-img,.home-content p, .about-content' , { origin:'right'});


//Typed Js (Role changes dynamically)
const typed=new Typed('.multiple-text',{
    strings:['Front-End Developer','Problem Solver','Team Player'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
