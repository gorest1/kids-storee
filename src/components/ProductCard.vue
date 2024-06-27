<template>
    <div class="product-card">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>{{ product.price }} руб.</p>
        <button @click="addToCart(product)">Добавить в корзину</button>
    </div>
</template>

<script>
export default {
    props: ['product'],
    methods: {
        addToCart(product) {
            this.$store.commit('addToCart', product);
        }
    }
};
</script>

<style>
    .product-card {
        border: 1px solid #ccc;
        padding: 10px;
        text-align: center;
    }

    .product-image {
        width: 100px;
        height: 100px;
        object-fit: cover;
        margin-bottom: 10px;
    }
</style>
