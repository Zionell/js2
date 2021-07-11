const app = new Vue({
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
         if (cartProduct.currentQuantity > 1) {
            cartProduct.currentQuantity--
         } else {
            this.cartProducts.splice(this.cartProducts.indexOf(cartProduct), 1)
         }
      },
      closeCart() {
         if (event.target.classList.contains("cart")) {
            this.showCart = !this.showCart
         }
      }
   },
   computed: {
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
