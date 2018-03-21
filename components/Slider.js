import React from 'react';
import ReactDOM from 'react-dom';
import './Slider.less';
export default class Slider extends React.Component {
    constructor(){
        super();
        this.state = { pos: 0 }; // 默认索引
    }

    componentDidMount(){
        if (this.props.autoplay) { 
            this.play();
        }           
    };

    turn = (n) => {
        let pos = this.state.pos; // 获取旧索引
        pos += n; // 每隔2s让pos加1
        // pos值影响ul的左偏移量left的值 所以ul应该有个style属性 left值应该变化
        
        // 边界判断 -- 当索引为图片总张数的时候，让索引变为0
        if(pos >= this.props.images.length){
            pos = 0;
        }

        if(pos<0){
            pos = this.props.images.length - 1 
        }
        
        this.setState({pos:pos})
    };

    play = () => {
        this.timer = setInterval( ()=>{
            this.turn(1); // 往左走传1，往右走传-1
        }, this.props.interval * 1000)
    };

   render(){
       let images = this.props.images;
       let style = {
            width: 500 * images.length,
            left: this.state.pos * -500,
            transitionDuration: this.props.speed + 's'
       };

       let arrows = null;
       if(this.props.arrows){
           arrows=(
               <div className="arrows">
                    <span onClick={()=>this.turn(-1)} className="arrow arrow-left">&lt;</span>
                    <span onClick={()=>this.turn(1)} className="arrow arrow-right">&gt;</span>
                </div>
            )
        };

        // let dots = null;
        // if(this.props.dots){
        //     dots=(
        //         <div className="dots">
        //             {
        //                 images.map((image,index)=>(
        //                     <span 
        //                     className={ "dot" + (index==this.state.pos?'active':'') }
        //                     key={index}
        //                     onClick={()=>this.turn(index-this.state.pos)}></span>
        //                 ))
        //             }
        //         </div>
        //     )
        // }

       return(
           <div className="slider-wrapper">
               <ul 
                   onMouseOver={() => clearInterval(this.timer)}
                   onMouseOut={this.play} 
                   style={style} 
                   className="sliders">

                   {
                       images.map((image,index) => (
                         <li className="slider" key={index}>
                             <img src={image.src} />
                         </li>
                       ))
                   }
               </ul>

               {arrows}

               {/* {dots} */}
           </div>
       )
   }
}