<template>
    <div>
        <AppHeader />
        <ProductList />
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import ProductList from '../components/ProductList.vue';

export default {
    name: 'ProductCatalog',
    components: { AppHeader, AppFooter, ProductList },
    mounted() {
        this.$store.dispatch('fetchCategories');
        this.$store.dispatch('fetchProducts');
    }
};
</script>
