export default function handleScroll(): void {
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
      // Rolagem para baixo
      document.querySelector('.sticky-header')?.classList.add('hidden');
    } else {
      // Rolagem para cima
      document.querySelector('.sticky-header')?.classList.remove('hidden');
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Para mobile ou rolar para cima
  });
}
