// 섹션 페이드인(스크롤 등장) 효과
window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section').forEach((el, i) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(40px)';
        setTimeout(() => {
            el.style.transition = 'opacity 1.1s cubic-bezier(.4,2,.3,1), transform 1.1s cubic-bezier(.4,2,.3,1)';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 200 + i * 180);
    });
});
