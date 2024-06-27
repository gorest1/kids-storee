<template>
    <div>
        <AppHeader />

        <div class="cart-container">
            <meta charset="UTF-8">
            <h2>Корзина</h2>
            <div v-if="cartItems.length > 0">
                <div class="cart-item" v-for="item in cartItems" :key="item.product.id">
                    <img :src="item.product.image" :alt="item.product.name" class="cart-item-image" />
                    <div class="cart-item-details">
                        <h3>{{ item.product.name }}</h3>
                        <meta charset="UTF-8">
                        <p>{{ item.product.price }} руб.</p>
                        <p>Количество: {{ item.quantity }}</p>
                        <button @click="removeFromCart(item.product)">Удалить</button>
                    </div>
                </div>
                <div class="cart-summary">
                    <meta charset="UTF-8">
                    <h3>Итого: {{ cartTotal }} руб.</h3>
                    <button @click="proceedToCheckout">Оформить покупку</button>
                </div>
            </div>
            <div v-else>
                <meta charset="UTF-8">
                <p>Ваша корзина пуста.</p>
            </div>
        </div>

        <CheckoutModal v-if="isCheckoutVisible" @close="isCheckoutVisible = false" />

        <AppFooter />
    </div>
</template>

<script>
    import AppHeader from '../components/AppHeader.vue';
    import AppFooter from '../components/AppFooter.vue';
    import CheckoutModal from '../components/CheckoutModal.vue';
    import { mapState } from 'vuex';

    export default {
        name: 'CartPage',
        components: { AppHeader, AppFooter, CheckoutModal },
        data() {
            return {
                isCheckoutVisible: false
            };
        },
        computed: {
            ...mapState(['cartItems']),
            cartTotal() {
                return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
            }
        },
        methods: {
            removeFromCart(product) {
                this.$store.commit('removeFromCart', product);
            },
            proceedToCheckout() {
                this.isCheckoutVisible = true;
            }
        }
    };
</script>

<style scoped>
    .cart-container {
        max-width: 800px;
        margin: 40px auto;
    }

    .cart-item {
        display: flex;
        align-items: center;
        border: 1px solid #ddd;
        padding: 10px;
        border-radius: 8px;
        margin-bottom: 10px;
    }

    .cart-item-image {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 8px;
        margin-right: 10px;
    }

    .cart-item-details {
        flex: 1;
    }

    .cart-summary {
        text-align: right;
        margin-top: 20px;
    }

        .cart-summary button {
            padding: 10px 20px;
            background-color: #5cb85c;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
        }

            .cart-summary button:hover {
                background-color: #4cae4c;
            }
</style>
