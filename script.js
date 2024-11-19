

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
