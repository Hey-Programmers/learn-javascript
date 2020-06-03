// snippet 2
for (let n = 0; n < 2; n++) {
  console.log("n=" + n);
  for (let m = 0; m < 5; m++) {
    console.log("   m=" + m);
  }
  console.log("n=" + n);
}

// n=0
//    m=0
//    m=1
//    m=2
//    m=3
//    m=4
// n=0
// n=1
//    m=0
//    m=1
//    m=2
//    m=3
//    m=4
// n=1