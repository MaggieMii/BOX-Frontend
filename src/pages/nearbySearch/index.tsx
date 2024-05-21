import { Button, Image, Input, View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import { AtNavBar, } from 'taro-ui'
import { useState } from 'react'

import back from '../../assets/images/nearby/back.png'
import search from '../../assets/images/nearby/search 1.png'

export default function Index() {

  const [value,setValue] = useState<string>('')
  useLoad(() => {
    console.log('Page loaded.')
  })

  const handleInput = (evt:any):void => {
    const text: string = evt.target.value;
    setValue(text);
  }

  const [hotList,setHotList] = useState([{
    text: "咖啡"
  },{
    text: "面包"
  }]);

  const [historyList,setHistoryList] = useState([{
    text: "咖啡"
  },{
    text: "面包"
  },{
    text: "甜点"
  }]);

  return (
    <View className='index'>
      <AtNavBar
      className='navbar'>
        <View className='back'>
          <Image src={back}></Image>
        </View>
        <View className='search'>
          <View className='input'>
            <Image src={search}></Image>
            <Input value={value} onInput={(evt)=>handleInput(evt)}></Input>
          </View>
          <View className='button'>搜索</View>
        </View>
      </AtNavBar>
      <View className='hot'>
        <View className='hot-search'>最热搜索</View>
        <View className='content'>
          {
            hotList.map(item=>
              <View className='block'>{item.text}</View>
            )
          }
        </View>
      </View>
      <View className='history'>
          <View className='search-history'>搜索历史</View>
          <View className='content'>
          {
            historyList.map(item=>
              <View className='block'>{item.text}</View>
            )
          }
          </View>
      </View>
    </View>
  )
}
