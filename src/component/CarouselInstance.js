import React from 'react';
import {Carousel} from 'react-bootstrap'

class CarouselInstance extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Carousel width={900} height={500}>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="http://react-bootstrap.cn/assets/carousel.png"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="http://react-bootstrap.cn/assets/carousel.png"/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="http://react-bootstrap.cn/assets/carousel.png"/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselInstance;