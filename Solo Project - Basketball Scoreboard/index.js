const scores = { home: 0, guest: 0 };

function formatScore(n) {
  return n < 10 ? `0${n}` : `${n}`;
}

function addPoints(team, points) {
  scores[team] += points;

  const el = document.getElementById(`${team}-score`);
  el.textContent = formatScore(scores[team]);

  // Trigger bump animation
  el.classList.remove('bump');
  void el.offsetWidth; // reflow to restart animation
  el.classList.add('bump');
}

function resetScores() {
  scores.home = 0;
  scores.guest = 0;

  document.getElementById('home-score').textContent = '00';
  document.getElementById('guest-score').textContent = '00';
}