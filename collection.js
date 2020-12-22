var classes = [`A組`,`B組`,`C組`,`D組`];
for (var grade = 1; grade < 4; grade++) {
  for (var kumi of classes) {
    document.write(`${grade}年${kumi} `);
  }
}
