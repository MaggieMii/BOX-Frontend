import { View, Text,Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import React, { useState } from 'react';
import './index.scss'
import { AtInputNumber } from 'taro-ui'

import storePic from '../../assets/images/R-C.jpg'
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import decrease from '../../assets/images/decrease.png'
import increase from '../../assets/images/increase.png'

import Taro from '@tarojs/taro';

export default function Index() {

  const [total, setTotal] = useState<number>(0);

  const [quantity, setQuantity] = useState<number>(0);

  useLoad(() => {
    console.log('Page loaded.')
  })

  const price = 11.9;

  const handleChange = (value: number) => {
    const newValue = value + quantity;
    if(newValue >= 0){
      setQuantity(newValue);
      console.log(value);
      setTotal(price * newValue); // 更新 total 状态
    }
   
  }

  const handleClick = () =>{
    Taro.preload({ test: '这是传递的数据' })
    Taro.navigateTo({
      url:'/pages/affirm/index?id=1'
    })
  }

  return (
    <View className='index'>
      <Image className='storePic' src={storePic}></Image>
      <View className='mainContainer'>
        <Image className='img1' src={img1}></Image>
        <View className='nextContainer'>
          <Image src={img2} className={img2}></Image>
          <Item
          imageUri="https://via.placeholder.com/150"
          text1="食光BOX-面包"
          text2="仅剩5份"
          text3="起售时间  13：00"
          text4="盲盒内含有仟吉【当天现烤】【任意面包】组合。您购买的每一份食光盲盒，都为地球减碳事业做出了巨大贡献。感谢您与我们一起减少食物浪费，请尽情享用这份时光盲盒吧！"
          price={11.9}
          quantity={quantity}
          handleChange={handleChange} // 传递 handleChange 方法
        />

        <View className='buy'> 
        <Image className='rabbit' src='https://img.js.design/assets/img/66178ff3ba500924f57e5348.png#690abb983519794fbca65fa4dfff2ba6'></Image>
        <Text>小计：{total}</Text>
        <View className='button' onClick={handleClick}>结算</View> </View>
        </View>
        
      </View>
      <View>
      
    </View>
    </View>
    
  )
}

interface ItemProps {
  imageUri: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  price: number;
  quantity: number;
  handleChange: (value: number) => void; // 添加 handleChange 属性
}

const Item: React.FC<ItemProps> = ({ imageUri, text1, text2, text3, text4, price,quantity, handleChange }) => {
  
  
  return (
    <View className='item'>
      <Image src='https://img.js.design/assets/img/6617834a0ebb7601f9bf1099.jpg' className='img'  />
      <View className='text'>
        <Text className='text1'>{text1}</Text>
        <Text className='text2'>{text2}</Text>
        <Text className='text3'>{text3}</Text>
        <Text className='text4'>{text4}</Text>
      </View>
      <View className='float'>
        
        <Text  className='price'>￥{price}</Text>

        <View className='quantity'>
        <View className='inputNumber'>
          <Image src={decrease} onClick={()=>{handleChange(-1)}}></Image>
          {quantity}
          <Image src={increase} style={'padding-right:0;'} onClick={()=>{handleChange(1)}}></Image>
        </View>
        </View>
      </View>
    </View>
  );
};