# grokking vue.js

## links
- https://v3.vuejs.org/
- https://www.udemy.com/course/vuejs-2-the-complete-guide/

- https://github.com/vuejs/awesome-vue
  - https://revolist.github.io/revogrid/demo/
  - https://david-desmaisons.github.io/Vue.D3.tree/tree
- https://gridsome.org/

## ideas for project
- TODO APP
- calculator
- keyboard trainer
- any game
  - chess?
- stuff(clothes) register
- obsidian clone
- steal CK3 popups

## Academind Course Content
### Basics
  
  Core Syntax, Templates, Directives, Data, Methods, Computed Properties, Watchers
  ___
  notes:

Declarative approach

#### Interpolation (between tags)
 ```js
 {{ vue_obj }}
 ```

#### Binding (inside tag)
 ```js
 v-bind:attr = "vue_data_variable"
 ```
 #### Pass html element
 ```js
 v-html="outputHtml()" // unsafe(!) crossite smth
 ```

#### Access data in methods
 ```js
 this.variable
 ```

#### Two Way Binding
```js
v-bind:value v-on:input
v-model
```

#### Computed Properties
```html
  <p>Result: {{ methodLikeProperty }}</p>
```
```js
  data(){
    variable: '',
    ...
  },
  computed:{
    methodLikeProperty(){
      console.log('Running again...');
      if (this.variable === ""){
        return '';
      }
      return 'prefix ' + this.variable
    }
  },
  methods:{
    ...
  }
```

#### Watchers
```js
data(){
  variable: '';
  ...
},
watch: {
  // this.variable passed as value
  variable(value) {
    // whenever 'variable' changes this method will be executed
    this.anotherVariable = value / 0
  }
},
```
```js
watch:{
  // it could accept both states
  variable(newValue, oldValue){...}
}
```
```js
// computed with 2 dependencies better than two watchers
computed: {
  variable() {
    console.log('Running again...');
    if (this.var1 === '' || this.var2 === '') {
      return '';
    }
    return this.var1 + ' ' + this.var2;
  },
}
```
```js
// wtf is that
watch: {
  counter(value) {
    if (value > 50) {
      const that = this;
      setTimeout(function () {
        that.counter = 0;
      }, 2000);
    }
  }
}
```

#### Methods vs Computed Properties vs Watchers
|                                                 Methods                                                  |                                    Computed                                     |                                           Watch                                           |
| :------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------: |
|                                  Use with event binding OR data binding                                  |                             Use with data bindings                              |                               Not used directly in template                               |
|              Data binding: Method is executed for every "re-render" cycle of the component               | Computed properties are only re-evaluated if one of their "used values" changed | Allows you to run any code in reaction to some changed data (e.g. send Http request etc.) |
| Use for events or data that really needs to be re-evaluated all the time (whenever smth changes on page) |                     Use for data that depends on other data                     |                       Use for any non-data update you want to make                        |

#### Shorthands 
```js
// shorthand for events
v-on:click
@click
```
```js
// shorthand for bindings
v-bind:value='...'
:value='...'
```
___

- Intermediate

  Components, Component Communication, Behind the Scenes, Forms, Http, Routing, Animations

- Advanced
  Vuex, Athentication(!), Deployment & Optimizations, Composition API, Re-using Code