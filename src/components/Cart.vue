<template>
  <v-container>
    <v-layout text-center wrap class="steps">
      <v-card class="mx-auto mt-10 mat-card" max-width="500">
        <div>
          <div class="mx-5">
            <!-- Finished Task #1 : Can select a product -->
            <v-radio-group v-model="checked" column>
              <div
                v-for="license in listOfLicense"
                :key="license.plan"
                class="section-container"
              >
                <div v-if="selectedLicense === license.plan">
                  <section class="radio-list-container">
                    <div class="radio-container">
                      <v-radio
                        class="mat-radio"
                        @click="
                          handleSelectLicense(license.plan, license.price)
                        "
                      />
                      <span>LICENSE PLAN #{{ license.plan }}</span>
                    </div>
                    <span class="cost">
                      {{ license.price | currency }} per license
                    </span>
                  </section>
                </div>
                <div v-else>
                  <section class="radio-list-container-plain">
                    <div class="radio-container">
                      <v-radio
                        class="mat-radio"
                        @click="
                          handleSelectLicense(license.plan - 1, license.price)
                        "
                      />
                      <span>LICENSE PLAN #{{ license.plan }}</span>
                    </div>
                    <span class="cost">
                      {{ license.price | currency }} per license
                    </span>
                  </section>
                </div>
              </div>
            </v-radio-group>
          </div>
        </div>
        <v-divider class="mx-4"></v-divider>
        <div class="mt-5 mb-5">
          <small class="mr-2">Number of licenses:</small>
          <input
            @input="handleInputChange"
            class="mat-input"
            type="number"
            min="1"
            max="99"
            v-bind:value="inputValue"
          />
          <h1>{{ inputValue }}</h1>
        </div>
        <v-divider class="mx-4"></v-divider>
        <div class="mt-5 total-container">
          <span class="total">TOTAL:</span>
          <!-- Finished Task #1 : total price -->
          <span v-if="selectedLicense" class="currency">{{
            total | currency
          }}</span>
          <small class="country">US</small>
        </div>
        <!-- Finished Task #3 : A button with no any function -->
        <v-chip
          class="mb-5 mt-2"
          color="green"
          text-color="white"
          :disabled="selectedLicense === 0"
        >
          BUY NOW
        </v-chip>
        <div class="mb-10">
          <span class="selected" v-if="selectedLicense"
            >Selected plan: #{{ selectedLicense }}</span
          >
        </div>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Cart",

  data: () => ({
    selectedLicense: 0,
    inputValue: 1,
    price: 10,
    selectedPlan: {},
    checked: null
  }),
  methods: {
    ...mapActions("product", ["pickOrder"]),

    handleSelectLicense(plan, price) {
      this.selectedLicense = plan + 1;
      this.checked = plan;
      this.price = price;
      this.setupOrder();
    },

    handleInputChange({ target }) {
      this.inputValue = target.value;
      this.setupOrder();
    },

    setupOrder() {
      const order = {
        numberOfLicenses: this.inputValue,
        plan: this.selectedLicense,
        price: this.price
      };
      this.selectedPlan = { ...order };
      this.pickOrder(order);
    }
  },
  computed: {
    ...mapGetters("product", {
      listOfLicense: "getListOfLicense",
      total: "getTotalCostOfSelectedPlan"
    })
  }
};
</script>

<style>
.mat-card {
  width: 100%;
}
.section-container {
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.radio-list-container {
  margin: 0;
  padding: 0;
  background-color: #e1f5fe;
  border: 0.05rem solid #b3e5fc;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.radio-list-container-plain {
  margin: 0;
  padding: 0;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.radio-container {
  margin: 0.5rem 0;
  padding-left: 0.5rem;
  width: 19rem;
  display: flex;
  justify-content: flex-start;
}
.cost {
  margin: 0.5rem 0;
  padding-right: 0.5rem;
  color: #424242;
}
.mat-radio {
  margin: 0 !important;
  padding: 0 !important;
}
.cost {
  margin: 0.5rem 0;
  padding-right: 0.5rem;
  color: #424242;
}
.mat-input {
  font-size: 0.8rem;
  background: #ffffff;
  border: 1px solid #b3e5fc;
  border-radius: 0.22rem;
  text-align: right;
}
.total-container {
  display: flex;
  justify-content: center;
}
.total {
  color: #424242;
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 0.5rem;
}
.currency {
  color: dodgerblue;
  font-size: 1.2rem;
  font-weight: bold;
}
.country {
  color: dodgerblue;
  margin-left: 0.1rem;
  font-weight: bold;
}
.selected {
  color: dodgerblue;
}
</style>
