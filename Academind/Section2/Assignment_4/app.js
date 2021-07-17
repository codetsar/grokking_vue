const app = Vue.createApp({
  data() {
    return {
      userInput: '',
	  hidden: false,
	  pColor: ''

    };
  },
  methods: {
	  toggleHidden(){
		  this.hidden = !this.hidden
	  }
  }
});

app.mount('#assignment')