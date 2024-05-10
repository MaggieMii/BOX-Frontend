import { View, Text, Image } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'
import search from '../../assets/images/nearby/search.png'
import more from '../../assets/images/nearby/more.png'

import link from '../../assets/images/nearby/link.png'
import onlink from '../../assets/images/nearby/onlink.png'

import publish from '../../assets/images/nearby/publish.png'

import { useState } from 'react'
import { AtNavBar } from 'taro-ui'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })
  const [selectNumber,setSelectNumber] = useState<number>(1);

  const clickIt = (item) => {
    // 使用 map 方法更新 postList 数组中相应元素的 isClick 属性
    setPostList(postList.map(postItem => {
      if (postItem === item) {
        return { ...postItem, isClick: !postItem.isClick };
      }
      return postItem;
    }));
  };

  const [topiclist,setTopicList] = useState( [{
    name: "环保"
  },{
    name: "减碳"
  },{
    name: "遇见食光的那一天"
  },{
    name: "美味"
  },{
    name: "省钱小妙招"
  }]);

  const changeSelect = (index:number)=>{
    if(index !== selectNumber){
      setSelectNumber(index);
    }
  }

  const [postList,setPostList] = useState([
    {
      image:'https://img.js.design/assets/img/65b79950f72159ba118a4012.png#b1793199b84bf534389796f8441976a1',
      name:'沉迷学习的可颂面包',
      level: 3,
      title: "招募令发布啦，我们需要你！",
      like:10,
      look:'https://img.js.design/assets/img/65b79950f72159ba118a4012.png#b1793199b84bf534389796f8441976a1',
      isClick:false
    },{
      image:'https://img.js.design/assets/img/65b9e749b21b784879a08537.jpg#cf51f39cf49425167a74701a3a8d59da',
      name:'喜欢骑行的丝绒蛋糕',
      level: 2,
      title: "终于喝到了心心念念的···",
      like:10,
      look:'https://img.js.design/assets/img/65b79950f72159ba118a4012.png#b1793199b84bf534389796f8441976a1',
      isClick:true
     },{
      image:'https://img.js.design/assets/img/65b664c1a9ade29c0bd4be62.jpg#0a767bcda0be2bc94e7b3707f16f93a5',
      name:'喜欢咖啡的牛角面包',
      level: 1,
      title: "第一次尝试剩菜盲盒，居然还不错。",
      like:15,
      look:'https://img.js.design/assets/img/65ba4c06352589f4b66c871c.jpeg#ad122a7d2ae041ecd7c848de8c3c682c',
      isClick:false
    },{
      image:'https://img.js.design/assets/img/65b9e76c475648abca00f39b.jpg#0bf765331c50b0eb1226c427f5e46f60',
      name:'喜欢骑行的丝绒蛋糕',
      level: 1,
      title: "核桃面包万岁！内馅超级丰富",
      like:15,
      look:'https://img.js.design/assets/img/65ba5345cfef76bc2564fdd8.jpg#bee0558f4dddf5b575f72e30c18cc9b1',
      isClick:false
    },
    {
      image:'https://img.js.design/assets/img/65b9e6b516f49af6fef05f2c.jpg#d96f966f0befe8395860fae8e8048abf',
      name:'热爱骑行的丝绒蛋糕',
      level: 3,
      title: "童年的蜂蜜小面包！小时候的最爱！",
      like:10,
      look:'https://img.js.design/assets/img/65ba5345cfef76bc2564fdd8.jpg#bee0558f4dddf5b575f72e30c18cc9b1',
      isClick:false
    },{
      image:'https://img.js.design/assets/img/65b9e81dcdb6ea3264a1a668.jpg#04770ecb64c85b1b24c47fa6a31f2de8',
      name:'沉迷学习的可颂面包',
      level: 3,
      title: "招募令发布啦，我们需要你！",
      like:10,
      look:'https://img.js.design/assets/img/65ba5345cfef76bc2564fdd8.jpg#bee0558f4dddf5b575f72e30c18cc9b1',
      isClick:false
    }
  ]);

  const toDetails = ()=>{
    Taro.navigateTo({
      url:`/pages/nearbyDetail/index`
    })
  }

  const toSearch = ()=>{
    Taro.navigateTo({
      url:`/pages/nearbySearch/index`
    })
  }

  const toPublish = ()=>{
    Taro.navigateTo({
      url:`/pages/nearbyPublish/index`
    })
  }

  return (
  <>
    <View className='index'>
      {/* <View style={'position:sticky; top:0;z-index:999;'}> */}
      {/* <AtNavBar
        color='#000'
        leftIconType = 'search'
        title='与你的食光'
        className='bar'
      /> */}
      <View className='navbar'>
        <Image src={search} onClick={()=>toSearch()}></Image>
        <Text className='title'>与你的食光</Text>
        <View className='select'>
          <View className={selectNumber===1?'isClick':''} onClick={()=>changeSelect(1)}>推荐</View>
          <View className={selectNumber===2?'isClick':''} onClick={()=>changeSelect(2)}>热门</View>
          <View className={selectNumber===3?'isClick':''} onClick={()=>changeSelect(3)}>本地</View>
        </View>
      </View>
      <View className='show'>
      <View className='hot'>
        <View className='hottest'>最热话题</View>
        {
          topiclist.map(item=>(
            <View className='hot-item'>#{item.name}</View>
          ))
        }
        <View>
          <Image src={more}></Image>
        </View>
      </View>
   
      </View>
      <View className='posts-display'>
         {postList.length > 0 ?
          postList.map(item=>(
            <View className='post'>
              <View className='showImage' onClick={()=>toDetails()}>
                <Image src={item.image}></Image>
              </View>
              <View className='post-title'>{item.title}</View>
              <View className='user'>
                {/* <AtAvatar className='avatar' circle image={item.look}></AtAvatar> */}
                {<Image src={item.look} className='avatar'></Image>}
                <View>{item.name}</View>
                <View className='level'>LV{item.level}</View>
                <View className='like' onClick={()=>clickIt(item)}>
                  <Image className='link' src={item.isClick?onlink:link} ></Image>
                </View>
                <View className='like-number'>{item.like}</View>
              </View>
            </View>
          ))
          :<View className='no-content'>暂时没有更多内容~</View>
         }
      </View>
      <Image src={publish} className='publish' onClick={()=>toPublish()}></Image>
      </View>
  </>
  )
}
