<template>
  <form @submit.prevent="submit">
    <input v-model="username" type="text" placeholder="Username" />
    <input v-model="age" type="text" placeholder="Age" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  emit: ["submit-user-data"],
  data() {
    return {
      username: "",
      age: "",
    };
  },
  methods: {
    submit: function () {
      this.$emit("submit-user-data", 
        this.username,
        this.age,
      );
      this.username = "";
      this.age = "";
    },
  },
};
</script>