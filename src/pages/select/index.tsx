import { View, Text,Image } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'
import shike from '../../assets/shike.png'
import shangjia from '../../assets/shangjia.png'
import { useState } from 'react'

export default function Index() {

  const [status,setStatus] = useState('none');

  const handleClick = (data) =>{
    if(data == 1){
      setStatus('shike')
    }else if(data == 2){
      setStatus('shangjia')
    }
    

  }

  const handleFinish = () =>{
    if (status == 'shike'){
      Taro.switchTab({
        url: '/pages/store/index'
      })
    }
  }

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <View className='box1'>
        <Text className='font1'>
          你好，欢迎来到食光BOX！
        </Text>
        <View>
          <View className='font'>
            在正式使用之前，请先选择你的身份:)
          </View>
        </View>
      </View>

      <View className={'box2 leftbox ' +(status == 'shike'?'active':'')} onClick={()=>handleClick(1)}>
        <Text>
          食客
        </Text>
        <Image src={shike}>

        </Image>
      </View>

      <View className={'box2 rightbox ' +(status == 'shangjia'?'active':'') } onClick={()=>handleClick(2)}>
        <Text>
          商家
        </Text>
        <Image src={shangjia}>
        </Image>
      </View>

      <View className='finishSelect' onClick={handleFinish}>
        <View>
          选好啦！
        </View>
        <View>
          点击开启绿色之旅！
        </View>
      
      </View>
    </View>
  )
}
