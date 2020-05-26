import Carousel from 'react-bootstrap/Carousel'
import { useSelector, useDispatch } from 'react-redux'

import React from 'react'
import './CarouselMedia.sass'
import Button from './Widgets/Button'
import { selectedAction } from '../Actions/index'

const CarouselMedia = () => {

    const media = useSelector(state => state.MediaAvailable);
    const flag = useSelector(state => state.isMedia)
    const dispatch = useDispatch()

    console.log('en Carousel: ', media)



    return (
        <div className='divCarousel'>
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
                        <Carousel.Caption className='captionCarousel'>
                            <h3 className='titleCarousel'>{serie.title}</h3>
                            <Button route={`/Contenidos/detalle/${serie.id}`} title='Ver más detalles'/>
                        </Carousel.Caption>
                    </Carousel.Item>
                    )
                })}  
            </Carousel>      
        </div>
    )
}

export default CarouselMedia


