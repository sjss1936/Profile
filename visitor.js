// 방문자 카운터 & 랜덤 인사 메시지
window.addEventListener('DOMContentLoaded', function() {
    // 방문자 카운터 (localStorage 기반)
    let count = localStorage.getItem('visit_count');
    if (!count) count = 0;
    count = parseInt(count) + 1;
    localStorage.setItem('visit_count', count);
    document.getElementById('visitor-counter').textContent = `방문자 수: ${count}회`;

    // 랜덤 인사 메시지(무구)
    const greetings = [
        '오늘도 멋진 하루 보내세요!',
        '방문해주셔서 감사합니다 :)',
        '코딩은 즐거움입니다!',
        '함께 성장하는 개발자가 되겠습니다.',
        '새로운 도전을 응원합니다!',
        '포트폴리오에 오신 걸 환영합니다!',
        '좋은 인연이 되길 바랍니다.',
        '행복한 하루 되세요!',
        '배움에는 끝이 없습니다.',
        '당신의 꿈을 응원합니다!'
    ];
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];

    // 인사 메시지 타이핑 효과 (typing.js의 typeText 함수 활용)
    setTimeout(() => {
        if (typeof typeText === 'function') {
            typeText(document.getElementById('greeting'), greeting, 38);
        } else {
            document.getElementById('greeting').textContent = greeting;
        }
    }, 1200);
});
