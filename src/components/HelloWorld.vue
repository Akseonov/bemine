<template>
  <div class="u-marginBottomX3">Hello</div>
	<svg>
		<use xlink:href="img/icons.svg#arrow-down"></use>
	</svg>
</template>

<script>
export default {
	name: "HelloWorld",
};
</script>

<style lang="scss">
.hello {
	color: red;
}

.hello::placeholder {
	color: green;
}

.hi {
	color: blue;
}
</style>
