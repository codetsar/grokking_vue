<template>
  <li>
    <h2 @click="toggleFavorite">{{ name }} {{ isFav ? "(favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    phoneNumber: String,
    emailAddress: String,
    isFavorite: Boolean,
  },
  data() {
    return {
      detailsAreVisible: false,
      isFav: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.isFav = !this.isFav;
    },
  },
};
</script>