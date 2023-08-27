import service  from "..";

// 获取首页轮播图的数据
export function getBanner(){
    return service({
        method:"GET",
        url:"/banner?type=2",
    })
}
//获取发现好歌单
export function getMusicList(){
    return service({
        method:"GET",
        url:"/personalized?limit=10"
    }) 
}

//搜索
export function getSearchMusic(data){
    return service({
        method:"GET",
        url:`/search?keywords=${data}`
    })
}
//热搜
export function gethotSearchMusic(){
    return service({
        method:"GET",
        url:`/search/hot`
    })
}
//热评
export function gethotComment(id,num){
    return service({
        method:"GET",
        url:`/comment/hot?id=${id}&type=0&limit=10&offset=${num}`
    })
}
//登录
export function getPhoneLogin(data){
    return service({
        method:"GET",
        //url:`/login/cellphone?phone=${data.phone}&password=${data.password}`
        url:`/login/cellphone?phone=18148891080&password=Nbkls666+`
        // url:`/login?email=tao2497894327@163.com&password=Nbkls666+`
    })
}
//获取用户详情
export function getLoginUser(data){
    return service({
        method:"GET",
        url:`/user/detail?uid=${data}`
    })
}
//

