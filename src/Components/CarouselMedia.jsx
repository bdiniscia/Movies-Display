import Carousel from 'react-bootstrap/Carousel'
import { useSelector, useDispatch } from 'react-redux'
import Loader from 'react-loader-spinner';

import React, { useState } from 'react'
import './CarouselMedia.sass'
import Button from './Widgets/Button'
import { displayAction, flagAction } from '../Actions/index'

const CarouselMedia = () => {

    const media = useSelector(state => state.MediaAvailable);
    const flag = useSelector(state => state.isMedia)

    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
  
    // A proxy to bypass de CORS problem
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const targetUrl = 'https://mychannel.nunchee.tv/api/generic/playlists/details/5b845b8346cc29000e4f186a?itemsPerPage=10'

    const arrangeMedia = (data) => {
        let info = {};
        info.title = data.title.original;
        info.description = data.description.plain.original;
        info.shortDescription = data.description.rich.original.blocks[0].text
        info.id = data._id;
        info.imgBackdrop = data.images.filter(image => image.type === 'backdrop');
        info.imgSquare = data.images.filter(image => image.type === 'square');
        info.imgMediumv = data.images.filter(image => image.type === 'mediumv');
        info.imgMediumh = data.images.filter(image => image.type === 'mediumh');
        info.imgPoster = data.images.filter(image => image.type === 'poster');
        return info;
    }


    React.useEffect(() => {
        console.log('1. Entrando al UseEffect')
        const getMedia = () => {
        setIsLoading(true);
        fetch(proxyUrl + targetUrl)
            .then( data => data.json())
            .then( data => {
            console.log('>> items: ', data.data.items)
            let arrayToDispatch = [];
            data.data.items.forEach(item => {
                arrayToDispatch.push(arrangeMedia(item))
            })
            console.log('>> arrayToDispatch:', arrayToDispatch);
            return arrayToDispatch 
            })
            .then(array => dispatch(displayAction(array)))
            .then(() => {
            dispatch(flagAction())
            setIsLoading(false)})
            .catch(error => console.log(`> catch:`, error))
        }
            getMedia()
        }, [dispatch])


    return (
        <div className='divCarousel'>
            <Loader
                style={{position: 'absolute', top: '50%', left: '50%'}}
                type="Circles"
                color="#333"
                height={100}
                width={100}
                visible={isLoading} 
            />
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


