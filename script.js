
function pad(number) {
  return String(number).padStart(2, "0");
}

function updateCountdown() {
  var end = new Date(targetDate).getTime();
  var now = new Date().getTime();
  var distance = end - now;

  var countdown = document.getElementById("countdown");
  var finished = document.getElementById("finished");

  if (distance <= 0) {
    countdown.style.display = "none";
    finished.style.display = "block";
    return;
  }

  document.getElementById("days").textContent =
    pad(Math.floor(distance / (1000 * 60 * 60 * 24)));

  document.getElementById("hours").textContent =
    pad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

  document.getElementById("minutes").textContent =
    pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));

  document.getElementById("seconds").textContent =
    pad(Math.floor((distance % (1000 * 60)) / 1000));
}

updateCountdown();
setInterval(updateCountdown, 1000);
