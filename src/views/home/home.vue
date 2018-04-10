<template>
<div class="home">
  <head-top :title="title" :showUser="true">
    <span slot="logo" class="head_logo" @click="reload">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-logo"></use>
      </svg>
    </span>
  </head-top>
  <nav class="city_nav">
    <mt-cell title="当前定位城市:" value="定位不准时，请在城市列表中选择"></mt-cell>
    <mt-cell class="city_now" :title="guessCity" :to="'city/'+guessCityid" is-link></mt-cell>
  </nav>
  <section class="hot_city_container">
    <h4 class="city_title">热门城市</h4>
    <ul class="city_list clear">
      <router-link tag="li" :to="'/city/'+item.id" v-for="(item,key) in hotCity" :key="key" class="item ellipsis">{{item.name}}</router-link>
    </ul>
  </section>
  <section class="group_city_container">
    <ul class="group_main">
      <li class="group_item" v-for="(group_item,group_key) in groupCity" :key="group_key">
        <h4 class="city_title">
          {{group_key}}<span class="city_init">(按字母排序)</span>
        </h4>
        <ul class="city_container clear">
          <router-link tag="li" :to="'/city/'+item.id" class="item ellipsis" v-for="(item,key) in group_item" :key="key">{{item.name}}</router-link>
        </ul>
      </li>
    </ul>
  </section>
</div>
</template>
<script>
import header from "components/header/header";
import { cityGuess, hotcity, groupcity } from "@/service/getData";
export default {
  data() {
    return {
      title: " ",
      guessCity: "", // 当前城市
      guessCityid: "", // 当前城市id
      hotCity: [], // 热门城市列表
      groupCity: [] // 所有城市列表
    };
  },
  components: {
    headTop: header
  },
  created() {
    cityGuess().then(data => {
      this.guessCity = data.name;
      this.guessCityid = data.id;
    });
    hotcity().then(data => {
      this.hotCity = data;
    });
    groupcity().then(data => {
      this.groupCity = this._sortgroupcity(data);
    });
  },
  methods: {
    // 排序城市
    _sortgroupcity(data) {
      const groupcity = {};
      const newKey = Object.keys(data).sort();
      for (let i = 0; i < newKey.length; i++) {
        groupcity[newKey[i]] = data[newKey[i]];
      }
      return groupcity;
    },
    // 点击图标刷新页面
    reload() {
      window.location.reload();
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/mixin";
.head_logo {
  left: 10px;
  font-weight: 400;
  @include sc(42px, $fc);
  @include wh(40px, 40px);
  @include ct;
}
.city_nav {
  padding-top: 40px;
  margin-bottom: 10px;
}
.hot_city_container {
  margin-bottom: 10px;
  background-color: $fc;
  .city_list {
    li {
      float: left;
      width: 25%;
      box-sizing: border-box;
      border-right: 1px solid $bc;
      border-bottom: 1px solid $bc;
      text-align: center;
      min-height: 38px;
      line-height: 38px;
      font-size: 14px;
      color: $blue;
      padding: 0 5px;
      &:nth-child(4n) {
        border-right: 0;
      }
    }
  }
}

.group_city_container {
  .group_item {
    margin-bottom: 10px;
    background-color: $fc;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .city_container {
    .item {
      float: left;
      width: 25%;
      box-sizing: border-box;
      border-right: 1px solid $bc;
      border-bottom: 1px solid $bc;
      text-align: center;
      min-height: 38px;
      line-height: 38px;
      font-size: 14px;
      padding: 0 5px;
      color: $color;
      &:nth-child(4n) {
        border-right: 0;
      }
    }
  }
}
.city_title {
  min-height: 38px;
  line-height: 38px;
  padding: 0 10px;
  font-size: 14px;
  color: #666;
  border-top: 1px solid $bc;
  border-bottom: 1px solid $bc;
}
</style>
<style lang="scss">
.city_nav {
  .mint-cell {
    min-height: 38px;
  }
  .mint-cell-wrapper {
    font-size: 13px;
  }
}
</style>
