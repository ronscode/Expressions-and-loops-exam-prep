function computerHall(month, numHoursSpent, numPeople, timeOfDay) {
  let pricePerHour = 0;
  let pricePerPerson = 0;
  let totalCostOfVisit = 0;

  if (
    month == "January" ||
    month == "February" ||
    month == "March" ||
    month == "April" ||
    month == "May"
  ) {
    if (timeOfDay == "day") {
      pricePerHour += 10.5;
    } else {
      pricePerHour += 8.4;
    }
  } else if (month == "June" || month == "July" || month == "August") {
    if (timeOfDay == "day") {
      pricePerHour += 12.6;
    } else {
      pricePerHour += 10.2;
    }
  }

  if (numPeople >= 4) {
    // 10% discount
    pricePerHour = pricePerHour - pricePerHour * 0.1;
  }

  if (numHoursSpent >= 5) {
    // cost per person - 50%
    pricePerHour = pricePerHour - pricePerHour * 0.5;
  }
  totalCostOfVisit = numPeople * pricePerHour * numHoursSpent;

  console.log(`Price per person for one hour: ${pricePerHour.toFixed(2)}`);
  console.log("Total cost of the visit: " + totalCostOfVisit.toFixed(2));
}

computerHall("March", 3, 3, "day");

computerHall("July", 5, 5, "night");
