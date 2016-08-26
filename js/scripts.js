//Backend
function Person(){ // may not need unless multiple orders
  this.name = name;
  this.pizza = new Pizza(); // this may change
  this.delivery = false;
}

function Pizza(size,toppings){ // contructors may change
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
  //possibly toppings for premium and regular
}

  function Topping(name){
    this.name = name;
    this.isPremium = false;
  }
// Pizza.prototype.createOrder = function(pizza){
//   this.toppings.push(this.size);
// }


//at first all toppings cost the same
//if delivery add a charge
Pizza.prototype.calculatePrice = function(){
  // debugger;
  var numberOfToppings = this.toppings.length;
  if(this.size==='small'){
    this.price += 7.99 + numberOfToppings*1.25;

  }else if(this.size==='medium'){
    this.price += 9.99 + numberOfToppings*1.50;
  }else if(this.size ==='large'){
    this.price += 11.99 + numberOfToppings*1.75;
  }else{
    this.price+=13.99 + numberOfToppings*2.00;
  }
  this.price = Math.round(this.price*100)/100;
  if(Topping.isPremium){
    this.price +=.6
  }
  return this.price;
}



//Front-End

$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var inputSize = $("#size").val();
    //play around to see if i can make it more me
    var inputToppings = $("input:checkbox[name=toppings]:checked").map(function(){
      //takes the value from <input> being stripped and uses the name with a # to convert to the label which I named using the # + value
      var convertToLabel =$("#" + this.value).text();
      console.log("")
      //WORK HERE WHEN I GET BACK CHECK IF PREMIUM AND THEN TURN TOPPING INTO PREMIUM











      return new Topping(convertToLabel);
    }).get();



    // valueToLabel(inputToppings);
    console.log(inputToppings);

    var myPizza = new Pizza(inputSize,inputToppings);
    console.log(myPizza);
    var price = myPizza.calculatePrice();
    console.log(price);


  });





});
