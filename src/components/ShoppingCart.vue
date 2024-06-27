<template>
    <div>
        <meta charset="UTF-8">
        <h2>Ваша корзина</h2>
        <div v-for="item in cart" :key="item.id">
            <meta charset="UTF-8">
            <p>{{ item.name }} - {{ item.quantity }} шт.</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ShoppingCart',
  computed: {
    ...mapState(['cart'])
  }
};
</script>

<style scoped>
    /* Добавьте стили для корзины */
</style>
