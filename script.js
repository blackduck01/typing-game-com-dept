/* script.js - 나쨩의 웹사이트에 마법을 부리는 파일 ✨ */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ❄️ 눈 내리는 효과 (Snowfall)
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄'; // 눈송이 모양
        
        // 랜덤 위치 및 크기 설정
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2~5초 사이
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // 크기 다양하게
        
        document.body.appendChild(snowflake);
        
        // 5초 뒤에 눈송이 삭제 (메모리 관리)
        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }
    // 0.1초마다 눈송이 생성
    setInterval(createSnowflake, 100);


    // 2. ✨ 스크롤 리빌 (Scroll Reveal) 애니메이션
    // 화면에 요소가 나타나면 스르륵 올라오는 효과
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // 한 번만 실행
            }
        });
    }, observerOptions);

    // 모든 주요 섹션에 애니메이션 적용
    const sections = document.querySelectorAll('.container, .intro-container, .btn-group, h1, p, .menu-btn');
    sections.forEach(section => {
        section.classList.add('fade-in-section'); // 기본적으로 투명하게 설정
        observer.observe(section); // 관찰 시작
    });
});
