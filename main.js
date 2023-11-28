function updateCountdown() {
  var endDate = new Date("December 31, " + new Date().getFullYear() + " 23:59:59").getTime();
  var now = new Date().getTime();
  var timeRemaining = endDate - now;

  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    days + " jours " + hours + " heures " + minutes + " minutes " + seconds + " secondes";
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();
