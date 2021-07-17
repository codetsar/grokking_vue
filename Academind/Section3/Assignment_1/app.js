const app = Vue.createApp({
	data(){
		return{
			userInputTask: '',
			tasks: [],
			taskListShown: true
		}
	},
	methods: {
		addTask(){
			this.tasks.push(this.userInputTask)
			this.userInputTask = ''
		},
		taskListShownToggle(){
			this.taskListShown = !this.taskListShown
		}

	}
})

app.mount('#assignment')