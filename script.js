function item(name, display, price){
  this.name = name;
  this.display = display;
  this.price = price;
}


function car(type, design, color, rimType, interior){
  this.type = type;
  this.design = design;
  this.color = color;
  this.rimType = rimType;
  this.interior = interior;
    this.defaultType = function(){
      if(type=== "x7"){
      x =new car("x7", "luxury", "white", "21-Y-ferric", "black")
      x.cookie();
      }
    }
    this.designOptions = function(){
      if(this.type=== "x7"){
        return ["luxury", "mSport"];
      }
    }

    this.colorOptions= function(){
      if(this.type ==="x7"){
        return["white", "blue", "amtrin"];
        }
      }
    this.interiorOptions= function(){
        if(this.type ==="x7"){

          return["white", "black", "coffee"];
          }
        }

    this.rimOptions= function(){
      if(this.type ==="x7"){
        if(this.design ==="luxury"){
            return["21-Y-ferric", "22-V", "22-multi"]
          }
          else{
            return["21-dbl", "22-V", "22-Y"]
          }
        }

    }
    this.changeDesign = function(d){
      var dO = this.designOptions();
          this.design = d;
          this.changeRim(this.rimType);
      this.designImg();
    }
    this.changeColor = function(c){
      var cO = this.colorOptions();
      for(var i = 0; i < cO.length;i++){
        if(c===cO[i]){
          this.color = c;

        }
      }
      this.colorImg("cPic");
    }
    this.changeRim = function(r){
      var rO = this.rimOptions();
      let j = 0;
      for(var i = 0; i < rO.length;i++){
        if(r==rO[i]){
          this.rimType = r;
        }else{
          j++;
        }
      }
      if(j === 3){
        this.rimType = rO[0]
      }
      this.colorImg("cPic");
    }

    this.changeInterior = function(n){
      var inO = this.interiorOptions();
      let j = 0;
      for(let i = 0; i < inO.length;i++){
        if(n==inO[i]){
          this.interior = n;
        }else{
          j++;
        }
      }
      if(j === 3){
        this.interior = inO[0];
      }
      this.interiorImg("iPic");
    }

    this.colorImg = function(){
    document.getElementById("cPic").src=("images/" +this.type + "-" + this.design + "-"  + this.color + "-" + this.rimType + ".png")
    setButtons();
    return "images/" +this.type + "-" + this.design + "-"  + this.color + "-" + this.rimType + ".png"};
    this.designImg = function(){
    document.getElementById('dPic').src=("images/" + this.type + "-" +  this.design + ".png");
    setButtons();
    return this.type + "-" +  this.design+ ".png"};
    this.interiorImg = function(){
    document.getElementById('iPic').src=("images/" + this.type + "-interior-" + this.interior + ".png");
    return this.type + "-interior-" + this.interior+ ".png"};
    this.cookie = function(){
      var d = new Date();
      d.setTime(d.getTime()+(10*24*60*60*1000));
      var expires = "expires=" + d.toUTCString();
      document.cookie = ("type=" + this.type + ";"  +expires + ";");
      document.cookie = ("design=" + this.design + ";"  +expires + ";");
      document.cookie = ("color=" + this.color + ";"  +expires + ";");
      document.cookie = ("rimType=" + this.rimType + ";"  +expires + ";");
      document.cookie = ("interior=" + this.interior + ";"  +expires + ";");
      document.cookie = ("type=x7;" + expires + ";");
      document.cookie = ("expires=" + expires + ";" +expires + ";");
      document.cookie = ("path=/;");
      return"type=" + this.type + ";design=" +this.design+ ";color=" + this.color +
      ";rimType=" + this.rimType + ";interior=" + this.interior + ";" + expires + ";path=/";

  }

}

var x;


function carD(type){
if(type=== "x7"){
x =new car("x7", "luxury", "white", "21-Y-ferric", "black")
x.cookie();
  }
}

function rebuild(){
    let type = getCookie("type");
    let design = getCookie("design");
    let color= getCookie("color");
    let rimType = getCookie("rimType");
    let interior = getCookie("interior");

    x = new car(type, design, color, rimType, interior);
    x.designImg();
    x.colorImg();
    x.interiorImg();

}

function setButtons(){
  x.cookie();
  let dO = x.designOptions();
  document.getElementById("d1").innerHTML = dO[0];
  document.getElementById("d2").innerHTML = dO[1];

  let cO = x.colorOptions();
  document.getElementById("c1").innerHTML = cO[0];
  document.getElementById("c2").innerHTML = cO[1];
  document.getElementById("c3").innerHTML = cO[2];

  let rO = x.rimOptions();
  document.getElementById("r1").innerHTML = rO[0];
  document.getElementById("r2").innerHTML = rO[1];
  document.getElementById("r3").innerHTML = rO[2];

  let inO = x.interiorOptions();
  document.getElementById("in1").innerHTML = inO[0];
  document.getElementById("in2").innerHTML = inO[1];
  document.getElementById("in3").innerHTML = inO[2];
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
