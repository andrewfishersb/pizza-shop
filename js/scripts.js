//Backend
function Person(name, street,city,state,zip){
  this.name = name;
  this.address= [];
  this.delivery = false;
}

function Pizza(size,toppings){
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

  function Topping(type){
    this.type = type;
    this.isPremium = false;
  }

Pizza.prototype.calculatePrice = function(){
  var numberOfToppings = this.toppings.length;
  var premToppings =0;
  for(var i =0;i<numberOfToppings;i++){
      if(this.toppings[i].isPremium){
        premToppings++;
      }
  }
  if(this.size==='Small'){
    this.price += 7.99 + numberOfToppings*1.25;
  }else if(this.size==='Medium'){
    this.price += 9.99 + numberOfToppings*1.50;
  }else if(this.size ==='Large'){
    this.price += 11.99 + numberOfToppings*1.75;
  }else{
    this.price+=13.99 + numberOfToppings*2.00;
  }
  this.price += premToppings*.6;
  this.price = Math.round(this.price*100)/100;
  return this.price;
}



//Front-End

$(function(){

  $("form").submit(function(event){
    event.preventDefault();
    $("#toppings").empty();
    var inputName =$("#user-name").val();
    var inputStreet =$("#street").val();
    var inputCity =$("#city").val();
    var inputState =$("#state").val();
    var inputZip = $("#zip").val();

    var person = new Person(inputName,inputStreet,inputCity,inputState,inputZip);
    var inputSize = $("#select-size").val();
    //play around to see if i can make it more me
    var inputToppings = $("input:checkbox[name=toppings]:checked").map(function(){

      //takes the value from <input> being stripped and uses the name with a # to convert to the label which I named using the # + value
      var convertToLabel =$("#" + this.value).text();
      var currentTopping =new Topping(convertToLabel);
      //check if premium topping
      if(this.value ==='sliced' ||this.value ==='steak' ||this.value ==='chicken' ||this.value ==='anchovies' ||this.value ==='salami'){
        currentTopping.isPremium = true;
      }
      return currentTopping;
    }).get();
    var myPizza = new Pizza(inputSize,inputToppings);
    var price = myPizza.calculatePrice();
    $("#name").text(inputName);
    $("#size").text(inputSize);
    myPizza.toppings.forEach(function(topping){
        $("#toppings").append("<li>"+topping.type+"</li>");
    });


    $("#charge").text(price);
    //Adds a delivery fee
    if($("#delivery-check").is(':checked')){
        price += 2;
        $("#deliver").text("Yes");
        $("#address").show();
    }else{
      $("#deliver").text("No");
    }

  });

});
