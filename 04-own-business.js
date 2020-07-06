function ownBusiness(width, length, height, computersArray) {
  let totalSpace = width * length * height;
  let spaceUsed = 0;

  for (let i = 0; i < computersArray.length; i++) {
    if (computersArray[i] == "Done") {
      break;
    }
    spaceUsed += computersArray[i];
  }

  let spaceLeft = totalSpace - spaceUsed;
  let spaceNeeded = spaceUsed - totalSpace;

  if (totalSpace > spaceUsed) {
    console.log(`${spaceLeft} Left space.`);
  } else {
    console.log(
      `No more free space! You need ${spaceNeeded} Cubic meters more.`
    );
  }
}

ownBusiness(10, 10, 2, [20, 20, 20, 20, 122]);

ownBusiness(10, 1, 2, [4, 6, "Done"]);
