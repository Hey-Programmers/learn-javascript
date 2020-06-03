// snippet 4
let locations = ["flatbush", "williamsburg", "bushwick", "greenpoint"];

for (let i = 0; i < locations.length; i++) {
  for (let j = i + 1; j < locations.length; j++) {
    console.log(locations[i], locations[j]);
  }
}

// flatbush williamsburg
// flatbush bushwick
// flatbush greenpoint
// williamsburg bushwick
// williamsburg greenpoint
// bushwick greenpoint