let x = 11;
console.log(x);

//Diamond loop starts; Check if x is odd or even 
function diamondLoopNum(numberToCheck) {
const isEven = numberToCheck % 2 == 0;
  
//If even, prints message with number, variable applied to function becomes newNum
if (isEven) {
  newNum = numberToCheck,
   console.log(`The number ${numberToCheck} is Even`);
}
//Else, add + 1 to make it even and becomes newNum
else{ newNum = (numberToCheck + 1),
  console.log('The number is now even at: ' + newNum);
}

console.log(newNum);
  //Up loop
  for (let y = 1; y <= newNum; y++) {
    for (let s = (newNum - y); s <= newNum -y; s++){
      str= ' ';
      console.log(str.repeat(s),"x ".repeat(y))
    }
  }

  //Down loop
  for (let y = 1, z = (newNum - y); y <= newNum - 1; y++, z--) {
    str= ' ';
    console.log(str.repeat(y),"x ".repeat(z));
  }

}
//Apply function to x
diamondLoopNum(x);
