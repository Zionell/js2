/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/components.js":
/*!*********************************!*\
  !*** ./public/js/components.js ***!
  \*********************************/
/***/ (() => {

eval("// Catalog\nVue.component('catalog-products', {\n   props: ['products', 'search'],\n   computed: {\n      filterProduct() {\n         return this.products.filter(product => {\n            return product.title.toLowerCase().includes(this.search.toLowerCase())\n         })\n      }\n   },\n   template: `<filterProduct :products=\"filterProduct\"></filterProduct>`\n});\nVue.component('filterProduct', {\n   props: ['products'],\n   template: ` <article class=\"product__grid-wrap product__grid-wrap--catalog\">\n                  <div class=\"product__card shadow filter-card trans\" v-for=\"product in products\">\n                     <img :src=\"'img/product-card'+product.id_product+'.jpg'\" width=\"360\" height=\"420\"\n                        alt=\"Product's card\" class=\"product-card__img\">\n                     <a href=\"product.html\" class=\"product-card__name\">\n                        <h5 class=\"product-card__h5\">{{product.title}}</h5>\n                        <p class=\"product-card__text\">{{product.descProduct}}</p>\n                        <p class=\"product-card__text-options\">$ {{ product.price }}</p>\n                     </a>\n                     <button @click=\"{{$root.addToCart(product)}}\"\n                        class=\"card-hover button-hover4 trans1\">\n                        <svg class=\"card-hover__img trans\" width=\"26\" height=\"24\"\n                           viewBox=\"0 0 32 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                           <path class=\"trans\"\n                              d=\"M26.2009 29C25.5532 28.9738 24.9415 28.6948 24.4972 28.2227C24.0529 27.7506 23.8114 27.1232 23.8245 26.475C23.8376 25.8269 24.1043 25.2097 24.5673 24.7559C25.0303 24.3022 25.6527 24.048 26.301 24.048C26.9493 24.048 27.5717 24.3022 28.0347 24.7559C28.4977 25.2097 28.7644 25.8269 28.7775 26.475C28.7906 27.1232 28.549 27.7506 28.1047 28.2227C27.6604 28.6948 27.0488 28.9738 26.401 29H26.2009ZM6.75293 26.32C6.75293 25.79 6.91011 25.2718 7.20459 24.8311C7.49907 24.3904 7.91764 24.0469 8.40735 23.844C8.89705 23.6412 9.43594 23.5881 9.95581 23.6915C10.4757 23.7949 10.9532 24.0502 11.328 24.425C11.7028 24.7998 11.9581 25.2773 12.0615 25.7972C12.1649 26.317 12.1118 26.8559 11.9089 27.3456C11.7061 27.8353 11.3626 28.2539 10.9219 28.5483C10.4812 28.8428 9.96304 29 9.43298 29C9.08087 29.0003 8.73212 28.9311 8.40674 28.7966C8.08136 28.662 7.78569 28.4646 7.53662 28.2158C7.28755 27.9669 7.09001 27.6713 6.9552 27.3461C6.82039 27.0208 6.75098 26.6721 6.75098 26.32H6.75293ZM10.553 20.686C10.2935 20.6868 10.0409 20.6024 9.83411 20.4457C9.62727 20.2891 9.47758 20.0689 9.40796 19.819L4.57495 2.36401H1.18201C0.868521 2.36401 0.567859 2.23947 0.346191 2.01781C0.124523 1.79614 0 1.49549 0 1.18201C0 0.868519 0.124523 0.567873 0.346191 0.346205C0.567859 0.124537 0.868521 5.81268e-06 1.18201 5.81268e-06H5.46301C5.7225 -0.00080736 5.97504 0.0837201 6.18176 0.240568C6.38848 0.397416 6.53784 0.617884 6.60693 0.868006L11.4399 18.323H24.6179L29.001 8.27501H14.401C14.2428 8.27961 14.0854 8.25242 13.9379 8.19507C13.7904 8.13771 13.6559 8.05134 13.5424 7.94108C13.4288 7.83082 13.3386 7.69891 13.277 7.55315C13.2154 7.40739 13.1836 7.25075 13.1836 7.0925C13.1836 6.93426 13.2154 6.77762 13.277 6.63186C13.3386 6.4861 13.4288 6.35419 13.5424 6.24393C13.6559 6.13367 13.7904 6.0473 13.9379 5.98994C14.0854 5.93259 14.2428 5.90541 14.401 5.91001H30.814C31.0097 5.90996 31.2022 5.95866 31.3744 6.05172C31.5465 6.14478 31.6928 6.27926 31.7999 6.44301C31.9078 6.60729 31.9734 6.79569 31.9908 6.99145C32.0083 7.18721 31.9771 7.38424 31.9 7.565L26.495 19.977C26.4026 20.1876 26.251 20.3668 26.0585 20.4927C25.866 20.6186 25.641 20.6858 25.411 20.686H10.553Z\"\n                              fill=\"white\" />\n                        </svg>\n                        <span class=\"card-hover__text trans\">Add to Cart</span>\n                     </button>\n                  </div>\n               </article>`\n});\n// Cart \nVue.component('cart-products', {\n   props: ['cart', 'all-price'],\n   template: `<cart-product :cart=\"cart\" :all-price=\"allPrice\"></cart-product>`\n});\nVue.component('cart-product', {\n   props: ['cart', 'all-price'],\n   methods: {\n      countQuontity(cartProduct) {\n         if (event.target.classList.contains(\"fa-plus\") || event.target.classList.contains(\"plus\")) {\n            if (cartProduct.currentQuantity < cartProduct.quantity) {\n               cartProduct.currentQuantity++\n            }\n         } else {\n            if (cartProduct.currentQuantity > 1) {\n               cartProduct.currentQuantity--\n            }\n         }\n      }\n   },\n   template: ` <div class=\"shopping__grid-wrap\">\n                  <div class=\"shopping__card shadow\" v-for=\"cartProduct in cart\">\n                     <a href=\"product.html\" class=\"shopping-card__link\">\n                        <img class=\"shopping-card__img scale trans\"\n                           :src=\"'img/product-card'+cartProduct.id_product+'.jpg'\" width=\"262\" height=\"306\"\n                           alt=\"product\">\n                     </a>\n                     <div class=\"shopping-card__name\">\n                        <h3 class=\"shopping-name__h3\">{{cartProduct.title}}</h3>\n                        <p class=\"shopping-card__text\">Price: <span \n                              class=\"shopping-card__text-color\">$ {{ cartProduct.price*cartProduct.currentQuantity}}</span>\n                        </p>\n                        <p class=\"shopping-card__text\">Color: <span\n                              class=\"shopping-card__text-span\">{{cartProduct.color}}</span></p>\n                        <p class=\"shopping-card__text\">Size: <span\n                              class=\"shopping-card__text-span\">{{cartProduct.size}}</span>\n                        </p>\n                        <p class=\"shopping-card__text shopping-card__text-block\">Quantity: </p>\n                        <button class=\"minus\" @click=\"countQuontity(cartProduct)\"><i  class=\"fas fa-minus\"></i></button>\n                        <span class=\"shopping-card__text\">{{ cartProduct.currentQuantity }}</span>\n                        <button class=\"plus\" @click=\"countQuontity(cartProduct)\"><i  class=\"fas fa-plus\"></i></button>\n                     </div>\n                     <!-- close button -->\n                     <button type=\"submit\" class=\"shopping-card__close\">\n                        <i class=\"fas fa-times\"@click=\"{{$root.removeProduct(cartProduct)}}\"></i>\n                     </button>\n                  </div>\n               </div>`\n});\n\n//# sourceURL=webpack://webpack-path/./public/js/components.js?");

/***/ }),

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script.js */ \"./public/js/script.js\");\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.js */ \"./public/js/components.js\");\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack://webpack-path/./public/js/index.js?");

