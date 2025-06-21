// Animate items on page load
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('show');
    }, index * 200);
  });
});

