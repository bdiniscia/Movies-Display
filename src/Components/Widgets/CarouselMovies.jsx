import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useSelector } from 'react-redux'
import './CarouselMovies.sass'

const CarouselMovies = () => {

    const media = useSelector(state => state.MediaAvailable);
    const flag = useSelector(state => state.isMedia)
    console.log('en Carousel: ', media)

    return (
        <div>
             <Carousel>
                { flag &&
                media.map(serie => {
                    return(
                    <Carousel.Item key={serie.id} className='carouselItem'>
                        <img
                            className="d-block w-100"
                            src={`https://mychannel.nunchee.tv/api/assets/images/view/${serie.imgBackdrop[0]._id}?type=backdrop`}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className='captionCarousel'>{serie.title}</h3>
                            <p className='descriptionCarousel'>{serie.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    )
                })}  
            </Carousel>      
        </div>
    )
}

export default CarouselMovies


