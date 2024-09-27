// Smooth scroll to sections when clicking navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});
let clickCount = 0;

const learnMoreBtn = document.getElementById('learn-more-btn');

learnMoreBtn.addEventListener('click', () => {
    clickCount++;

    // Change button text after first click
    if (clickCount === 1) {
        learnMoreBtn.textContent = `Klikket ${clickCount} gang`;
    } else {
        learnMoreBtn.textContent = `Klikket ${clickCount} ganger`;
    }
});


// FAQ Accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function () {
        const answer = this.nextElementSibling;

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});
