import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueCurrencyFilter from "vue-currency-filter";

Vue.config.productionTip = false;

Vue.use(VueCurrencyFilter, {
  symbol: "$",
  thousandsSeparator: ".",
  fractionSeparator: ",",
  symbolPosition: "front",
  symbolSpacing: true
});

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
