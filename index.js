let num = 0; 

console.log(takeANumber());
console.log(takeANumber());
console.log(takeANumber());

var takeANumber = function() {
  
  //machine starts at 0
  //first number is 1 
  //returns an ordered number to the customer 

  num++;
  
  //katzDeliLine.push(name);
  return "order number: " + num;
} 

var nowServing = function(katzDeliLine) {
  
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + "."; 
  } else {
    return "There is nobody waiting to be served!";
  }
}

var currentLine = function(katzDeliLine) {

  let People = "";
  
  if (katzDeliLine.length === 0) {
    return"The line is currently empty.";
  }
  
  for (var i =0; i < katzDeliLine.length; i++) {
    if (i === katzDeliLine.length - 1 ) {
      People += (i+1) + ". " + katzDeliLine[i];
    } else {
      People += (i+1) + ". " + katzDeliLine[i] + ", ";
    }
  }
  
  return"The line is currently: " + People;
}