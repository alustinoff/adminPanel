<template lang="pug">
	.todo
		todo-input(
			@addTodo="addNewTodo"
		)
		todo-list(
			:todos="todos"
			@checkTodo="checkTodo"
			@removeTodo="removeTodo"
		)
</template>

<script>
	import todoInput from './todoinput.vue'
	import todoList from './todoList.vue'

	export default{
		data(){
			return{
				todos:[]
			}
		},
		methods:{
			addNewTodo(todo){
				this.todos.push(todo)
			},
			checkTodo(todo){
				this.todos = this.todos.map(item => item.id === todo.id ? todo : item)
			},
			removeTodo(todoID){
				this.todos = this.todos.filter(item => item.id !== todoID)
			}
		},
		components:{
			todoInput, todoList
		}
	}
</script>