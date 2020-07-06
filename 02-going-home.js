function goingHome(
  distance,
  gasConsumptionPer100k,
  gasPricePerLiter,
  moneyWon
) {
  let gasUsed = (distance * gasConsumptionPer100k) / 100;
  let gasCost = gasPricePerLiter * gasUsed;
  let moneyPerPerson = moneyWon / 5;
  if (gasCost <= moneyWon) {
    console.log(
      `You can go home. ${(moneyWon - gasCost).toFixed(2)} money left`
    ); //<--- this line updated
  } else {
    console.log(
      `Sorry, you cannot go home. Each will receive ${moneyPerPerson.toFixed(
        2
      )} money.`
    );
  }
}
goingHome(100, 5, 1.2, 6);
goingHome(120, 5, 1.2, 4);
goingHome(100, 8, 1.2, 20);
