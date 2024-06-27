<template>
    <div>
        <div class="categories">
            <div v-for="category in categories"
                 :key="category.id"
                 class="category-card"
                 @click="selectCategory(category.id)">
                <img :src="category.image" :alt="category.name" class="category-image" />
                <h2>{{ category.name }}</h2>
            </div>
        </div>
        <div class="products" v-if="selectedCategoryId">
            <div v-for="product in filteredProducts(selectedCategoryId)" :key="product.id" class="product-card">
                <ProductCard :product="product" />
            </div>
        </div>
    </div>
</template>

<script>
    import ProductCard from './ProductCard.vue';
    import { mapState } from 'vuex';

    export default {
        components: { ProductCard },
        data() {
            return {
                selectedCategoryId: null,
            };
        },
        computed: {
            ...mapState(['products', 'categories']),
            filteredProducts() {
                return (categoryId) => {
                    return this.products.filter(product => product.categoryId === categoryId);
                };
            }
        },
        methods: {
            selectCategory(categoryId) {
                this.selectedCategoryId = categoryId;
            }
        }
    };
</script>

<style>
    .categories {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-bottom: 20px;
    }

    .category-card {
        cursor: pointer;
        text-align: center;
        margin: 10px;
    }

    .category-image {
        width: 100px;
        height: 100px;
        object-fit: cover;
    }

    .products {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .product-card {
        margin: 10px;
    }
</style>
