const app = Vue.createApp({
	data(){
		return{
			name: 'Yar',
			age: 32,
			imgUrl: 'https://v3.vuejs.org/logo.png'
		}
	},
	methods:{
		getRandomNumber(){
			return Number.parseFloat(Math.random()).toPrecision(2)
		}
	}
})

app.mount('#assignment')