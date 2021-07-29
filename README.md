# grokking vue.js

## links
- https://v3.vuejs.org/
- https://www.udemy.com/course/vuejs-2-the-complete-guide/

- https://github.com/vuejs/awesome-vue
  - https://revolist.github.io/revogrid/demo/
  - https://david-desmaisons.github.io/Vue.D3.tree/tree
- https://gridsome.org/
- https://github.com/hakimel/reveal.js/
- https://hakim.se/
- https://vuejs.org/v2/guide/components-custom-events.html#Event-Names
- https://v3.vuejs.org/style-guide/
- https://academind.com/learn/node-js/building-a-restful-api-with/what-is-a-restful-api-/
- https://academind.com/learn/web-dev/how-the-web-works/

## ideas for project
- TODO APP, pomodoro
- calculator
- keyboard trainer
- any game
  - chess?
- stuff(clothes) register
- obsidian clone
- steal CK3 popups
- music.yandex.ru extension (`externalAPI.help()`)
- xer, mpp <-> txt

## Academind Course Content
### Basics
  
  Core Syntax, Templates, Directives, Data, Methods, Computed Properties, Watchers
  ___
  notes:

#### Declarative approach
Vue can be used to define the goal instead of the steps

#### Interpolation (between tags)
 ```html
<p> {{ vue_obj }} </p>
 ```

#### Binding (inside tag)
 ```html
<input v-bind:value="vue_obj" />
 ```
 #### Pass html element
 ```html
<span v-html="outputHtml()"></span> // unsafe(!) crossite smth
 ```
 >Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to XSS vulnerabilities. Only use HTML interpolation on trusted content and never on user-provided content.

#### Access data in methods
 ```js
 this.variable
 ```

#### Two Way Binding
```html
<input v-bind:value='...' v-on:input='...' />
<input v-model='...' />
```

#### Computed Properties
```html
  ...
  <p>Result: {{ methodLikeProperty }}</p>
  ...
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

#### Conditional Content
v-if (and v-show) allows you to render content only if a certain condition is met

v-if can be combined with v-else and v-else-if (only on direct sibling elements!)
```html
<p v-if="goals.length === 0"> No goals </p>
<ul v-else>
  <li> Goal </li>
</ul>
```
```html
<p v-show="true"> uses css style "display: none" to hide element</p>
```
#### Lists
`v-for` can be used to render multiple elements dynamically

`v-for` can be used with arrays, objects and ranges (numbers).

You can exctract values, values and indexes or values, keys and indexes

If you need `v-for` and `v-if`, DON't use them on the same element. Use a wrapper with `v-if` instead.

##### Keys
Vue re-uses DOM elements to optimize perfomance -> This can lead to bugs if elements contain state

Bind the `key` attribute to a unique value to help Vue identify elements that belong to list content
```html
<li v-for="(goal, idx) in goals"> {{ idx }}. {{ goal }} </li>

<li v-for="(value, key, index) in {name: 'Max', age: 31}"> {{index}}, {{key}}, {{value}} </li>

<li v-for="num in 10">{{ num }}</li>
```

Random Value Between min and max int
```js
Math.floor(Math.random() * (max-min) + min)
```
___

- Intermediate

  Components, Component Communication, Behind the Scenes, Forms, Http, Routing, Animations
___
notes:

#### Component communication Overview

Components are used to build UIs by **combining** them

Components build **"parent-child"** relations and use "**unidirectional** data flows" for communication

#### Props (parent => child)
"**Props**" are used to **pass data from a parent to a child** component

Props should be **defined in advance**, possibly in great detail (type, required, etc)

#### Custom Events (child => parent)
"**Custom Events**" are **emitted** (via `$emit`) to trigger a method in a parent component

Custom events can **carry data** which can be used in the called method

#### Provide-inject
If data needs to be passed **across multiple components** ("pass-through"), you can use **provide/inject**

**Provide data in a parent** component, **inject it into a child** component

```js
module.exports = {
	devServer: {
		public: '',
	}
}
```

Delayed watcher
```js
watch: {
  enteredSearchTerm(val) {
    setTimeout(() => {
      if (val === this.enteredSearchTerm) {
        this.activeSearchTerm = val;
      }
    }, 300);
  }
},
```
___
- Advanced
  Vuex, Athentication(!), Deployment & Optimizations, Composition API, Re-using Code
