const person = {
    name: "pradeep",
    age: 20,
    city: "velur"
  };
  
  
  let text = "";
  for (let x in person) {
    text += person[x] + " ";
  };
  
  console.log(text)