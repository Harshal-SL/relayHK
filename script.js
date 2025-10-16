
const pages = document.querySelectorAll('.page');
const homeLink = document.getElementById('homeLink');
const aboutLink = document.getElementById('aboutLink');
const contactLink = document.getElementById('contactLink');
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
];

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function showPage(id) {
  pages.forEach(page => page.classList.add('hidden'));
  const el = document.getElementById(id);
  if (el) el.classList.remove('hidden');
}

if (homeLink) homeLink.onclick = (e) => { e.preventDefault(); showPage('homePage'); };
if (aboutLink) aboutLink.onclick = (e) => { e.preventDefault(); showPage('aboutPage'); };
if (contactLink) contactLink.onclick = (e) => { e.preventDefault(); showPage('contactPage'); };
if (backBtn) backBtn.onclick = () => showPage('homePage');

function openArticle(index) {
  const article = articles[index];
  const content = document.getElementById('articleContent');
  if (!article || !content) return;
  content.innerHTML = `<h2>${article.title}</h2>${article.content}`;
  showPage('articlePage');
}


const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contactStatus');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.elements['name']?.value.trim() || '';
    const email = contactForm.elements['email']?.value.trim() || '';
    const message = contactForm.elements['message']?.value.trim() || '';

    if (!name || !email || !message) {
      contactStatus.textContent = 'Please fill in all fields.';
      contactStatus.style.color = 'red';
      contactStatus.style.display = 'block';
      return;
    }

    contactStatus.textContent = 'Sending...';
    contactStatus.style.color = '';
    contactStatus.style.display = 'block';

    setTimeout(() => {
      contactStatus.textContent = 'Message sent. Thank you!';
      contactStatus.style.color = 'green';
      contactForm.reset();
    }, 800);
  });
}
