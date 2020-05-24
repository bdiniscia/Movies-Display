import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const CarouselMovies = () => {
    return (
        <div>
             <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://assets.nunchee.com/out/5b86f722bb19a137c040c6fd/original/backdrop/100.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://assets.nunchee.com/out/5b86f722bb19a137c040c6fd/original/backdrop/100.jpeg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://assets.nunchee.com/out/5b86f722bb19a137c040c6fd/original/backdrop/100.jpeg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>      
        </div>
    )
}

export default CarouselMovies


