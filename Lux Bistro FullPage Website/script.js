//Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})

//Back to Top Button Visibility
window.addEventListener('scroll', () => {
    const backToTop = document.querySelector('.back-to-top-btn')
    if (window.scrollY > 300) {
        console.log(scrollY)
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
})
