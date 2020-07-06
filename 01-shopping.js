function shopping(breakTime, priceHardware, priceSoftware, priceFrappe) {
  let restTime = breakTime - 5 - 3 * 2 - 2 * 2;
  let totalSpent = priceHardware * 3 + priceSoftware * 2 + priceFrappe;

  console.log(totalSpent.toFixed(2));
  console.log(restTime);
}

shopping(20, 2, 4, 3);

shopping(35, 2.5, 1.2, 6.3);
