function entry(age){
     
    if(age > 0 && age <= 6){
        console.log("price:free") 
    }
     if(age > 6 && age <= 12 ){
        console.log("price:10") 
    }
     if(age > 12 && age < 18 ){
        console.log("price:20") 
    }
     if(age >= 18 && age <= 30){
        console.log("price:30") 
    }
    if(age > 30 ){
         console.log("price:40")
    }
   
}
entry()