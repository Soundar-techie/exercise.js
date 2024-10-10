let x ="";
const cho = {
    name:"ronaldo",
    place: "chenai",
    age: "35",
    car:[
        {name:"BMW",Modal:["2013","2001"]}
        ]
}
for(let i in cho.car){
    x += "<h1>" + cho.car[i].name + "</h1>";

for(let j in cho.car[i].Modal){
  x += cho.car[i].Modal[j] + "<br>";
}
}