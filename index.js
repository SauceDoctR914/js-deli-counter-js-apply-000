var katzDeli = []
//[Laura, Gavin]
function takeANumber(array, name) {
  array.push(name);
  if (array.length === 0) {
    return "There is nobody in line"
  } else {
    return `Welcome, ${name}. You are number ${array.length} in line.`
  }
}

function nowServing (array) {
  let customer = array[0];
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    array.shift();
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