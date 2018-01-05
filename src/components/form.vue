<template lang="pug">
	div
		div
			button(@click="emitClick") Клик!
</template>

<script>
	export default {
		props: ['testProp'],
		data(){
			return{
				text: '',
				payment: ["Мир"],
				sex: ''
			}
		},
		methods: {
			emitClick(){
				this.$emit('buttonWasClicked','uo!')
			}
		},
		mounted(){
			this.text = 'text from model!!!'
		}
	}
</script>