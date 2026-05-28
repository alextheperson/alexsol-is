<script lang="ts">
	export let iconName: string;
</script>

<i class="nf {iconName}"></i>

<style defer>
	/* We can defer this, because the icons aren't immediately visible usually, and the font is really big */
	@import 'https://www.nerdfonts.com/assets/css/webfont.css';
</style>
