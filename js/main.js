// Ereteti Dairy Sacco — js/main.js

// ---- deliveries.html: litres, checked as typed ----
const litres = document.querySelector('#litres');
const litresMessage = document.querySelector('#litres-message');

function checkLitres() {
  const amount = Number(litres.value);

  if (litres.value === '') {
    litresMessage.textContent = '';
    litres.classList.remove('invalid');
  } else if (amount <= 0) {
    litresMessage.textContent = 'Litres must be more than 0.';
    litres.classList.add('invalid');
  } else if (amount > 60) {
    litresMessage.textContent =
      'Over 60 litres in one session. Check the reading.';
    litres.classList.add('invalid');
  } else {
    litresMessage.textContent = '';
    litres.classList.remove('invalid');
  }
}
if (litres) {
  litres.addEventListener('input', checkLitres);
}