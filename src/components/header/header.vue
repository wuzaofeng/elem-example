<template>
   <mt-header :title="title" :fixed="fixed" v-if="title">
    <div slot="left" v-if="left">
      <mt-button icon="back" v-if="goBack" @click="back"></mt-button>
      <slot name="logo"></slot>
    </div>
    <div slot="right" v-if="right">
      <div v-if="showUser">
        <svg class="user_avatar" v-if="userInfo">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
        </svg>
        <mt-button v-else>登录|注册</mt-button>
      </div>
      <slot name="changeCity"></slot>
    </div>
  </mt-header>
</template>
<script>
export default {
  data() {
    return {
      unlogin: false,
      userInfo: null
    };
  },
  props: {
    fixed: {
      type: Boolean,
      default: true
    },
    left: {
      type: Boolean,
      default: true
    },
    right: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: "title"
    },
    goBack: {
      type: Boolean,
      default: false
    },
    showUser: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style lang="scss" scoped>
.mint-header .mint-button {
  color: #fff;
}
</style>
