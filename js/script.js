
// ---- native JS
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        let animateItems = document.querySelectorAll('.animate');
        animateItems.forEach(item => {
            item.classList.add('active');
        });
    }, 400);
});
