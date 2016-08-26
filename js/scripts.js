//Backend
function Person(){ // may not need unless multiple orders
  this.name = name;
  this.pizza = new Pizza(); // this may change
}

function Pizza(size,toppings){ // contructors may change
  this.size = size;
  this.toppings = [];
  this.price = 0;
  //possibly toppings for premium and regular
}

Pizza.prototype.createOrder = function(pizza){
  this.toppings.push(this.size);
}
//at first all toppings cost the same
Pizza.prototype.calculatePrice = function(toppings){
  var numberOfToppings = toppings.length-1;
  if(size==='small'){
    this.price += 7.99 + numberOfToppings*1.25;

  }else if(size==='medium'){
    this.price += 9.99 + numberOfToppings*1.50;
  }else if(size ==='large'){
    this.price += 11.99 + numberOfToppings*1.75;
  }else{
    this.price+=13.99 + numberOfToppings*2.00;
  }
  this.price = Math.round(price*100)/100;
  return price;
}

//reg = all vegs,pepperoni, bacon, italian sausage(non sliced), beef,ham
//1.25 reg - small
//1.50 reg - medium
//1.75 reg - large
//2.00 reg - x-large
 //non reg sliced, steak, chicken, salami, anchovies
//1.85 non-reg - small
//2.10 non-reg - medium
//2.35 non-reg - large
//2.60 non-reg - x-large




//Front-End

$(function(){
  $("form").submit(function(){




    
  })





})
