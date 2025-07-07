const noBtn = document.getElementById('noBtn');
const questionContainer = document.getElementById('questionContainer');
const successMessage = document.getElementById('successMessage');

// Handle mouseover and touchstart for "No" button
['mouseover', 'touchstart'].forEach(event => {
    noBtn.addEventListener(event, function(e) {
        e.preventDefault();
        const maxX = window.innerWidth - noBtn.offsetWidth - 20;
        const maxY = window.innerHeight - noBtn.offsetHeight - 20;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    });
});

// Handle "Yes" button click
document.getElementById('yesBtn').addEventListener('click', function() {
    questionContainer.style.display = 'none';
    successMessage.style.display = 'block';
    noBtn.style.display = 'none'; // Hide "No" button after "Yes" is clicked
});

// Ensure buttons are touch-friendly on mobile
noBtn.addEventListener('touchmove', function(e) {
    e.preventDefault(); // Prevent scrolling on touch
});