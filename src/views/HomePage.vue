<template>
    <div>
        <!-- Удалены дублирующиеся компоненты AppHeader и AppFooter -->
        <!-- Список всех товаров -->
        <div class="all-products">
            <meta charset="UTF-8">
            <h2>Все товары</h2>
            <div class="product-list">
                <div v-for="product in products" :key="product.id" class="product-list-item">
                    <img :src="product.image" :alt="product.name" class="product-list-image" />
                    <div class="product-list-details">
                        <h3>{{ product.name }}</h3>
                        <p>{{ product.description }}</p>
                        <meta charset="UTF-8">
                        <p>{{ product.price }} руб.</p>
                        <button @click="addToCart(product)">Добавить в корзину</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HomePage',
  computed: {
    ...mapState(['products'])
  },
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product);
    }
  }
};
</script>

<style scoped>
    .all-products {
        max-width: 1200px;
        margin: 40px auto;
    }

    .product-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
    }

    .product-list-item {
        display: flex;
        align-items: center;
        border: 1px solid #ddd;
        padding: 10px;
        border-radius: 8px;
    }

    .product-list-image {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 8px;
        margin-right: 10px;
    }

    .product-list-details {
        flex: 1;
    }

    /* Стили для кнопки "Добавить в корзину" (уже заданы в AppHeader.vue) */
    button {
        background-color: #007BFF; /* Изменение цвета кнопки на голубой */
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }

        button:hover {
            background-color: #0056b3;
        }

    @media (max-width: 768px) {
        .product-list {
            grid-template-columns: 1fr;
        }
    }
</style>
