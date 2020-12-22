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
