
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function toggleText() {
    var moreText = document.querySelector('.more-text');
    var btn = document.querySelector('.see-more-btn');

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block";  
        btn.textContent = "Read Less";  
    } else {
        moreText.style.display = "none";  
        btn.textContent = "Read More";  
    }
}
