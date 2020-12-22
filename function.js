const myBirthTime = new Date(1985, 11, 18, 12, 00);

function updateParegraph() {
  let now = new Date();
  let seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
  document.getElementById(`birth-time`).innerText = `生まれてから${seconds.toFixed(0)}秒経過`;
}

function getCircleArea (radius) {
  let area = radius * radius * 3.14;
  return area;
}

setInterval(updateParegraph, 50);

document.write(getCircleArea(5));
document.write('<br>');
document.write(getCircleArea(10));
document.write('<br>');
document.write(getCircleArea(15));
document.write('<br>');
