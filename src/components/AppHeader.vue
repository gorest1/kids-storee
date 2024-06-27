<template>
    <header class="app-header">
        <div class="container">
            <div class="logo">
                <h1>KidzyShop</h1>
            </div>
            <nav>
                <ul>
                    <meta charset="UTF-8">
                    <li><router-link to="/">Главная</router-link></li>
                    <li><router-link to="/catalog">Каталог</router-link></li>
                    <li><router-link to="/cart">Корзина</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>

<style scoped>
    .app-header {
        background-color: #007BFF; /* Изменение цвета шапки на голубой */
        color: white;
        padding: 20px 0;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .logo h1 {
        margin: 0;
        font-size: 24px;
    }

    nav ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
    }

        nav ul li {
            margin-right: 20px;
        }

            nav ul li a {
                color: white;
                font-weight: bold;
            }

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
</style>
