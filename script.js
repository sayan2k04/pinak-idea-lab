// Apply animation using anime.js for 360-degree rotation on hover
document.querySelectorAll('.hover\\:rotate-360').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      anime({
        targets: el,
        rotate: '1turn',
        duration: 1000,
        easing: 'easeInOutQuad',
      });
    });
  });
  