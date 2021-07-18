<template>
  <section>
    <active-user :user-name="userName" :age="age"></active-user>
    <user-data @submit-user-data="storeData"></user-data>
  </section>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
export default {
  components: { ActiveUser, UserData },
  data() {
    return {
      userName: "",
      age: "",
    };
  },
  methods: {
    storeData(name, age) {
      this.userName = name;
      this.age = age;
    },
  },
};
</script>ActiveUser