function detail(name,age,place,pincode){
    this.username = name;
    this.age = age;
    this.place = place;
    this.pincode = pincode;
    this.detail = function(){
        return this.username + " " + this.age +" "+ this.place +" "+  this.pincode;
    }
}
const guna = new detail("guna.j",34 , "kerala" , 634123);