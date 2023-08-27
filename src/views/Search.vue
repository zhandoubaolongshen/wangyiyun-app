<template>
  <div>
    <div class="searchTop">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>

      <div class="topContent" @click="$router.push('/search')">
        <svg class="icon" aria-hidden="true" >
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <input
        type="text"
        placeholder="陈奕迅"
        v-model="searchKey"
        @keydown.enter="enterKey"
      />    
      </div>
      <p>搜索</p>
    </div>
  <div class="searchHistory">
    <span class="searchSpan">搜索历史</span>
    <svg class="icon" aria-hidden="true" @click="delHistory">
      <use xlink:href="#icon-shanchu"></use>
    </svg>
    <br><br>
    <span
      v-for="item in keyWorldList"
      :key="item"
      class="spanKey"
      @click="searchHistory(item)"
    >
      {{ item }}
    </span>
    
  </div>

   <div class="itemList">
      <div class="item" v-for="(item, i) in searchList" :key="i">
        <div class="itemLeft" @click="updateIndex(item)">
          <span class="leftSpan">{{ i + 1 }}</span>
          <div>
            <p>{{ item.name }}</p>
            <span v-for="(item1, index) in item.artists" :key="index">{{
              item1.name
            }}</span>
          </div>
        </div>
        <div class="itemRight">
          <svg class="icon bofang" aria-hidden="true" v-if='item.mvid !=0'>
            <use xlink:href="#icon-shipin"></use>
          </svg>
          <svg class="icon liebiao" aria-hidden="true">
            <use xlink:href="#icon-31liebiao"></use>
          </svg>
        </div>
      </div>
    </div>

    <div class="hotsearchList">
      <h3 style="margin-left: 0.2rem;">热搜榜</h3>
      <hr>
      <div  v-for="(item, i) in hotsearchList" :key="i">
          <div  class="hotlist">
            <span style="display: inline;" @click="searchHistory(item.first )"
            >{{ i + 1 }}    {{ item.first }}</span>
          </div>  
      </div>
    </div>
  </div>
</template>
<script>
import { getSearchMusic,gethotSearchMusic } from "@/request/api/home.js";
export default {
  data() {
    return {
      keyWorldList: [],
      searchKey: "",
      searchList: [],
      hotsearchList:[]
    };
  },
  mounted() {
    // var aaa=gethotSearchMusic()
    // console.log("热搜",aaa)
    this.hotsearch()

    this.keyWorldList = JSON.parse(localStorage.getItem("keyWorldList"))
      ? JSON.parse(localStorage.getItem("keyWorldList"))
      : [];
  },
  methods: {
    enterKey: async function () {
      if (this.searchKey !== "") {
        this.keyWorldList.unshift(this.searchKey);
        //   去重
        this.keyWorldList = [...new Set(this.keyWorldList)];
        // 固定长度
        if (this.keyWorldList.length > 10) {
          this.keyWorldList.splice(this.keyWorldList.length - 1, 1);
        }
        localStorage.setItem("keyWorldList", JSON.stringify(this.keyWorldList));
        let res = await getSearchMusic(this.searchKey);
        // console.log(res);
        this.searchList = res.data.result.songs;
        console.log("搜索列表",this.searchList)
        this.searchKey = "";
      }
    },
    delHistory: function () {
      localStorage.removeItem("keyWorldList");
      this.keyWorldList = [];
    },
    searchHistory:async function (item) {
      let res = await getSearchMusic(item);
    //   console.log(res);
      this.searchList = res.data.result.songs;
    },
    hotsearch:async function () {
      let res = await gethotSearchMusic();
    //   console.log(res);
      this.hotsearchList = res.data.result.hots;
      console.log("热搜列表",this.hotsearchList)
    },
    updateIndex:function(item){
      console.log(item)
        item.al=item.album
        item.al.picUrl=item.album.artist.img1v1Url
        this.$store.commit("pushPlayList",item)
        this.$store.commit("updatePlayListIndex",this.$store.state.playList.length-1)
        
    }
  },
};
</script>
<style lang="less" scoped>
.searchTop {
        width: 100%;
        font-size: larger;
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
            border-radius: 1rem;
            padding-inline: 10px;
            border: 1px solid gray;
            
            .icon{
                width: 0.9rem;
                height: 0.7rem;
            }           
        }
  input {
    border: none;
    padding: 0.05rem;
  }
}
.searchHistory {
  width: 100%;
  padding: 0.2rem;
  position: relative;
  .searchSpan {
    font-weight: 700;
  }
  .spanKey {
    padding: 0.1rem 0.2rem;
    background-color: rgb(228, 227, 227);
    border-radius: 0.4rem;
    margin: 0.1rem 0.2rem;
    display: inline-block;
  }
  .icon {
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    right: 0.2rem;
  }
}
 .itemList {
    width: 100%;
    padding: .2rem;
    
    .item {
      width: 100%;
      height: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .itemLeft {
        width: 85%;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: larger;
        .leftSpan {
          display: inline-block;
          width: 0.2rem;
          text-align: center;
          
        }
        div {
          p {
            width: 4.54rem;
            height: .48rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 700;
          }
          span{
            font-weight: 400;
            font-size: .30rem;
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
  
  .hotsearchList{
    border:1px solid gray;
    width: 5rem;
    background-color: rgb(253, 243, 243);
    font-size: large;
    margin-left: 0.5rem;
    padding: 0.1rem;
    border-radius: 0.1rem;
    margin-bottom: 3rem;
  }
  .hotlist{
    margin: 0.2rem;
  }
</style>