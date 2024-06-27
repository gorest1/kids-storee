<template>
    <footer class="app-footer">
        <div class="container">
            <div class="footer-section">
                <meta charset="UTF-8">
                <h3>О компании</h3>
                <p>KidzyShop - ваш надёжный магазин детских товаров. Мы предлагаем только качественные и проверенные товары для ваших детей.</p>
            </div>
            <div class="footer-section">
                <meta charset="UTF-8">
                <h3>Контакты</h3>
                <p>Email: support@kidzyshop.com</p>
                <p>Телефон: +7 (123) 456-7890</p>
            </div>
            <div class="footer-section">
                <meta charset="UTF-8">
                <h3>Следите за нами</h3>
                <ul class="social-links">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>
<script>
    export default {
        name: 'AppFooter'
    };
</script>

<style scoped>
    .app-footer {
        background-color: #333;
        color: white;
        padding: 40px 0;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .footer-section {
        max-width: 300px;
    }

        .footer-section h3 {
            margin-top: 0;
        }

        .footer-section p, .footer-section ul {
            margin: 10px 0;
        }

    .social-links {
        list-style: none;
        padding: 0;
    }

        .social-links li {
            margin: 5px 0;
        }

        .social-links a {
            color: white;
            text-decoration: none;
        }

            .social-links a:hover {
                text-decoration: underline;
            }
</style>