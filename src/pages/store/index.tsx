import { View,Swiper, SwiperItem,Text,Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import { AtNavBar,AtSearchBar,AtIcon } from 'taro-ui'
import { useState } from 'react'
import Taro from '@tarojs/taro'

import pic1 from '../../assets/images/pic1.png'
import pic2 from '../../assets/images/pic2.jpg'
import pic3 from '../../assets/images/pic3.jpg'

import gouwuche from '../../assets/images/购物车.png'
import hongbei from '../../assets/images/面包类.png'
import yinpin from '../../assets/images/奶茶.png'

import star from '../../assets/images/star.png'

  // 函数式商店信息展示
function renderShopItem({ name, category, image, tip, rating, sales, distance, originalPrice, currentPrice }: {
  name: string,
  category: string,
  image: string,
  tip: string,
  rating: number,
  sales: number,
  distance: string,
  originalPrice: number,
  currentPrice: number
}) {
  const handleClick =()=>{
    Taro.navigateTo({
      url: '/pages/placeOrder/index',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function(data) {
          console.log(data)
        },
        someEvent: function(data) {
          console.log(data)
        }
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
      }
    })
  }
  return (
    <View className="shop-item" onClick={handleClick}>
      <Image src={image} />
      <View className='name'> {name} </View>
      <View className='category'>{category}</View>
      <View className='rating'>{rating}</View>
      <Image className='star' src={star}></Image>
      <View className='tip'> {tip}</View>
      <View className='sale'>月销：{sales}</View>
      <View className='distance'>{distance}</View>
      <View className='originalPrice'>￥{originalPrice}</View>
      <View className='currentPrice'>￥{currentPrice}</View>
    </View>
  );
}

export default function Index() {

  const handleClick = () =>{
    console.log(1);
  }

  useLoad(() => {
    console.log('Page loaded.')
  })

  const [value,setValue] = useState('');

  const searchChange = (value) =>{
    setValue(value);
  }

  const onActionClick = () =>{
    console.log('开始搜索')
  }

  const [tag,setTag] = useState(2);

  const clickTag = (item)=>{
    //console.log(item);
    setTag(item);
  }



// 定义商店信息数组
const [shopList, setShopList] = useState([
  {
    id: 1,
    name: '仟吉食光BOX(狮城名居)',
    category: '面包/蛋糕/甜品',
    image: 'https://img.js.design/assets/img/65b664b6e415fe444ccb112a.jpg#abc731f19f416782283b30ac729626c2',
    tip: '最后一份',
    rating: 5.0,
    sales: 20,
    distance: '1.6 km',
    originalPrice: 18.9,
    currentPrice: 11.9
  },
  {
    id: 2,
    name: '皇冠幸福里食光BOX',
    category: '面包/蛋糕/甜品',
    image: 'https://img.js.design/assets/img/65b664c1a9ade29c0bd4be62.jpg#0a767bcda0be2bc94e7b3707f16f93a5',
    tip: '仅剩3份',
    rating: 4.7,
    sales: 10,
    distance: '0.5 km',
    originalPrice: 18.9,
    currentPrice:11.9
  },
  {
    id: 3,
    name: '库迪咖啡食光BOX(南湖)',
    category: '咖啡/奶茶/甜品',
    image: 'https://img.js.design/assets/img/65b664cba9ade29c0bd4bf8f.jpg#9449899fdbc480fd349801f2ef90cd0b',
    tip: '今日10：00开售',
    rating: 4.8,
    sales: 20,
    distance: '1.3 km',
    originalPrice: 12.9,
    currentPrice:6.9
  }
  // 其他商店信息...
]);


  return (
    <View className='index'>
      <AtNavBar
        onClickRgIconSt={handleClick}
        onClickRgIconNd={handleClick}
        onClickLeftIcon={handleClick}
        color='#000'
        leftIconType = 'map-pin'
        leftText='武汉市 | 武汉市···'
        className='bar'
      >
      <View>
        <AtSearchBar
            value={value}
            onChange={searchChange}
            onActionClick={onActionClick}
          />
      </View>
      </AtNavBar>

      <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay>
        <SwiperItem>
          <View className='demo-text-1'>
            <Image src={pic1}></Image>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>
          <Image src={pic2}></Image>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'>
          <Image src={pic3}></Image>
          </View>
        </SwiperItem>
      </Swiper>

      <View className='classify'>
        <View className='littleClassify'>

            <View className='round'><Image src={gouwuche}></Image></View>
            <Text>超市</Text>

        </View>
        <View className='littleClassify'>

            <View className='round'><Image src={hongbei}></Image></View>
            <Text>烘焙</Text>

        </View>
        <View className='littleClassify'>

            <View className='round'><Image src={yinpin}></Image></View>
            <Text>饮品</Text>

        </View>
      </View>

      <View className='tagContainer'>
        <View className={'tag '+(tag == 1?'active':'') }onClick={()=>clickTag(1)}>
          距离 <AtIcon value='chevron-down' size='15' color='rgba(128, 128, 128, 1)'></AtIcon>
        </View>
        <View className={'tag '+(tag == 2?'active':'') }onClick={()=>clickTag(2)}>
          销量 <AtIcon value='chevron-down' size='15' color='rgba(128, 128, 128, 1)'></AtIcon>
        </View>
        <View className={'tag '+(tag == 3?'active':'') }onClick={()=>clickTag(3)}>
          好评 <AtIcon value='chevron-down' size='15' color='rgba(128, 128, 128, 1)'></AtIcon>
        </View>
        <View className={'tag '+(tag == 4?'active':'') }onClick={()=>clickTag(4)}>
          组合 <AtIcon value='chevron-down' size='15' color='rgba(128, 128, 128, 1)'></AtIcon>
        </View>
        <View className={'tag '+(tag == 5?'active':'') }onClick={()=>clickTag(5)}>
          新品 <AtIcon value='chevron-down' size='15' color='rgba(128, 128, 128, 1)'></AtIcon>
        </View>
      </View>

      <View className="shop-list">
      {/* 使用map方法生成商店信息组件 */}
      {shopList.map(shop => (
        renderShopItem({
          name: shop.name,
          category: shop.category,
          image: shop.image,
          tip: shop.tip,
          rating: shop.rating,
          sales: shop.sales,
          distance: shop.distance,
          originalPrice: shop.originalPrice,
          currentPrice: shop.currentPrice
        })
      ))}
    </View>

      
    </View>
  )
}
