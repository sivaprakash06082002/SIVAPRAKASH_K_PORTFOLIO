AOS.init({
    duration: 1200, // Animation duration
    easing: 'ease-in-out', // Easing effect
    once: true, // Whether animation should happen only once
});

// JavaScript function to toggle certificate visibility
function toggleCertificate(courseCard) {
    const certificateImage = courseCard.querySelector('.certificate-image');
    if (certificateImage.style.display === 'block') {
        certificateImage.style.display = 'none';
    } else {
        certificateImage.style.display = 'block';
    }
}

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) { // Change 50 to any value for scroll detection
        $('.navbar').addClass('navbar-shrink');
    } else {
        $('.navbar').removeClass('navbar-shrink');
    }
});



