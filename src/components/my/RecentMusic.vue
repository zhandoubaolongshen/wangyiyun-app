<template>
    <div class="box">
        <div class="top1">
            <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                <use xlink:href="#icon-zuojiantou"></use>
            </svg>
            <h2>最近播放</h2>
        </div>
        <div class="top2">
            <p style="font-size: larger;font-weight: 700;
        border-bottom: 0.1rem solid red;">歌曲</p>
            <p>声音</p>
            <p>有声书</p>
            <p>直播</p>
        </div>
        <hr>
        <div class="itemListTop">
            <div class="listLeft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zuijinbofang"></use>
            </svg>
            <span
                >播放全部<span>({{ $store.state.playList.length }})</span></span
            >
            </div>
            <div class="listRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-31liebiao"></use>
            </svg>
            </div>
        </div>
        <div class="itemList">
            <div class="item" v-for="(item, i) in $store.state.playList.slice().reverse()" :key="i">
            <div class="itemLeft" @click="playMusic($store.state.playList.length-i-1)"><!--实现倒序播放列表-->
                <div>
                <p>{{ item.name }}</p>
                <span v-for="(item1, index) in item.artists" :key="index">{{
                    item1.name
                }}</span>
                </div>
            </div>
            <div class="itemRight">
                <svg class="icon bofang" aria-hidden="true" v-if='item.mv !=0'>
                <use xlink:href="#icon-shipin"></use>
                </svg>
                <svg class="icon liebiao" aria-hidden="true">
                <use xlink:href="#icon-icon_665"></use>
                </svg>
            </div>
            </div>
        </div>
    </div>
  </template>
  <script>
  import { mapMutations } from 'vuex';
  export default {
    methods:{
    playMusic:function(i){
      //this.updatePlayList(this.itemList)
      this.updatePlayListIndex(i)
    },
    ...mapMutations(['updatePlayList','updatePlayListIndex'])
  }
   
  };
  </script>
  <style lang="less" scoped>
  .top1{
    display: flex;
    align-items: center;
    h2{
        margin-left: 0.2rem;
    }
  }
  .top2{
    margin-top:0.5rem;
    margin-bottom:0.5rem;
    display: flex;
    justify-content: space-around;
  }
  .box {
    width: 100%;
    height: 10rem;
    background-color: #fff;
    padding: 0 0.2rem;
    margin-top: 0.2rem;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    .itemListTop {
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .listLeft {
        width: 3rem;
        height: 100%;
        display: flex;  
        align-items: center;
        .icon {           
          width: 0.6rem;
          height: 0.6rem;
        }
        span {
          margin-left: 0.1rem;
          font-weight: 600;
          font-size: 0.35rem;
          span {
            font-weight: 400;
            font-size: 0.34rem;
            color: #999;
          }
        }
      }
      .listRight {
        display: flex;
        align-items: center;
        
        border-radius: 0.4rem;
      }
    }
    .itemList {
      width: 100%;
      .item {
        width: 100%;
        height: 1.3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .itemLeft {
          width: 85%;
          height: 100%;
          display: flex;
          align-items: center;
          div {
            p {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-weight: 550;
            }
            span{
              font-weight: 400;
              font-size: .24rem;
              color: #999;
              
            }
            margin-left: 0.3rem;
          }
        }
        .itemRight{
          width: 20%;
          height: 100%;
          display: flex;
          // justify-content: space-between;
          align-items: center;
          position: relative;
          .icon{
            fill: #999;
          }
           .bofang{
              position: absolute;
              left: 0;
            }
           .liebiao{
              position: absolute;
              right: 0;
            }
        }
      }
    }
  }
  </style>