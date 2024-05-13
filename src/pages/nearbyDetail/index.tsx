import { View, Text, Image, Swiper, SwiperItem, Input, Button } from '@tarojs/components'
import './index.scss'

import back from '../../assets/images/nearby/back.png'
import home from '../../assets/images/nearby/home.png'

import grade from '../../assets/images/nearby/grade.png'
import more from '../../assets/images/nearby/more1.png'

import like from '../../assets/images/nearby/link.png'
import onlike from '../../assets/images/nearby/onlink.png'
import commentimg from '../../assets/images/nearby/comment.png'

import { useState } from 'react'
import Taro from '@tarojs/taro'

function TabBar(){
  const initialValue = "快来发表评论吧~"
  const [comment,setComment] = useState<string>(initialValue);
  const [isClick,setIsClick] = useState<boolean>(false);

  const handleChange = (evt:any):void => {
    const text: string = evt.target.value;
    setComment(text);
  }

  const handleSubmit = ():void =>{
    setComment(initialValue);
  }

  const handleBlur = ():void => {
    if(comment == ''){
      setComment(initialValue)
    }
  }

  return(
    <>
    <View className='tabbar'>
      <View className='input'>
        <Input
        className='atinput'
        value={comment}
        onInput={(evt)=>handleChange(evt)}
        onClick={()=>setComment('')}
        onBlur={()=>handleBlur()}></Input>
        <Button onClick={()=>handleSubmit()}>提交</Button>
      </View>
      <View className='postimg'>
        <View className='postlink'>
          <Image src={isClick?onlike:like} onClick={()=>setIsClick(!isClick)}></Image>
          <Text>10</Text>
        </View>
        <View className='postcomment'>
          <Image src={commentimg}></Image>
          <Text>3</Text>
        </View>
      </View>
    </View>
    </>
  )
}

export default function Index() {

  const [commentList,setCommentList] = useState([{
    userImg: `https://img.js.design/assets/img/66180e9bd9c44988444b0347.jpg#3e9fa812d5992c762e18db8b2d190015`,
    username: "热爱画画的吐司面包",
    level: 1,
    like: 13,
    date: "2023-10-24",
    text: "同意同意！真的好好吃！",
    isClick: false
  },{
    userImg: `https://img.js.design/assets/img/66180edb3eae7ee7e57582de.webp#05afdc3f5431bbec4494643480666889`,
    username: "喜欢看书的珍珠奶茶",
    level: 3,
    like: 5,
    date: "2023-11-22",
    text: "上次开到一个超级丰富的盲盒！",
    isClick: true
  },{
    userImg: `https://img.js.design/assets/img/661d2acbba500924f56829c4.jpg#323b6b10777b86b5ddcf0330225d135a`,
    username: "喜欢游泳的牛角面包",
    level: 2,
    like: 8,
    date: "2023-10-12",
    text: "我比较喜欢他们家的脆皮蜂蜜蛋糕！我觉得是世界上最好吃的脆皮蜂蜜蛋糕。",
    isClick: true
  }])

  const clickIt = (item:any) => {
    setCommentList(commentList.map(commentItem => {
      if (commentItem === item) {
        return { ...commentItem, isClick: !commentItem.isClick };
      }
      return commentItem;
    }));
  };

  return (
    <>
    <View className='index'>
      <View className='navbar'>
        <Image src={back} className='back' onClick={()=>Taro.navigateBack()}></Image>
        <Image src={home} className='home'></Image>
          <Text>详情</Text>
      </View>
      <View className='postInfo'>
        <Image src='https://img.js.design/assets/img/65ba53e4f8365ab19e29addd.jpg#84e93f9b13c29a5279ce7366c1f8c132'></Image>
        <Text className='postName'>热爱骑行的丝绒蛋糕</Text>
        <Text className='postLevel'>Lv 3</Text>
      </View>
      <View className='display'>
       <View className='post-display'>
        <Swiper
          className='swiper'
          indicatorColor='#999'>
          <SwiperItem>
            <Image src='https://img.js.design/assets/img/65b9e6b516f49af6fef05f2c.jpg#d96f966f0befe8395860fae8e8048abf'></Image>
          </SwiperItem>
        </Swiper>
        <View className='post'>
          <View className='postTop'>
            <View className='price'>
              <View className='priceNow'>￥5.9</View>
              <View className='before'>￥18.9</View>
            </View>
            <View className='content'>
              <View className='title'>童年的蜂蜜小面包！小时候的最爱！</View>
              <View className='postText'>小时候能吃上一个真的是要幸福一整天！这个是我心中TOP1的面包，超级好吃。好幸运在盲盒里面开出来这个！</View>
            </View>
            <Text className='more'>展开全文</Text>
          </View>
          <View className='postBottom'>
            <View className='topic'>
              <Text>#环保</Text>
              <Text>#面包</Text>
            </View>
            <View className='postDate'>2022-10-12</View>
          </View>
        </View>
        <View className='store'>
          <Image className='storeImg' src='https://img.js.design/assets/img/65b9e941cdb6ea3264a1da96.jpg#8d4568f8f474028d552f296d9b97ba7f'></Image>
          <View>
            <View className='storename'>皇冠幸福里食光BOX（广八路店）</View>
            <View className='storegrade'>
              <Image src={grade}></Image>
              <View>5.0</View>
            </View>
          </View>
          <Image className='storemore' src={more}></Image>
        </View>
       </View>
        <View className='card-display'>
          <View className='comment-number'>评论（3）</View>
         {
          commentList.map((item)=>
            <View className='card'>
              <View className='postlink'>
                <View className='control-like' onClick={()=>clickIt(item)}>
                  <Image src={item.isClick ? onlike : like} onClick={()=>clickIt(item)}></Image>
                </View>
                <View className='like-num'>{item.like}</View>
              </View>
              <View className='card-top'>
                <View><Image src={item.userImg} className='userImg'></Image></View>
                <View>
                  <View className='info'>
                    <View className='username'>{item.username}</View>
                    <View className='level'>Lv {item.level}</View>
                  </View>
                  <View className='date'>{item.date}</View>
                </View>
              </View>
              <View className='postText'>{item.text}</View>
            </View>
          )
         }
         <View className='no-content'>没有更多评论了哦~</View>
        </View>
      </View>
      <TabBar></TabBar>
    </View>
    </>
  )
}

