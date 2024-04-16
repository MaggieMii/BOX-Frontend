import { View, Text,Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import { AtNavBar } from 'taro-ui'
import card2 from '../../assets/images/card2.png'
import Taro from '@tarojs/taro'


export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  const handleClick = ()=>{
    Taro.navigateTo({
      url:'/pages/success/index'
    })
  }

  return (
    <View className='index'>
      <AtNavBar
      className='navbar'
    color='#000'
    title='确认订单'
    leftText=''
    rightFirstIconType=''
    rightSecondIconType=''
  />
  <Image className='card2' src={card2}></Image>
  <View ></View>
  <View className='buy'> 
        <Image className='rabbit' src='https://img.js.design/assets/img/66178ff3ba500924f57e5348.png#690abb983519794fbca65fa4dfff2ba6'></Image>
        <Text>总计：11.9</Text>
        <View className='button' onClick={handleClick}>下单</View> </View>
    </View>
  )
}
