const app = Vue.createApp({
  data() {
    return {
      message: "nihao",
      output: "OUTPUT",
	  output2: "OUTPUT"
    };
  },
  methods: {
    showAlert() {
      alert(this.message);
    },
    setAltOutput(event, msg) {
      this.output = msg;
    },
    setOutput(event) {
      this.output = event.target.value;
    },
    setOutput2(event) {
      this.output2 = event.target.value;
    },
  },
});

app.mount("#assignment");
