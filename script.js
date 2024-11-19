let nickname = '';
let touchCount = 0;
let gameStarted = false;
let lastTouchTime = Date.now();

// 닉네임 설정
document.getElementById('start-game').addEventListener('click', () => {
    nickname = document.getElementById('nickname').value || `user-${Math.floor(Math.random() * 10000)}`;
    document.getElementById('nickname-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    gameStarted = true;
});

// 랜덤 닉네임 생성
document.getElementById('random-nickname').addEventListener('click', () => {
    nickname = `user-${Math.floor(Math.random() * 10000)}`;
    document.getElementById('nickname').value = nickname;
});

// 터치 버튼 클릭
document.getElementById('touch-button').addEventListener('click', () => {
    if (gameStarted) {
        touchCount++;
        document.getElementById('touch-count').textContent = touchCount;
        lastTouchTime = Date.now(); // 터치한 시간 갱신
    }
});

// 일정 시간 동안 터치가 없으면 터치 횟수 초기화
setInterval(() => {
    if (gameStarted && (Date.now() - lastTouchTime > 5000)) { // 5초 동안 터치가 없으면 초기화
        touchCount = 0;
        document.getElementById('touch-count').textContent = touchCount;
    }
}, 1000); // 1초마다 체크

// 의견 보내기
document.getElementById('send-feedback').addEventListener('click', () => {
    window.location.href = 'mailto:rostte2222@naver.com';
});