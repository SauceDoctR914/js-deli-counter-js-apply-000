var katzDeli = []
//
function takeANumber(array) {
  if (array.length === 0) {
    return "There is nobody in line"
  } else {
    return `Welcome. You are number ${array.length} in line.`
  }
}

function nowServing (array) {
  
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    let customer = array.shift();
    return `Currently serving ${customer}.`
  }
}
function currentLine(array) {
  let newArray = [];
  let theLine = "The line is currently:"
  var i = 0; 
  while (i < array.length) {
    newArray.push(` ${i+1}. ${array[i]}`);
    i++;
  }
  if (array.length === 0) {
    return "The line is currently empty."
  } else {
    return theLine += newArray;
  }
}