document.addEventListener('DOMContentLoaded', function() {
  // Subscribe Modal  
  const subscribeBtn = document.getElementById('subscribeBtn');
  const subscribeModal = document.getElementById('subscribeModal');
  const closeModalBtn = document.getElementById('closeModal');
  const subscribeForm = document.getElementById('subscribeForm');

  function openModal() {
    subscribeModal.classList.remove('hidden', 'hide');
    subscribeModal.classList.add('show');
  }

  function closeModal() {
    subscribeModal.classList.remove('show');
    subscribeModal.classList.add('hide');
    setTimeout(() => {
      subscribeModal.classList.add('hidden');
    }, 300); 
  }

  if (subscribeBtn && closeModalBtn && subscribeModal) {
    subscribeBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (subscribeForm) {
    subscribeForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('subscribeName').value;
      const email = document.getElementById('subscribeEmail').value;

      if (name && email) {
        console.log(`Subscribed: ${name} (${email})`);
        closeModal();
        subscribeForm.reset();
      } else {
        alert("Silakan lengkapi nama dan email!");
      }
    });
  }

  // Highlight Active Nav Link
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active-link'));
      link.classList.add('active-link');
    });
  });

  // Comment Form Validation (untuk Artikel 1 & 2)
  const commentForm = document.querySelector('form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const commentInput = document.getElementById('comment');

  if (commentForm) {
    commentForm.addEventListener('submit', function(e) {
      e.preventDefault();

      let isValid = true;

      if (!nameInput.value.trim()) {
        nameInput.classList.add('border-red-500');
        isValid = false;
      } else {
        nameInput.classList.remove('border-red-500');
      }

      if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
        emailInput.classList.add('border-red-500');
        isValid = false;
      } else {
        emailInput.classList.remove('border-red-500');
      }

      if (!commentInput.value.trim()) {
        commentInput.classList.add('border-red-500');
        isValid = false;
      } else {
        commentInput.classList.remove('border-red-500');
      }

      if (isValid) {
        alert('Komentar Anda telah dikirim dan sedang menunggu moderasi. Terima kasih!');
        commentForm.reset();
      }
    });
  }

  // Mobile Menu Toggle
  const menuButtonIcon = document.querySelector('.ri-menu-line');
  const nav = document.querySelector('nav');

  if (menuButtonIcon && nav) {
    const menuButton = menuButtonIcon.parentElement;
    menuButton.addEventListener('click', function() {
      nav.classList.toggle('hidden');
      nav.classList.toggle('flex');
      nav.classList.toggle('flex-col');
      nav.classList.toggle('absolute');
      nav.classList.toggle('top-16');
      nav.classList.toggle('right-4');
      nav.classList.toggle('bg-white');
      nav.classList.toggle('p-4');
      nav.classList.toggle('rounded');
      nav.classList.toggle('shadow-lg');
      nav.classList.toggle('z-50');
    });
  }
});