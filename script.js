const humburger = document.querySelector('.humburger');
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
