<template>
  <div id="app">
    <transition name="router-slide" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
			</keep-alive>
    </transition>
    <transition name="router-slide" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive" />
		</transition>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "./assets/styles/common";
.router-slide-enter-active,
.router-slide-leave-active{
  transition: all .5s ease;
}
.router-slide-enter,
.router-slide-leave-to
{
  opacity: 0;
}
</style>
