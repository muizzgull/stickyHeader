function stickyHeader(className) {
  const classSticky = document.querySelector(`.${className}`);

  if(classSticky) {
  classSticky.classList.add('sticky', 'top-0');
  }
}

window.stickyHeader = stickyHeader;
