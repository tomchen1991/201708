var app1 = new Vue({
	el: "#insert",
	data: {
		message: ""
	},
	methods: {
		insertTodo: function(){
			if(this.message){
				app2.todos.push({ 
						text: this.message, 
						check: false,
						classObject: {
							"hidden": false
						}
					});
				this.message="";
			}
		} 
	}
})

var app2 = new Vue({
	el: "#todoList",
	data: {
		todos: []
	},
	methods: {
		deleteThis: function (ev){
			var ev = ev || window.event;
			var t = ev.srcElement || ev.target;
			t.parentNode.parentNode.removeChild(t.parentNode);
		},
		showAll: function () {
			for(var i in this.todos) {
				this.todos[i].classObject.hidden=false;
			}
		},
		showDone: function () {
			for(var i in this.todos) {
				this.todos[i].classObject.hidden=!this.todos[i].check;
			}
		},
		showRemain: function () {
			for(var i in this.todos) {
				this.todos[i].classObject.hidden=this.todos[i].check;
			}
		}
	}
})