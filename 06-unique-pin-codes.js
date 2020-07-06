function pinCodes(max1, max2, max3) {
  for (let d1 = 2; d1 <= max1; d1 += 2) {
    for (let d2 = 2; d2 <= max2; d2++) {
      for (let d3 = 2; d3 <= max3; d3 += 2) {
        if (d2 === 2 || d2 === 3 || d2 === 5 || d2 === 7) {
          console.log(`${d1} ${d2} ${d3}`);
        }
      }
    }
  }
}

pinCodes(3, 5, 5);

pinCodes(8, 2, 8);
