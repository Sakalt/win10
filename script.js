// ウィンドウを開く関数
function openWindow(id) {
    document.getElementById(id).style.display = 'block';
}

// ウィンドウを閉じる関数
function closeWindow(id) {
    document.getElementById(id).style.display = 'none';
}

// スタートメニューを表示/非表示にする関数
function toggleStartMenu() {
    const startMenu = document.getElementById('startMenu');
    startMenu.style.display = (startMenu.style.display === 'block') ? 'none' : 'block';
}

// スタートメニューを閉じる関数
function closeStartMenu() {
    document.getElementById('startMenu').style.display = 'none';
}

// 設定を適用する関数
function applyColors() {
    const windowColor = document.getElementById('windowColor').value;
    const taskbarColor = document.getElementById('taskbarColor').value;

    document.querySelectorAll('.window').forEach(window => {
        window.style.backgroundColor = windowColor;
    });

    document.querySelector('.taskbar').style.backgroundColor = taskbarColor;
}

// 数字を計算機のディスプレイに追加する関数
function appendNumber(number) {
    const display = document.getElementById('calcDisplay');
    display.value += number;
}

// 計算結果を表示する関数
function calculateResult() {
    const display = document.getElementById('calcDisplay');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'エラー';
    }
}

// ディスプレイをクリアする関数
function clearDisplay() {
    document.getElementById('calcDisplay').value = '';
}

// ページが読み込まれた後に初期化する関数
window.onload = function() {
    // 時計を更新する関数を定期的に呼び出す
    setInterval(updateClock, 1000);
};

// 時計を更新する関数
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
