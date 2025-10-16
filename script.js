const pages = document.querySelectorAll('.page');
const homeLink = document.getElementById('homeLink');
const aboutLink = document.getElementById('aboutLink');
const backBtn = document.getElementById('backBtn');
const yearEl = document.getElementById('year');

const articles = [
  {
    title: "The Art of Simplicity",
    content: "<p>Simplicity is the ultimate sophistication...</p>"
  },
  {
    title: "Focus in a Distracted World",
    content: "<p>In a world filled with noise, true focus is rare...</p>"
  },
  {
    title: "Designing Without Color",
    content: "<p>Sometimes grayscale can speak louder than colors...</p>"
  }
]

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function showPage(id) {
  pages.forEach(page => {
    page.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

homeLink.onclick = () => showPage('homePage');
aboutLink.onclick = () => showPage('aboutPage');
backBtn.onclick = () => showPage('homePage');

function openArticle(index) {
  const article = articles[index];
  const content = document.getElementById('articleContent');
  content.innerHTML = `<h2>${article.title}</h2>${article.content}`;
  showPage('articlePage');
}
