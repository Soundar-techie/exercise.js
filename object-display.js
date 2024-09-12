const person = {
    name: "ganesh",
    age: 30,
    city: "namakkal"
  };
  
  // Build a Text
  let text = "";
  for (let x in person) {
    text += person[x] + " ";
  };
  
 