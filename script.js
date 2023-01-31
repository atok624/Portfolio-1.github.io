const humburger = document.querySelector('.humburger');
const deskNav = document.querySelector('.Desk_nav');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  deskNav.classList.toggle('active');
});

document.querySelectorAll('.Desk_list').forEach((n) => n.addEventListener('click', () => {
  humburger.classList.remove('active');
  deskNav.classList.remove('active');
}));
