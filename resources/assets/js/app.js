
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */

Vue.component('example', require('./components/Example.vue'));

var app = new Vue({
	el: '#vueapp',
	data:{
		item: []
	}
});

app.$http.get('http://falkor-cda.bastian.globo.com/feeds/5e9b983f-dbf6-4eee-b7c7-62cd0f4bc14d/posts/page/1').then(response => {
	// this.items = response.body;
	console.log(response);
},response => {
	console.log("erro");
});
