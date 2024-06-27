<template>
    <div id="app">
        <AppHeader />
        <router-view />
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style>
    body {
        font-family: 'Poppins', sans-serif;
        background-color: #f9f9f9;
        margin: 0;
        padding: 0;
        color: #333;
    }

    #app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>
