// Smooth Scroll functionality
document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);

        window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjust for some header space
            behavior: 'smooth'
        });
    });
});

document.body.addEventListener('mousemove', function(e) {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    document.body.style.setProperty('--mouse-x', `${x}%`);
    document.body.style.setProperty('--mouse-y', `${y}%`);
});


// Flip Card on Click
function flipCard(card) {
    const cardInner = card.querySelector('.flip-card-inner');
    card.classList.toggle('flipped'); // Toggle the 'flipped' class on the card
}

// Button Animation
function animateButton(button) {
    button.classList.add('animate');
    setTimeout(() => {
        button.classList.remove('animate');
    }, 500);
}

// Typewriter Effect
const typewriterText = "Hello and welcome! Explore my creative journey as a UI/UX designer and frontend developer.";
let index = 0;

function typeWriterEffect() {
    if (index < typewriterText.length) {
        document.getElementById("typewriter-text").textContent += typewriterText.charAt(index);
        index++;
        setTimeout(typeWriterEffect, 100); // Adjust speed by changing the timeout duration
    } else {
        document.getElementById("typewriter-text").style.width = 'auto';
    }
}

// Start the typewriter effect after the page loads
window.onload = function() {
    typeWriterEffect();
};

// Modal Functionality
function openModal() {
    const modal = document.getElementById("contactModal");
    modal.style.display = "block"; // Show modal
}

function closeModal() {
    const modal = document.getElementById("contactModal");
    modal.style.display = "none"; // Hide modal
}

// Add click event to the contact button
document.querySelector('.contact-button').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    openModal(); // Open modal
});

// Close the modal if the user clicks anywhere outside the modal
window.onclick = function(event) {
    const modal = document.getElementById("contactModal");
    if (event.target === modal) {
        modal.style.display = "none"; // Close modal
    }
}
