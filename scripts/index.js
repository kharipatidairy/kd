const hamburger=document.getElementById("hamburger"),navLinks=document.getElementById("nav-links");function toggleText(){var e=document.querySelector(".more-text"),t=document.querySelector(".see-more-btn");"none"===e.style.display||""===e.style.display?(e.style.display="block",t.textContent="Read Less"):(e.style.display="none",t.textContent="Read More")}hamburger.addEventListener("click",()=>{navLinks.classList.toggle("active")});
