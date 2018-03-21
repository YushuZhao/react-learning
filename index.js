import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider.js';

let images = [
    { src:require('./static/images/1.jpg') },
    { src:require('./static/images/2.jpg') },
    { src:require('./static/images/3.jpg') }
];

ReactDOM.render(
    <Slider 
        images = {images} // 图片
        interval = {2} // 多长时间轮播一次
        speed = {1} // 每次轮播的速度
        pause = {true} // 当鼠标移动上去之后自动暂停
        autoplay = {true} // 是否启用自动轮播，false不自动轮播
        dots = {true} // 是否有点状导航
        arrows = {true} // 是否有箭头导航
    />, document.querySelector('#root')
);

