<template>
    <div class="iconList">
      
      <div  class="iconItem" @click="$router.push('/')">
        <svg  class="icon" aria-hidden="true">
          <use xlink:href="#icon-wangyiyunyinle"></use>
        </svg>
        <span>发现</span>
      </div>
      <div class="iconItem" >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-boke"></use>
        </svg>
        <span >博客</span>
      </div>
      <div class="iconItem" @click="$router.push('/infoUser')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-inboxbeifen8"></use>
        </svg>
        <span>我的</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fensi"></use>
        </svg>
        <span>关注</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shequ"></use>
        </svg>
        <span>社区</span>
      </div>
    </div>
  </template>
  <style lang="less" scoped>
  
      .iconList{
          position: fixed;
          background-color: white;
          width: 100%;
          height: 1.4rem;
          display: flex;
          bottom: 0;
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