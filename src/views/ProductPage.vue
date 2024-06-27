<template>
    <div>
        <AppHeader />
        <ProductCard :product="product" />
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import ProductCard from '../components/ProductCard.vue';

export default {
  name: 'ProductPage',
  components: { AppHeader, AppFooter, ProductCard },
  data() {
    return {
      product: null
    };
  },
  async created() {
    const productId = this.$route.params.id;
    this.product = this.$store.dispatch('fetchProductById', productId);
  }
};
</script>

<style scoped>
    /* Добавьте стили для страницы продукта */
</style>
