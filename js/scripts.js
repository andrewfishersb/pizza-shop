function Person(name, pizza){
  this.name = name;
  this.pizza = new Pizza(size, toppings); // this may change
}

function Pizza(size, toppings){
  this.size = size;
  this.toppings = [];
}
