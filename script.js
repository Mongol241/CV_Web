var GITHUB_USERNAME = 'Mongol241';
var MIN_PROJECTS = 6;


var LANG_COLORS = {
  JavaScript: '#f1e05a', Python: '#3572A5', Java: '#b07219',
  HTML: '#e34c26', CSS: '#563d7c', PHP: '#4F5D95',
  'C++': '#f34b7d', 'C#': '#178600', TypeScript: '#3178c6'
};

// Fetch repos
function fetchRepos() {
  var container = document.getElementById('repo-container');
  if (!container) return;

  container.innerHTML = '<p>Se incarca proiectele...</p>';

  fetch('https://api.github.com/users/' + GITHUB_USERNAME + '/repos?sort=updated&per_page=30')
    .then(function (res) {
      if (!res.ok) throw new Error('Eroare API');
      return res.json();
    })
    .then(function (repos) {
      if (repos.length < MIN_PROJECTS) {
        // Load fallback
        fetch('projects.json')
          .then(function (r) { return r.json(); })
          .then(function (fallback) {
            var needed = MIN_PROJECTS - repos.length;
            var all = repos.concat(fallback.slice(0, needed));
            container.innerHTML = '<p style="color:#666600;background:#ffffcc;border:1px solid #cccc66;padding:8px;margin-bottom:8px;">Au fost gasite putine repo-uri. Se afiseaza si proiecte locale.</p>';
            renderRepos(all, container);
          });
      } else {
        container.innerHTML = '';
        renderRepos(repos, container);
      }
    })
    .catch(function () {
      container.innerHTML = '<p style="color:red;">Nu s-a putut conecta la GitHub API. Se afiseaza proiecte locale.</p>';
      fetch('projects.json')
        .then(function (r) { return r.json(); })
        .then(function (fallback) { renderRepos(fallback, container); });
    });
}

// Render cards
function renderRepos(repos, container) {
  var grid = document.createElement('div');
  grid.className = 'repo-grid';

  for (var i = 0; i < repos.length; i++) {
    var repo = repos[i];
    var color = LANG_COLORS[repo.language] || '#888';
    var desc = repo.description || 'Fara descriere disponibila.';

    var card = document.createElement('div');
    card.className = 'repo-card';
    card.innerHTML =
      '<h3>' + repo.name + '</h3>' +
      '<p class="desc">' + desc + '</p>' +
      '<p class="meta">' +
      '<span class="dot" style="background:' + color + '"></span> ' +
      (repo.language || 'N/A') +
      ' &nbsp; ⭐ ' + (repo.stargazers_count || 0) +
      ' &nbsp; 🍴 ' + (repo.forks_count || 0) +
      '</p>' +
      '<a href="' + repo.html_url + '" target="_blank" class="xp-btn">Deschide pe GitHub</a>';

    grid.appendChild(card);
  }

  container.appendChild(grid);
}


function updateClock() {
  var el = document.getElementById('clock');
  if (!el) return;
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  el.textContent = (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m);
}

setInterval(updateClock, 1000);
updateClock();

// Init
window.onload = function () {
  if (document.getElementById('repo-container')) {
    fetchRepos();
  }
};
