// Countdown Timer
const countdown = document.getElementById('countdown');
const birthday = new Date('2025-01-18T00:00:00');
const audio = new Audio('a.mp3');

function updateCountdown() {
    const now = new Date();
    const diff = birthday - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (diff <= 0) {
        countdown.textContent = "🎉 It's time to celebrate! 🎉";
        clearInterval(countdownInterval);
        document.body.classList.add('celebration');
        audio.play();
    } else {
        countdown.textContent = `🎂 ${days}d ${hours}h ${minutes}m ${seconds}s until the big day! 🎉`;
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

