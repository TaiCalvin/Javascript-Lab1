const myName1 = prompt ("Please enter a name.") ;
const myName2 = prompt ("Please enter another name.") ;
const myName3 = prompt ("Please enter one more name.") ;

if (myName1.length === myName2.length & myName1.length === myName3.length) {
  console.log (myName1 + " " + myName2 + " " + myName3 + " are the same length.")
} 
else if (myName1.length > myName2.length & myName1.length > myName3.length) {
  console.log (myName1 + " is the longer name")
}
else if (myName1.length === myName2.length) {
  console.log (myName1 + " " + myName2 + " are the longer names.")
}
else if (myName1.length === myName3.length) {
  console.log (myName1 + " " + myName3 + " are the longer names")
}
else if (myName2.length > myName1.length & myName2.length > myName3.length) {
  console.log (myName2 + " is the longer name.")
} 
else if (myName3.length > myName2.length & myName3.length > myName1.length) {
  console.log (myName3 + " is the longer name.")
} 
else if (myName3.length === myName2.length) {
  console.log (myName3 + " " + myName2 + " are the longer names.")
}