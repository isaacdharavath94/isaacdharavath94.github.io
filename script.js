function showMessage() {
    document.getElementById("message").innerHTML =
        "❤️ I Love You Forever ❤️";
}

const startDate = new Date("2025-01-01");

function updateTimer() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("timer").innerHTML =
        "❤️ Together for " + days + " Days ❤️";
}

updateTimer();

setInterval(updateTimer, 1000);
