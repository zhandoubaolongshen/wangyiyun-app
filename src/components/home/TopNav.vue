<template>
  <div class="topNav">
    <div class="topleft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>

    <div class="topContent" @click="$router.push('/search')">
      <svg class="icon" aria-hidden="true" >
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <svg class="icon" aria-hidden="true" >
        <use xlink:href="#icon-saoyisao"></use>
      </svg>
    </div>
    <div class="topRight">
      <svg class="icon" aria-hidden="true" >
        <use xlink:href="#icon-icon-Voice"></use>
      </svg>
    </div>
  </div>
  
</template>
<style lang="less" scoped>
    .topNav{
        width: 100%;
        background-color: rgb(249, 238, 249);
        height: 1.1rem;
        padding: .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .topContent{
            width: 75%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            // align-items: center;
            font-size: .36rem;
            border-radius: 20px;
            padding-inline: 10px;
            border: 1px solid gray;
            
            .icon{
                width: 0.4rem;
                height: 0.7rem;
            }

            
        }
    }
    
</style>
