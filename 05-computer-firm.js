function computerFirm(numberOfComputers, arrayOfSales) {
  let totalSales = 0;
  let averageRating = 0;

  for (let i = 0; i < numberOfComputers; i++) {
    // modulus last number
    let currentSale = arrayOfSales[i];
    let currentRating = currentSale.toString().split("").pop();
    averageRating += Number(currentRating);
    let possibleSales = currentSale.toString().split("").slice(0, -1).join("");
    possibleSales = Number(possibleSales);

    switch (currentRating) {
      case "1":
        // code block
        break;
      case "2":
        // code block
        break;
      case "3":
        // code block
        totalSales += possibleSales * 0.5;
        break;
      case "4":
        // code block
        totalSales += possibleSales * 0.7;
        break;
      case "5":
        // code block
        totalSales += possibleSales * 0.85;
        break;
      case "6":
        // code block
        totalSales += possibleSales;
        break;
      default:
      // code block
    }
  }
  averageRating /= numberOfComputers;

  console.log(`${totalSales.toFixed(2)}`);
  console.log(`${averageRating.toFixed(2)}`);
}

computerFirm(3, [103, 103, 103]);
computerFirm(5, [122, 156, 202, 214, 185]);
