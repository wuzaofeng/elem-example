<template>
  <div class="city">
    <head-top :title="cityname" :goBack="true">
      <router-link to="/home" slot="changeCity" class="change_city">切换城市</router-link>
    </head-top>
  </div>
</template>
<script>
import header from "components/header/header";
import { currentcity } from "@/service/getData";
export default {
  data() {
    return {
      cityname: "", // 所在城市
      cityid: 0 // 获取传过来的值
    };
  },
  components: {
    headTop: header
  },
  created() {
    this.cityid = this.$route.params.id;
    currentcity(this.cityid).then(data => {
      this.cityname = data.name;
    });
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/mixin.scss";
.change_city{
  @include sc(13px,#fff);
}
</style>
