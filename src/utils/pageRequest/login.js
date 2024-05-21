import Taro from '@tarojs/taro';

// 封装登录请求函数
export const _login = (data, successCallback, errorCallback) => {
  console.log(data);
  Taro.request({
    url: `http://47.92.102.209:8080/api/user/login`,
    method: 'POST',
    data:{
      code:data.code
    },
    header: {
      // 'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
      // 'Accept': '*/*',
      // 'Host': '47.92.102.209:8080',
      'Connection': 'keep-alive' // 根据实际情况设置请求头

    },
    success: (res) => {
      console.log(res);
      // 请求成功，调用成功回调函数
      successCallback(res);
    },
    fail: (err) => {
      console.log(err);
      // 请求失败，调用失败回调函数
      errorCallback(err);
    },
  });
};
