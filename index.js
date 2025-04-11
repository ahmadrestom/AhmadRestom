function toggleMenu() {
    document.getElementById("navlist").classList.toggle("active");
  }
window.addEventListener("load", function () {
    setTimeout(function() {
      document.getElementById("loader").style.display = "none"; 
      const mainContent = document.getElementById("main-content");
      mainContent.style.visibility = "visible";
      document.body.classList.add("loaded");
  
    }, 1);
  });

document.addEventListener("DOMContentLoaded", function () {
    const roles = ["Front-end Developer . . .", "Backend-end Developer . . .", "Mobile Developer . . .", "Flutter Developer . . ."];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.querySelector(".typed-text");
    const cursor = document.querySelector(".cursor");

    function typeEffect() {
        const currentWord = roles[index];
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }
        typingElement.textContent = currentWord.substring(0, charIndex);
        cursor.style.visibility = (charIndex < currentWord.length || isDeleting) ? 'visible' : 'hidden';
        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => isDeleting = true, 1000);
        }
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % roles.length;
        }
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
    typeEffect();
});

document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent(`${fname} ${lname}`);
    const body = encodeURIComponent(`${message}\n\nPhone:${phone}\n\nEmail:${email}`);

    const mailtoLink = `mailto:ahmadrestom11@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

});