// Top 버튼 동작 (외부 JS 파일)
window.addEventListener('DOMContentLoaded', function() {
    const topBtn = document.getElementById('top-btn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            topBtn.classList.add('show');
        } else {
            topBtn.classList.remove('show');
        }
    });
    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
