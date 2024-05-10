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

function TabBar(){
  const initialValue = "快来发表评论吧~"
  const [comment,setComment] = useState<string>(initialValue);
  const [isClick,setIsClick] = useState<boolean>(false);

  const handleChange = (evt:any):void => {
    const text: string = evt.target.value;
    setComment(text);
  }
  return(
    <>
    <View className='tabbar'>
      <View className='input'>
        <Input
        className='atinput'
        value={comment}
        onInput={(evt)=>handleChange(evt)}></Input>
        <Button>提交</Button>
      </View>
      <View className='postimg'>
        <View className='postlink'>
          <Image src={isClick?onlike:like}></Image>
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


  return (
    <View className='index'>
      <View className='navbar'>
        <Image src={back} className='back'></Image>
        <Image src={home} className='home'></Image>
          <Text>详情</Text>
      </View>
      <View className='postInfo'>
        <Image src='https://img.js.design/assets/img/65ba53e4f8365ab19e29addd.jpg#84e93f9b13c29a5279ce7366c1f8c132'></Image>
        <Text className='postName'>热爱骑行的丝绒蛋糕</Text>
        <Text className='postLevel'>Lv 3</Text>
      </View>
      <View className='display'>
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
      <TabBar></TabBar>
    </View>
  )
}

