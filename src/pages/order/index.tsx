import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import { useState } from 'react';

import blank from '../../assets/images/order/blank.png'

import more from '../../assets/images/order/more.png'

enum Statues{
  Good = "待取货",
  back =  "已退款",
  comment = "已评价",
  Wait = "待评价"
}

export default function Index() {

  const [select,SetSelect] = useState<number>(0);

  const handleSelect = (index:number):void =>{
    SetSelect(index);
  }

  const [totalOrderList,setList] = useState([{
    avatar: "https://img.js.design/assets/img/65b664cba9ade29c0bd4bf8f.jpg#9449899fdbc480fd349801f2ef90cd0b",
    img: "https://img.js.design/assets/img/65b9e7e2475648abca0105f4.jpg#b566e79605950e68fb8a9e1cd1401bba",
    state: Statues.Good,
    name: "库迪咖啡食光BOX（南湖店）",
    num: 1,
    date: "2024-02-06 16:42:44",
    thing: [{name:"食光BOX-咖啡"}],
    price: "10.9"
  },{
    avatar: "https://img.js.design/assets/img/65ba54220b1958efe242db86.jpg#8c6cbf83ea99bbf0b7919696de542a8b",
    img: "https://img.js.design/assets/img/65ba5362cfef76bc2564fe9f.jpg#144f1c30dea75a78c15ec3f07430911a",
    state: Statues.comment,
    name: "仟吉食光BOX（狮城名居）",
    num: 1,
    date: "2024-02-06 16:24:41",
    thing: [{name:"食光BOX-面包"}],
    price: "5.9"
  },{
    avatar: "https://img.js.design/assets/img/65b664b6e415fe444ccb112a.jpg#abc731f19f416782283b30ac729626c2",
    img: "https://img.js.design/assets/img/65b664c1a9ade29c0bd4be62.jpg#0a767bcda0be2bc94e7b3707f16f93a5",
    state: Statues.Wait,
    name: "皇冠幸福里食光BOX（广八路店）",
    num: 2,
    date: "2024-01-30 09:12:02",
    thing: [{name:"食光BOX-面包"},{name:"食光BOX-咖啡"}],
    price: "17.8"
  },{
    avatar: "https://img.js.design/assets/img/65b664cba9ade29c0bd4bf8f.jpg#9449899fdbc480fd349801f2ef90cd0b",
    img: "https://img.js.design/assets/img/65b9e7e2475648abca0105f4.jpg#b566e79605950e68fb8a9e1cd1401bba",
    state: Statues.back,
    name: "库迪咖啡食光BOX（南湖店）",
    num: 1,
    date: "2024-02-06 21:42:44",
    backDate:"2024-02-06 21:50:02",
    thing: [{name:"咖啡盲盒（食光BOX 2个）"}],
    price: "10.9"
  }])

  return (
    <View className='index'>
      <View className='navbar'>
        <View className='top'>
          <View>我的订单</View>
        </View>
        <View className='state'>
          <View onClick={()=>handleSelect(0)} className={select === 0 ? "onSelect" : ""}>全部</View>
          <View onClick={()=>handleSelect(1)} className={select === 1 ? "onSelect" : ""}>进行中</View>
          <View onClick={()=>handleSelect(2)} className={select === 2 ? "onSelect" : ""}>待评价</View>
          <View onClick={()=>handleSelect(3)} className={select === 3 ? "onSelect" : ""}>退款</View>
        </View>
      </View>
      <View className='content'>
      {
        totalOrderList ?
        totalOrderList.filter((item) => {
          if (select === 0) {
            return true; // 不进行状态过滤，显示全部订单
          } else if (select === 1) {
            return item.state === Statues.Good; // 显示进行中的订单
          } else if (select === 2) {
            return item.state === Statues.Wait; // 显示待评价的订单
          } else if (select === 3) {
            return item.state === Statues.back; // 显示退款的订单
          }
        }).map((item, index) => <FoodCard key={index} item={item}></FoodCard>)
        : <View className='blank'>
            <Image src={blank}></Image>
            <View>这里空空如也哦~</View>
          </View> 
      }
      </View>
    </View>
  )
}

export const FoodCard = ({item}) =>{

  return(
    <>
      <View className='card'>
        <View className='store'>
          <View className='info'>
            <Image className='avatar' src={item.avatar}></Image>
            <View className='name'>{item.name}</View>
            <Image className='more' src={more}></Image>
          </View>
          <View className='state'>{item.state}</View>
        </View>
        <View className='things'>
          <View className='thing'>
            <Image src={item.img}></Image>
            <View className='goods'>
            {
              item.thing.map(item=>
                <View>{item.name}</View>
              )
            }
            </View>
          </View>
          <View className='price'>
            <View className='yuan'>￥{item.price}</View>
            <View className='number'>共{item.num}件</View>
          </View>
        </View>
        <View className='date'>下单时间：{item.date}</View>
        {
          item.state === Statues.back && 
          <View className='date'>{item.backDate}</View>
        }
        <View className='next'>
            {
              item.state === Statues.Good ?
              <>
                <View className='get'>
                  取货码
                </View>
                <View className='order'>
                  再来一单
                </View>
              </> : item.state === Statues.back ?
              <>
                <View className='delete'>
                  删除订单
                </View>
              </> : item.state === Statues.Wait ?
              <>
                <View className='go'>
                  去评价
                </View>
                <View className='order'>
                  再来一单
                </View>
              </> :
              <View className='go-look'>去查看</View>
            }
        </View>
      </View>
    </>
  )
}