import axios from 'axios';



/**
 * 封装get方法
 * @url: 请求接口地址
 * @params: 请求参数
 */
export function get(url, params = {}) {
    // Message.loading({
    //     content: 'Loading...', // 加载进度条
    //     duration: 0
    // });
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,
        }).then(response => { // 请求之后的操作
            // Message.destroy(); // 关闭进度条
            resolve(response.data) // 把请求到的数据发到引用请求的地方
        }).catch(err => {
            reject(err); // 返回请求异常
        });
    });
};