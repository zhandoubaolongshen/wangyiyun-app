<template>
  <div class="iconList">
    <div  class="iconItem">
      <svg  class="icon" aria-hidden="true">
        <use xlink:href="#icon-meirituijian1"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="iconItem" >
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sirenFM"></use>
      </svg>
      <span >私人漫游</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paixingbang"></use>
      </svg>
      <span>排行榜</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-youshengshu"></use>
      </svg>
      <span>有声书</span>
    </div>
  </div>
</template>
<style lang="less" scoped>

    .iconList{
      color: rgb(92, 92, 92);
        width: 100%;
        height: 2rem;
        margin-top: .2rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .iconItem{
            width: 25%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            
            .icon{
                width: 0.8rem;
                height: 0.8rem;
            }
        }
    }
    
</style>
<script>

</script>