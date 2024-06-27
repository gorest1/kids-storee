import { createStore } from 'vuex';

export default createStore({
  state: {
    categories: [
      { id: 1, name: 'Игрушки', image: require('./assets/images/categories/toys.jpg') },
      { id: 2, name: 'Одежда', image: require('./assets/images/categories/clothes.jpg') },
      { id: 3, name: 'Книги', image: require('./assets/images/categories/books.jpg') },
      { id: 4, name: 'Электроника', image: require('./assets/images/categories/electronics.jpg') },
      { id: 5, name: 'Спорт', image: require('./assets/images/categories/sports.jpg') },
    ],
    products: [
      { id: 1, categoryId: 1, name: 'Плюшевый мишка', description: 'Мягкая игрушка', price: 500, image: require('./assets/images/products/teddy_bear.jpg') },
      { id: 2, categoryId: 1, name: 'Конструктор', description: 'Развивающий конструктор', price: 1200, image: require('./assets/images/products/constructor.jpg') },
      { id: 3, categoryId: 2, name: 'Футболка', description: 'Детская футболка', price: 300, image: require('./assets/images/products/t_shirt.jpg') },
      { id: 4, categoryId: 2, name: 'Джинсы', description: 'Детские джинсы', price: 700, image: require('./assets/images/products/jeans.jpg') },
      { id: 5, categoryId: 3, name: 'Сказки Пушкина', description: 'Книга со сказками', price: 400, image: require('./assets/images/products/pushkin_tales.jpg') },
      { id: 6, categoryId: 3, name: 'Атлас мира', description: 'Книга-атлас', price: 600, image: require('./assets/images/products/world_atlas.jpg') },
      { id: 7, categoryId: 4, name: 'Ноутбук', description: 'Детский ноутбук', price: 2500, image: require('./assets/images/products/laptop.jpg') },
      { id: 8, categoryId: 4, name: 'Наушники', description: 'Детские наушники', price: 800, image: require('./assets/images/products/headphones.jpg') },
      { id: 9, categoryId: 5, name: 'Футбольный мяч', description: 'Мяч для футбола', price: 500, image: require('./assets/images/products/football.jpg') },
      { id: 10, categoryId: 5, name: 'Велосипед', description: 'Детский велосипед', price: 3000, image: require('./assets/images/products/bicycle.jpg') },
    ],
    cartItems: []
  },
  mutations: {
    addToCart(state, product) {
      const cartItem = state.cartItems.find(item => item.product.id === product.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        state.cartItems.push({ product, quantity: 1 });
      }
    },
    removeFromCart(state, product) {
      const cartItemIndex = state.cartItems.findIndex(item => item.product.id === product.id);
      if (cartItemIndex !== -1) {
        state.cartItems.splice(cartItemIndex, 1);
      }
    },
    clearCart(state) {
      state.cartItems = [];
    }
  },
  actions: {},
  getters: {
    getProductsByCategory: (state) => (categoryId) => {
      return state.products.filter(product => product.categoryId === categoryId);
    },
    cartTotal: (state) => {
      return state.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
  }
});
