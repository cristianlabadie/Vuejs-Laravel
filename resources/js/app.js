require('./bootstrap');

window.Vue = require('vue');


Vue.component('mi-pensamiento-component', require('./components/MiPensamientoComponent.vue').default);
Vue.component('pensamiento-component', require('./components/PensamientoComponent.vue').default);
Vue.component('form-component', require('./components/FormComponent.vue').default);




const app = new Vue({
    el: '#app',
});
