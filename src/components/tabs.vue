<template lang="pug">
	.tab
		ul.list
			li.item(v-for="tab in tabs")
				router-link(:to="tab.href" exact-active-class="active-tab").link {{tab.name}}
</template>

<script>
export default{
	data(){
		return {
			tabs: [
				{name: 'Движение денежных средств', href: "/transactions"},
				{name: 'Заказы', href: "/orders"},
				{name: 'Платежи', href: "/payments"},
				{name: 'Возвраты', href: "/backs"},
				{name: 'Пользователь', href: "/user"},
				{name: 'Клиент', href: "/client"}
			]
		}
	}
}
</script>

<style src="../styles/components/tabs.scss" lang="scss"></style>