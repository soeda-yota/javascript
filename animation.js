const rotate = {
  header: document.getElementById('header'),
  deg: 0,
  startRotate: () => {
    rotate.deg = (rotate.deg + 6) % 360;
    rotate.header.style.transform = `rotateX(${rotate.deg}deg)`;
    if (90 <= rotate.deg && rotate.deg <=270) {
      rotate.header.className = 'back';
    } else {
      rotate.header.className = 'face';
    }
  }
}
setInterval(rotate.startRotate,20);
