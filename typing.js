// 타이핑 애니메이션 함수 및 소개/인사 타이핑 효과
function typeText(element, text, speed = 45, callback) {
    let i = 0;
    function typing() {
        if (i <= text.length) {
            element.innerHTML = text.slice(0, i) + '<span class="cursor">|</span>';
            i++;
            setTimeout(typing, speed);
        } else {
            element.innerHTML = text;
            if (callback) callback();
        }
    }
    typing();
}

// 타이핑 커서 스타일 동적 추가
(function(){
    const style = document.createElement('style');
    style.innerHTML = `.cursor { display:inline-block; width:1ch; color:#4fd1c5; animation:blink 1s steps(1) infinite; }\n@keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0;} }`;
    document.head.appendChild(style);
})();

window.addEventListener('DOMContentLoaded', function() {
    // 소개 타이핑 효과
    const aboutTitle = '안녕하세요! 꿈꾸는 개발자 손재성입니다.';
    const aboutDesc = 'U1대학교 AI소프트웨어 학과에 재학 중인 25세 손재성입니다.<br>웹 개발, 데이터베이스, 인공지능 등 다양한 분야에 관심을 가지고 있습니다.';
    typeText(document.getElementById('about-typing'), aboutTitle, 55, () => {
        setTimeout(() => {
            typeText(document.getElementById('about-desc-typing'), aboutDesc, 18);
        }, 350);
    });
});
