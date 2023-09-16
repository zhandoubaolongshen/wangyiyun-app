<template>
  <div>
  <router-view/>
  <FooterMusic v-show="$store.state.isFooterMusic"/>
  <BottomNav v-show="!$store.state.detailShow && $store.state.isFooterMusic"/>
  </div>
</template>
<script>
import FooterMusic from "@/components/item/FooterMusic.vue"
import BottomNav from "@/components/home/BottomNav.vue";
export default {
  components:{
    FooterMusic,
    BottomNav
  }
}
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
.icon{
  width: .5rem;
  height: .5rem;
}
a{
  color: black;
}
</style>
