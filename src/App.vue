<template>
  <v-app style="background-color: #F9FBE7">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="@/assets/farheaplogo.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <span class="mr-2">Farheap Solutions</span>
    </v-app-bar>

    <v-content>
      <Cart />
    </v-content>
  </v-app>
</template>

<script>
import Cart from "./components/Cart";

export default {
  name: "App",

  components: {
    Cart
  },

  data: () => ({
    //
  })
};
</script>
