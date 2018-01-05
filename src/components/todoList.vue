<template lang="pug">
	.todo-list(v-if="todos.length")
		.content
			ul.list
				li.item(v-for="todo in filteredItems")
					todo-item(
						:todo="todo"
						@checkTodo="checkTodo"
						@removeTodo="removeTodo"
					)
		.footer
			.footer-content
				.counter Кол-во заданий: {{todos.length}}
				.filter
					button(type="button" @click="applyFilter('all')"  :class="{active: filter == 'all'}") All
					button(type="button" @click="applyFilter('active')"  :class="{active: filter == 'active'}") Active
					button(type="button" @click="applyFilter('completed')"  :class="{active: filter == 'completed'}") Completed
</template>

<script>
	import todoItem from './todoItem.vue'
	export default{
		data(){
			return {
				filter: 'all'
			}
		},

		props:{
			todos: Array
		},


		components:{
			todoItem
		},

		computed:{
			filteredItems(){
				switch(this.filter){
					case 'all':
						return this.todos
					case 'active':
						return this.todos.filter(item => !item.checked)
					case 'completed':
						return this.todos.filter(item => item.checked)
				}
			}
		},

		methods:{
			checkTodo(todo){
				this.$emit('checkTodo',todo);
			},
			removeTodo(todoId){
				this.$emit('removeTodo', todoId)
			},
			applyFilter(filterName){
				this.filter = filterName
			}
		}
	}
</script>

<style lang="scss" src="styles/todoList.scss"></style>