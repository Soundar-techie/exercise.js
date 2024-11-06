function age_cha(){
    let age;
    let ans =Number(docment.getElementById("age").value);
    
    if(isNaN(ans)){
       age = "plece input number";
    }
    else{
        age = (ans < 18) ? "to young":"happy";
    }
    document.getElementById("return").innerHTML = age;
    }