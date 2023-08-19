<template>
    <div >
      <div class="infoUserTop">
        <div class="topleft">
            <svg class="icon liebiao" aria-hidden="true" @click="backhome()">
            <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <h3 style="display: inline;padding-left: 0.2rem;">评论</h3></div>
        
        <div>
            <svg class="icon" aria-hidden="true" >
            <use xlink:href="#icon-nav-offlineevent"></use>
            </svg>
            <svg class="icon" aria-hidden="true" >
            <use xlink:href="#icon-fenxiang"></use>
            </svg>
        </div>
      </div>

      <div class="footerLeft" >
        <img :src="playList[playListIndex].al.picUrl" alt="" />
        <div class="ellipsis">
            <p style="display: inline;">{{ playList[playListIndex].name }}</p>
            <span style="color: grey;" 
            v-for="(item1, index) in playList[playListIndex].artists" :key="index">-{{
                item1.name
                }}
            </span>
        </div>
    </div>
    <hr  size="8" color=Gainsboro>

      <div class="comments">

        <div class="commenttop">
            <h4>评论区</h4>
            <div class="commenttopright">
                <p style="font-weight: 100;">推荐</p>
                <p style="font-weight: 800;">最热</p>
                <p style="font-weight: 100;">最新</p>
            </div>
        </div>

        <div class="comment" v-for="(item, i) in commentlists" :key="i">

                <div class="ctop">
                    <div class="ctopleft">
                        <img :src="item.user.avatarUrl" alt="" />
                        <div class="leftfont">
                            <p>{{ item.user.nickname }}</p>
                            <p style="font-size: xx-small;color: gray;">
                                {{ item.timeStr }}
                            </p>
                        </div>
                        
                    </div>
                        
                    <div class="ctopright">
                        <p style="font-size: small;color: gray;">
                            {{ item.likedCount }}
                        </p>&nbsp;
                        <svg class="icon" aria-hidden="true" >
                        <use xlink:href="#icon-aixin"></use>
                        </svg>
                    </div>                
                </div>
                    <div class="cbottom">
                        <p>{{ item.content }}</p>
                    </div>                  
                <hr>        
        </div>
      </div>
    </div>
  </template>
  <script>
  
  import { mapMutations, mapState } from "vuex";
  import { gethotComment } from "@/request/api/home.js";
export default {
  data() {
    return {
      interVal: 0,
      commentlists:[],
      isScrolling: false,
      offsetnum:0
    };
  },
  computed: {
    ...mapState(["playList", "playListIndex", "isbtnShow", "detailShow"]),
  },
  mounted(){
    console.log("id",this.playList[this.playListIndex].id)
    this.getcomment(this.playList[this.playListIndex].id,0)
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
  window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    backhome: function () {
      window.removeEventListener('scroll', this.handleScroll);
      this.$router.go(-1)
    },
    getcomment:async function (id,num) {
      let res = await gethotComment(id,num);
    //   console.log(res);
      this.commentlists =[ ...this.commentlists,...res.data.hotComments];
      console.log("热评列表",this.commentlists)
    },
    handleScroll() {
    if (this.isScrolling) return; // 如果正在执行滚动操作，直接返回  
    // 判断滚动条是否到达页面底部
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.isScrolling = true; // 将标志位设置为true，表示正在执行滚动操作
      // 触发你想执行的函数或方法
      console.log(window.innerHeight,window.scrollY,document.body.offsetHeight)
      this.doSomething();
    }
    },
    doSomething() {
      // 在滑动到底部时执行的具体操作
      setTimeout(() => {
      this.isScrolling = false; // 延迟重置标志位，以防止立即再次触发滚动事件
      console.log("页面到底了")
      this.offsetnum+=10
      this.getcomment(this.playList[this.playListIndex].id,this.offsetnum)
    }, 500); // 设置一个适当的延迟时间，根据实际情况进行调整
      
    }
  }
};
  </script>
  <style lang="less" scoped>
  .infoUserTop{
    display: flex;
    height: 1.1rem;
    position: fixed;
    padding-top: 0.2rem;
    justify-content: space-between;
    background-color: #fff;
    width: 100%;
    .icon{
        padding: 0.1rem;
        width:0.8rem;
        height: 0.8rem;
    }
    .topleft{
        display: flex;
        align-items: center;
    }
  }
  .footerLeft {
    width:75%;
    height: 100%;
    display: flex;
    
    // justify-content: space-between;
    align-items: center;
    padding: 0.1rem;
    margin-left: 0.1rem;
    padding-top:1.2rem;
    .ellipsis{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      border:0.2rem solid black;
    }
    p{
        margin: 0.2rem;
    }
  }
  
  .comments{
    
    border-radius: 0.3rem;
    // height: 20rem;
    margin: 0.2rem;
    padding: 0.1rem;
    img {
      width: 0.8rem;
      height:0.8rem;
      border-radius: 50%;
      
    }
    .commenttop{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.25rem;
        .commenttopright{
            p{
                display: inline;
                padding-right: 0.2rem;
            }
        }
    }  
    .comment{
        margin:0.1rem;
            .ctop{
                
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .ctopleft{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .leftfont{
                        margin-left: 0.1rem;
                    }
                }
                .ctopright{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
            }
            .cbottom{
                margin-top:0.2rem;
                margin-left: 0.9rem;
                margin-bottom:0.2rem;
            }
        }
    
  }

  
  
  
  
  </style>