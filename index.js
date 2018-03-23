import React from 'react';
import ReactDOM from 'react-dom';
import CarouselInstance from './src/component/CarouselInstance';
import ButtonInstance from './src/component/ButtonInstance';

ReactDOM.render(
    <CarouselInstance />,
    document.getElementById('root')
);

// const React = require("react");
// const ReactDOM = require("react-dom");
// import {Navbar} from "react-bootstrap";
// const navbarInstance = (
//   <Navbar>
//     <Navbar.Header>
//       <Navbar.Brand>
//         <a href="#" rel="external nofollow" >react-bootstrap</a>
//       </Navbar.Brand>
//     </Navbar.Header>
//   </Navbar>
// );
// // 然后我们渲染到body里
// ReactDOM.render(navbarInstance,document.body);


// import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';

// const carouselInstance = (
//     <Carousel>
//       <Carousel.Item>
//         <img width={900} height={500} alt="900x500" src="../../static/images/carousel.png"/>
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img width={900} height={500} alt="900x500" src="../../static/images/carousel.png"/>
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img width={900} height={500} alt="900x500" src="../../static/images/carousel.png"/>
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
  
//   ReactDOM.render(carouselInstance, document.body);