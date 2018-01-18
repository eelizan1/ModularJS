// Modular Pattern - using object literal
var myModule = {
  name: 'Enrico',
  age: 26,
  sayName: function() {
    alert(this.name);
  },
  setName: function(newname) {
    this.name = newName;
  }
};

myModule.sayName();
myModule.setName('Enrico');
