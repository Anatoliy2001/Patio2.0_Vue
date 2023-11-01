<template>
  <div class="products-catalog">
    <div v-for="item of items" :key="item.id" track-by='number' class="product">
      <div class="card" style="width: 80%;">
        <img :src="item.imageUrl" class="card-img-top" alt="..." id="img4">
        <div class="card-body">
          <h5 class="card-title">{{ item.name }}</h5>
          <p class="card-text">{{ item.desc }}</p>
          
          <div class="button-container"> 

            <button @click="addToCart(item.id)" class="all-buttons add-button">{{ $t('button1') }}</button>
            <p v-if="item.number > 0" class="card-text">{{ item.number }}</p>
            <button @click="removeFromCart(index, item.id)" class="all-buttons remove-button">
              {{ $t('button2') }}
                    </button>
               
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>


export default {
  name: 'hanging-page',
  data() {
    return {
      items: [{
                id: 13,
                number: 0,
                imageUrl: "/img/img1.43af0641.jpg",
                name: 'THE "MONACO" MODEL',
                desc: 'A model in a classic modern style. We can do it in any size within 1x2 m.'
              },
              {
                id: 14,
                number: 0,
                imageUrl: "/img/img1.679c64f1.jpg",
                name: 'THE "PROVENCE" MODEL',
                desc: 'An elegant model will decorate your veranda or terrace. We can do it in any size within 1x2 m.'
              },
              {
                id: 15,
                number: 0,
                imageUrl: "/img/img1.bf0b3f61.jpg",
                name: 'THE "VERSAILLES" MODEL',
                desc: 'An elegant model will decorate your veranda or terrace. We can do it in any size within 1x2 m.'
              },
              {
                id: 16,
                number: 0,
                imageUrl: "/img/img1.bf0b3f61.jpg",
                name: 'THE "DOMINO" MODEL',
                desc: 'An interesting model with a back and a seat made of domino cubes. Any size in dimensions of 1,8x0,7 m. Textiles are optional.'
              },
              ],
      cart: [],
      
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
      item.number++;
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      cartItems.push(item);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
      //items.push({ number: item.number++ });
      console.log(this.cart);
    },
    removeFromCart(itemId, trueitemId) {
      const item = this.items.find(({ id }) => id === trueitemId);
      item.number--;
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      const index = cartItems.findIndex(({ id }) => id === itemId);
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
      
      console.log(this.cart);
    },
    getCart() {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      this.cart = JSON.parse(localStorage.getItem("cart"));
      
    },


  },
  mounted() {
    this.getCart()

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>