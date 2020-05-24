import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useSelector } from 'react-redux'

const CarouselMovies = () => {

    const media = useSelector(state => state.MediaAvailable);
    const flag = useSelector(state => state.isMedia)
    console.log('en Carousel: ', media)

    



    return (
        <div>
             <Carousel>
                { flag &&
                media.data.items.map(serie => {
                    return(
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={`https://assets.nunchee.com/out/${serie.images[0]._id}/original/backdrop/75.jpeg`}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    )
                })}  
            </Carousel>      
        </div>
    )
}

export default CarouselMovies


