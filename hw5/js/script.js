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
      addToCart(product) {
         if (!this.cartProducts.includes(product)) {
            this.cartProducts.push(product)
         } else {
            product.currentQuantity++
         }
      },
      removeProduct(cartProduct) {
         this.cartProducts.splice(this.cartProducts.indexOf(cartProduct), 1);
      }
   },
   computed: {
      filterProduct() {
         return this.products.filter(product => {
            return product.title.toLowerCase().includes(this.searchLine.toLowerCase())
         })
      },
      counterCart() {
         return this.cartCount = this.cartProducts.length
      }
   },
   mounted() {
      this.makeGETRequest('json/catalogData.json')
         .then(data => {
            this.products = [...data];
         })
   }
});
