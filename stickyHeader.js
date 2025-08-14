function stickyHeader(className) {
  const classSticky = document.querySelector(`.${className}`);
  classSticky.classList.add('sticky', 'top-0');
}
