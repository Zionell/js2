const app = new Vue({
   el: '#app',
   data: {
      products: [],
      cartProducts: [],
      cartCount: 0,
      allPrice: '',
      searchLine: '',
      showCart: false,
      showModal: false,
      showSearch: false
   },
   mounted() {
      fetch('/catalog')
         .then((response) => {
            return response.json()
         })
         .then((data) => {
            this.products = data;
         })
      fetch('/cart')
         .then((response) => {
            return response.json()
         })
         .then((data) => {
            this.cartProducts = data;
         })
   },
   methods: {
      addToCart(product) {
         if (!this.cartProducts.includes(product)) {
            this.cartProducts.push(product)
            fetch('/cart', {
               method: 'POST',
               headers: {
                  "Content-Type": "application/json"
               },
               body: JSON.stringify(product)
            })
            const text = {
               product: product,
               act: "Добавление"
            }
            fetch('/stats', {
               method: 'POST',
               headers: {
                  "Content-Type": "application/json"
               },
               body: JSON.stringify(text)
            })
         } else {
            this.showModal = !this.showModal
         }
      },
      removeProduct(cartProduct) {
         this.cartProducts.splice(this.cartProducts.indexOf(cartProduct), 1)
         fetch('/cart', {
            method: 'DELETE',
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(cartProduct)
         })
         const text = {
            product: cartProduct,
            act: "Удаление"
         }
         fetch('/stats', {
            method: 'POST',
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(text)
         })
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
   }
});
