var display;
for(var i = 1; i <= 100000; i++) {

  if (i % 15 === 0) {

    display = `FIZZBAZZ`;
  } else if (i % 5 === 0) {

    display = `BAZZ`;
  } else if (i % 3 === 0) {

    display = `FIZZ`;
  } else {
    
    display = i;
  }
  display += ' ';
  document.write(display);
}
