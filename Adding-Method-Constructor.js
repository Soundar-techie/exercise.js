function poco(model,battery,ram,storage){
    this.phonemodel= model;
    this.phonebattery= battery;
    this.RAM= ram;
    this.phonestorage= storage;
}
const phonedetail= new poco("M5","5000mah","6","128gb");

poco.prototype.camra = function(camra){
    this.camra=camra;
}

phonedetail.camra("5mb")