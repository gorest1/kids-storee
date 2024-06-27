<template>
    <div class="modal-overlay">
        <div class="modal">
            <meta charset="UTF-8">
            <h2>Оформление заказа</h2>
            <form @submit.prevent="submitOrder">
                <div class="form-group">
                    <meta charset="UTF-8">
                    <label for="name">Имя</label>
                    <input type="text" id="name" v-model="name" required />
                </div>
                <div class="form-group">
                    <meta charset="UTF-8">
                    <label for="address">Адрес доставки</label>
                    <input type="text" id="address" v-model="address" required />
                </div>
                <div class="form-group">
                    <meta charset="UTF-8">
                    <label for="phone">Телефон</label>
                    <input type="tel" id="phone" v-model="phone" required />
                </div>
                <div class="form-group">
                    <meta charset="UTF-8">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="email" required />
                </div>
                <meta charset="UTF-8">
                <button type="submit">Оформить</button>
                <button type="button" @click="$emit('close')">Отмена</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CheckoutModal',
        data() {
            return {
                name: '',
                address: '',
                phone: '',
                email: ''
            };
        },
        methods: {
            submitOrder() {
                // Здесь можно добавить логику для отправки данных заказа
                alert('Заказ оформлен!');
                this.$emit('close');
            }
        }
    };
</script>

<style scoped>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        background: white;
        padding: 20px;
        border-radius: 8px;
        max-width: 500px;
        width: 100%;
    }

    .form-group {
        margin-bottom: 15px;
    }

        .form-group label {
            display: block;
            margin-bottom: 5px;
        }

        .form-group input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }

    button {
        padding: 10px 20px;
        background-color: #5cb85c;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        margin-right: 10px;
    }

        button[type="button"] {
            background-color: #d9534f;
        }

        button:hover {
            opacity: 0.8;
        }
</style>
