let cost = 0;
let callories = 0;
class Hamburger {
   constructor(size, filling, addition) {
      this.size = size;
      this.filling = filling;
      this.addition = addition;
   }
   sizeCount() {
      cost += +this.size.dataset.cost;
      callories += +this.size.dataset.callories;
   }
   fillingCount() {
      cost += +this.filling.dataset.cost;
      callories += +this.filling.dataset.callories;
   }
   additionCount() {
      if (this.addition == undefined) {
         return;
      }
      cost += +this.addition.dataset.cost;
      callories += +this.addition.dataset.callories;
   }
   outCostCallories() {
      document.querySelector(".outCallories").innerHTML = `Каллорийность = ${callories}`;
      document.querySelector(".outCost").innerHTML = `Стоимость = ${cost}`;
   }
}


document.querySelector("button").addEventListener("click", () => {
   cost = 0;
   callories = 0;
   let size = document.querySelector(`input[name=size]:checked`);
   let filling = document.querySelector(`input[name=filling]:checked`);
   let addition = document.querySelector(`input[name=addition]:checked`);
   const check = new Hamburger(size, filling, addition);
   check.sizeCount();
   check.fillingCount();
   check.additionCount();
   check.outCostCallories();
})

