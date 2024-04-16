import { View, Text,Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { AtNavBar } from 'taro-ui'
import './index.scss'
import success from '../../assets/images/success.png'
import card from '../../assets/images/card.png'
import orderPic from '../../assets/images/订单 2.png'


export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  function generateRandomFourDigitNumber(): number {
    // 生成一个 1000 到 9999 之间的随机整数
    return Math.floor(Math.random() * 9000) + 1000;
  }
  
  // 测试
  const randomFourDigitNumber = generateRandomFourDigitNumber();
  

  return (
    <View className='index'>
      <AtNavBar
      className='navbar'
    color='#000'
    title=''
    leftText=''
    rightFirstIconType=''
    rightSecondIconType=''
  />
  <View className='mainContainer'>

  <View className='paySuccess'> <View style={'margin-right:10rpx'}>订单支付成功</View> <Image src={success}></Image></View>

  <View className='order'>
    <View className='orderBox'><Image src={orderPic}></Image> <View className='orderNum'>{randomFourDigitNumber}</View></View>
    <View className='text1'>22:00之后截止取货</View>
    <View className='text2'>每一份食光BOX都含有未知的惊喜，快去店内带走吧！超时未取，订单将会失效，并且无法退款哦~</View>
    <View className='buttonBox'>
      <View className='look'>查看订单</View>
      <View className='affirm'>确认收货</View>
    </View>
  </View>

  <Image className='card' src={card}></Image>

  </View>
  
    </View>
  )
}
