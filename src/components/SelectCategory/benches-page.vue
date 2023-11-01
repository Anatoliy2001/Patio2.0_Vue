<template>     <div class="products-catalog">
  <!-- <div>
    <h1>Store</h1>
    <div v-for="item of items" :key="item.id">
      <p>{{ item.name }}</p>
      <button @click="removeFromCart(item.id)" v-if="isInCart(item.id)">
        remove from cart
      </button>
      <button @click="addToCart(item.id)" v-else>add to cart</button>
    </div>
    <button @click="$router.push('/cart')">check out</button>
  </div> -->
  <div v-for="item of items" v-bind:key="item.componentKey" class="product">
  <div class="card" style="width: 80%;">
     <img :src="item.imageUrl" class="card-img-top" alt="..." id="img4">
     <div class="card-body">
       <h5 class="card-title">{{ item.name }}</h5>
       <p class="card-text">{{ item.desc }}</p>
       
       <div class="button-container"> 

        <button @click="addToCart(item.id)" class="all-buttons add-button">{{ $t('button1') }}</button>
        <button @click="removeFromCart(index)" class="all-buttons remove-button">
          {{ $t('button2') }}
                </button>
       </div>
     </div>
</div>
</div>


</div>

</template>
 
<script>

import i18n from '../../i18n';

export default {
  name: 'benches-page',
  data() {
    return {
      items: ([
  {
    id: 1,
    number: 0,
    imageUrl: "./1a.png",
    name: i18n.global.t('benches1'),
    desc: i18n.global.t('benches2'),
    componentKey: 0
  },
  {
    id: 2,
    number: 0,
    imageUrl: "/img/img1.679c64f1.jpg",
    name: i18n.global.t('benches3'),
    desc: i18n.global.t('benches4'),
    componentKey: 0
  },
  {
    id: 3,
    number: 0,
    imageUrl: "/img/img1.bf0b3f61.jpg",
    name: i18n.global.t('benches5'),
    desc: i18n.global.t('benches6'),
    componentKey: 0
  },
  {
    id: 4,
    number: 0,
    imageUrl: "/img/img1.bf0b3f61.jpg",
    name: i18n.global.t('benches7'),
    desc: i18n.global.t('benches8'),
    componentKey: 0
  },
  {
  id: 5,
    number: 0,
    imageUrl: "/img/img1.62135f30.jpg",
    name: i18n.global.t('benches9'),
    desc: i18n.global.t('benches10'),
    componentKey: 0
  },
]),
      cart: [],
      IsOpen: false,
    };
  },
  methods: {
    isInCart(itemId) {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      const cartItem = this.cart.find(({ id }) => id === itemId);
      return Boolean(cartItem);
    },
    addToCart(itemId) {
      const item = this.items.find(({ id }) => id === itemId);
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      cartItems.push(item);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
      this.componentKey ++
    },
    removeFromCart(itemId) {
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      const index = cartItems.findIndex(({ id }) => id === itemId);
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
    getCart() {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      this.cart = JSON.parse(localStorage.getItem("cart"));
      
    },
  },
  mounted() {
    this.getCart()   },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>