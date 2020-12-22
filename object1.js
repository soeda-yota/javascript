const timeGame = {
  startTime: null,
  endTime: null,
  displayArea: document.getElementById('display-area'),

  start: () => {
    timeGame.startTime = Date.now();
    document.body.onkeypress = timeGame.stop;
  },
  stop: () => {
    timeGame.endTime = Date.now();
    result = (timeGame.endTime - timeGame.startTime) / 1000;

    if (9.5 <= result && result <= 10.5) {
      timeGame.displayArea.innerText　= `${result}秒でした。素晴らしい`;
    } else {
      timeGame.displayArea.innerText = `${result}秒でした。残念`;
    }
    document.body.onkeypress = null; // これでボタン押しても何も起きなくなる
  }
}

if (confirm(`10秒だと思ったら何かキーを押してください`)){
  timeGame.start();
}

/* 最初に作ったコード
let startTime;
let endTime;
const displayArea = document.getElementById('display-area');

function start() {
  startTime = Date.now();
  document.body.onkeypress = stop;
}

function stop() {
  endTime = Date.now();
  let result = (endTime - startTime) / 1000;
  if (9.5 <= result && result <= 10.5) {
    displayArea.innerText　= `${result}秒でした。素晴らしい`;
  } else {
    displayArea.innerText = `${result}秒でした。残念`;
  }
}
if (confirm(`10秒だと思ったら何かキーを押してください`)){
  start();
}
*/
