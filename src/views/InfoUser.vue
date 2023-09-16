<template>
  <div >
    <div class="infoUserTop">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
    <div class="bord">
      <img src="../assets/01.jpg" alt="">
      
      <h2>立即登录></h2>
    </div>


    <div class="bord1">
        <div class="iconList">
        <div  class="iconItem">
        <svg  class="icon" aria-hidden="true" @click="$router.push('/recentmusic')">
          <use xlink:href="#icon-zuijinbofang"></use>
        </svg>
        <span>最近播放</span>
      </div>
        <div class="iconItem" >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yinle"></use>
          </svg>
          <span >本地下载</span>
        </div>
        <div class="iconItem">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yunpan"></use>
          </svg>
          <span>云盘</span>
        </div>
        <div class="iconItem">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yigou"></use>
          </svg>
          <span>已购</span>
        </div>
        <br>
        </div>
        <div class="iconList">
        <div  class="iconItem">
        <svg  class="icon" aria-hidden="true">
          <use xlink:href="#icon-weibiaoti--"></use>
        </svg>
        <span>我的好友</span>
      </div>
        <div class="iconItem" >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shoucang-yishoucang"></use>
          </svg>
          <span >收藏和赞</span>
        </div>
        <div class="iconItem">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-boke"></use>
          </svg>
          <span>我的博客</span>
        </div>
        <div class="iconItem">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fuwujieshao"></use>
          </svg>
          <span>乐迷团</span>
        </div>
        <br>
        </div>
    </div>
    
    <div class="bord2" id="bord2">
        <img src="https://p1.music.126.net/2f6UgY8Jc0Dy6jufMdIZeQ==/109951164966568495.jpg" alt="">
        <p>我喜欢的音乐</p>
        <div class="bord3">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-icon_xindong"></use>
          </svg>心动模式
        </div>
    </div>

  </div>
</template>
<script>

export default {
  

};
</script>
<style lang="less" scoped>
.infoUserTop{
  display: flex;
  margin: 0.2rem;
  justify-content: space-between;
}
.bord{
  border: 1px solid gray;
  border-radius: 0.3rem;
  height: 2.5rem;
  margin: 0.3rem;
  margin-top: 2rem;
   
  h2{
    position: relative;
    top: -35%;
    text-align: center;
    // left: 85%;
    // transform: translate(-50%, -50%);
  }
  img{
    width: 2rem;
    border-radius: 50%;
    position: relative;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.bord1{
  border: 1px solid gray;
  border-radius: 0.3rem;
  height: 4rem;
  margin: 0.3rem;
  padding: 0.2rem;
  
}
.bord2{
  border: 1px solid gray;
  border-radius: 0.3rem;
  height: 2rem;
  margin: 0.3rem;
  padding: 0.1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 4rem;
  img{
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 0.2rem;
  }
}

.bord3{
  border: 1px solid gray;
  border-radius: 0.3rem;
  // height: 4rem;
  margin: 0.3rem;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  
}

.iconList{
      color: rgb(92, 92, 92);
        width: 100%;
        height: 2rem;
        margin-top: .1rem;
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