/***/ }),

/***/ "./public/js/script.js":
/*!*****************************!*\
  !*** ./public/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst app = new Vue({\n   el: '#app',\n   data: {\n      products: [],\n      cartProducts: [],\n      cartCount: 0,\n      allPrice: '',\n      searchLine: '',\n      showCart: false,\n      showModal: false,\n      showSearch: false\n   },\n   mounted() {\n      fetch('/catalog')\n         .then((response) => {\n            return response.json()\n         })\n         .then((data) => {\n            this.products = data;\n         })\n      fetch('/cart')\n         .then((response) => {\n            return response.json()\n         })\n         .then((data) => {\n            this.cartProducts = data;\n         })\n   },\n   methods: {\n      addToCart(product) {\n         if (!this.cartProducts.includes(product)) {\n            this.cartProducts.push(product)\n            fetch('/cart', {\n               method: 'POST',\n               headers: {\n                  \"Content-Type\": \"application/json\"\n               },\n               body: JSON.stringify(product)\n            })\n            const text = {\n               product: product,\n               act: \"Добавление\"\n            }\n            fetch('/stats', {\n               method: 'POST',\n               headers: {\n                  \"Content-Type\": \"application/json\"\n               },\n               body: JSON.stringify(text)\n            })\n         } else {\n            this.showModal = !this.showModal\n         }\n      },\n      removeProduct(cartProduct) {\n         this.cartProducts.splice(this.cartProducts.indexOf(cartProduct), 1)\n         fetch('/cart', {\n            method: 'DELETE',\n            headers: {\n               \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(cartProduct)\n         })\n         const text = {\n            product: cartProduct,\n            act: \"Удаление\"\n         }\n         fetch('/stats', {\n            method: 'POST',\n            headers: {\n               \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(text)\n         })\n      },\n      closeCart() {\n         if (event.target.classList.contains(\"cart\")) {\n            this.showCart = !this.showCart\n         }\n      }\n   },\n   computed: {\n      counterCart() {\n         return this.cartCount = this.cartProducts.length\n      }\n   }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n   app: app\n});\n\n//# sourceURL=webpack://webpack-path/./public/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/index.js");
/******/ 	
/******/ })()
;