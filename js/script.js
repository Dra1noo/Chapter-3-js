// Typed.js effect
const typed = new Typed('#type-effect', {
  strings: ["Demar Edits", "Video Editor", "Clean. Sharp. Chill."],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Toggle project details
document.querySelectorAll('.toggle-btn').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const detailBox = btn.nextElementSibling;
    detailBox.classList.toggle('hidden');
    btn.textContent = detailBox.classList.contains('hidden') ? 'Show Details' : 'Hide Details';
  });
});

// Form validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const errorBox = document.getElementById('formError');

  if (name === '' || email === '' || message === '' || !email.includes('@')) {
    e.preventDefault();
    errorBox.textContent = "Fix up the form, fam. Everything’s required and email needs to look right.";
  } else {
    errorBox.textContent = "";
  }
});
