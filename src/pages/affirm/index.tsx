import { View, Text,Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import { AtNavBar } from 'taro-ui'
import card2 from '../../assets/images/card2.png'
import Taro,{useRouter} from '@tarojs/taro'
import { useEffect } from 'react'





export default function Index() {

  // const router = useRouter();
  // const a:any = router.params;

  let total;

  useEffect(() => {
    console.log(Taro.getCurrentInstance().preloadData)
  }, [])

  useLoad(() => {
    console.log('Page loaded.')
  })


  const handleClick = ()=>{
    Taro.navigateTo({
      url:'/pages/success/index'
    })
  }

  const handleBack = () =>{
    Taro.navigateBack()
  }

  return (
    <View className='index'>
      <AtNavBar
      className='navbar'
    color='#000'
    title='确认订单'
    leftIconType = 'chevron-left'
    onClickLeftIcon = {handleBack}
    rightFirstIconType=''
    rightSecondIconType=''
  />
  <Image className='card2' src={card2}></Image>
  <View ></View>
  <View className='buy'> 
        <Image className='rabbit' src='https://img.js.design/assets/img/66178ff3ba500924f57e5348.png#690abb983519794fbca65fa4dfff2ba6'></Image>
        {/* <Text>总计：{a}</Text> */}
        <View className='button' onClick={handleClick}>下单</View> </View>
    </View>
  )
}
