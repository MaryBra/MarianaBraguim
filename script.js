// ===== PROJECT DATA =====
const projects = [
  {
    title: 'Remobrag',
    url: 'https://marybra.github.io/remobrag/',
    urlText: 'marybra.github.io/remobrag/',
  },
  {
    title: 'Pri Design',
    url: 'https://marybra.github.io/priDesign/',
    urlText: 'marybra.github.io/priDesign/',
  },
  {
    title: 'Doce Atelier',
    url: 'https://marybra.github.io/doce/',
    urlText: 'marybra.github.io/doce/',
  },
];

// ===== ELEMENTS =====
const cards = document.querySelectorAll('.project-card');
const iframe = document.getElementById('projectFrame');
const urlText = document.getElementById('urlText');
const browserOpen = document.getElementById('browserOpen');

// ===== SWITCH PROJECT =====
function switchProject(index) {
  const project = projects[index];

  // Update iframe source
  iframe.src = project.url;

  // Update URL bar
  urlText.textContent = project.urlText;

  // Update "open in new tab" link
  browserOpen.href = project.url;

  // Update active card
  cards.forEach((card, i) => {
    card.classList.toggle('active', i === index);
    // Toggle live badge
    const top = card.querySelector('.project-card-top');
    const existingBadge = top.querySelector('.project-live');
    if (i === index && !existingBadge) {
      const badge = document.createElement('span');
      badge.className = 'project-live';
      badge.textContent = '● Ao vivo';
      top.appendChild(badge);
    } else if (i !== index && existingBadge) {
      existingBadge.remove();
    }
  });
}

// ===== EVENT LISTENERS =====
cards.forEach((card) => {
  card.addEventListener('click', () => {
    const index = parseInt(card.dataset.index, 10);
    switchProject(index);
  });
});
