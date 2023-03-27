$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [" Web Developer", "Frontend Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [" Web Developer", "Frontend Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            300:{
                items: 1,
                nav: false
            },
            500:{
                items: 1,
                nav: false
            }
        }
    });
});

function handleSubmit(event) {
   
}



const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();


// CV
document.getElementById("download-btn").addEventListener("click", downloadCV);


function downloadCV() {
    // Replace the file URL below with the URL of your CV file
    const fileUrl = "https://1drv.ms/w/s!AmWFN8fGWZBdpnYMqeQpgJoxobe9?e=tgh5aE";
  
    // Create a temporary anchor element to trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.href = fileUrl;
    downloadLink.download = "CV.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
  