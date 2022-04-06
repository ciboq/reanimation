let screenLog = document.querySelector('#screen-log');
document.addEventListener('mousemove', logKey);

function logKey(e) {
  screenLog.innerHTML = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}