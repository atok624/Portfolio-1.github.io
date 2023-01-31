const humburger = document.querySelector('.humburger');
<<<<<<< HEAD
const deskNav = document.querySelector('.Desk_nav');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  deskNav.classList.toggle('active');
});

document.querySelectorAll('.Desk_list').forEach((n) => n.addEventListener('click', () => {
  humburger.classList.remove('active');
  deskNav.classList.remove('active');
}));
=======
const Desk_nav = document.querySelector('.Desk_nav');

humburger.addEventListener('click', () => {
    humburger.classList.toggle('active');
    Desk_nav.classList.toggle('active');
});

document.querySelectorAll('.Desk_list').forEach((n) =>
    n.addEventListener('click', () => {
        humburger.classList.remove('active');
        Desk_nav.classList.remove('active');
    })
);
>>>>>>> de3abbfb6fddab16de3893eff0196a1574432e72
