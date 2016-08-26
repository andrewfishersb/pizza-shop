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
  this.isPremium = false;
  //possibly toppings for premium and regular
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
  if(this.isPremium){
    this.price +=.6
  }
  return this.price;
}



//Front-End

$(function(){
  //function that takes the values and conver them to the label
  // var valueToLabel = function(array){
  //   array.forEach(function(item){
  //     console.log("got here: " + this.value);
  //
  //     item = $("#"+this.value).text();
  //   })
  // }



  $("form").submit(function(event){
    event.preventDefault();
    var inputSize = $("#size").val();
    //play around to see if i can make it more me
    var inputToppings = $("#toppings input:checkbox:checked").map(function(){

      console.log("got here: " + this.value)
        return "got here: " + this.value;
    }).get();

    // var inputToppings = $("#toppings input:checkbox:checked").map(function(){
    //     return this.value;
    // }).get();


    // valueToLabel(inputToppings);
    console.log(inputToppings);

    var myPizza = new Pizza(inputSize,inputToppings);
    console.log(myPizza);
    var price = myPizza.calculatePrice();
    console.log(price);


  });





});
