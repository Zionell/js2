//drop menu
let menu = document.querySelector("#menu");
let dropMenu = document.querySelector("#dropMenu");
let closeMenu = document.querySelector("#close");
menu.addEventListener("click", () => {
   dropMenu.style.display = "block";
});
closeMenu.addEventListener("click", () => {
   dropMenu.style.display = "none";
});
//-----------------------------------------------------
//--------------------VUE------------------------------
//-----------------------------------------------------
const products = new Vue({
   el: '#app',
   data: {
      products: [],
      cartProducts: [],
      cartCount: 0,
      allPrice: 0,
      searchLine: '',
      showCart: false,
      showSearch: false
   },
   methods: {
      makeGETRequest(url) {
         return fetch(url)
            .then(text => text.json())
      },
      addToCart() {
         if (!this.cartProducts.includes(this.products[event.target.dataset.id - 1])) {
            this.cartProducts.push(this.products[event.target.dataset.id - 1])
            this.cartCount = this.cartProducts.length
         } else {
            alert("Товар уже имеется в корзине")
         }
      },
      removeProduct() {
         this.cartProducts.splice(this.cartProducts.indexOf(this.cartProducts[event.target.dataset.id]), 1);
         this.cartCount = this.cartProducts.length
      }
   },
   computed: {
      filterProduct() {
         return this.products.filter(product => {
            return product.title.toLowerCase().includes(this.searchLine.toLowerCase())
         })
      }
   },
   mounted() {
      this.makeGETRequest('json/catalogData.json')
         .then(data => {
            this.products = [...data];
         })
   }
});
