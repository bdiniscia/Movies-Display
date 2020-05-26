import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from "react-router-dom";
import Loader from 'react-loader-spinner';

import React, { useState } from 'react';
import './MediaDetails.sass';
import { selectedAction, flagSelectedAction } from '../Actions/index';

const MediaDetails = () => {
    const media = useSelector(state => state.mediaSelected);
    const flag = useSelector(state => state.isSelected)
    let { id } = useParams();

    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    
    // A proxy to bypass de CORS problem
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const targetUrl = `https://mychannel.nunchee.tv/api/ott/contents/details/${id}`
  
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
            console.log('>> items: ', data.data)
            let arrayToDispatch = [];
            arrayToDispatch.push(arrangeMedia(data.data))
            return arrayToDispatch 
          })
          .then(media => dispatch(selectedAction(media)))
          .then(() => {
            dispatch(flagSelectedAction())
            setIsLoading(false)
            })
          .catch(error => console.log(`> catch:`, error))
      }
      getMedia()
    }, [dispatch, targetUrl])

    const eraseSelected = () => {
        dispatch(selectedAction(''))
        dispatch(flagSelectedAction())
    }

    return (
        <div>
            <Loader
                style={{position: 'absolute', top: '50%', left: '50%'}}
                type="Circles"
                color="#333"
                height={100}
                width={100}
                visible={isLoading} 
            />
            { flag &&
            <div className='mediaDetails'>
                <Link to='/Contenidos' >
                    <img className='backArrow' src={require('../img/arrow.svg')} alt='Volver atrás' onClick={() => eraseSelected()}/>
                </Link>
                <div className='divImageDetails'>
                { media[0].imgPoster[0] === undefined ?
                <img className='imageDetails' src={require('../img/50.png')} alt='Poster of the media' />
                :
                <img className='imageDetails' src={`https://mychannel.nunchee.tv/api/assets/images/view/${media[0].imgPoster[0]._id}?type=poster`} alt='Poster of the media' />
                }
                </div>
                <div className='divDescription'>
                    <h3 className='titleDetails'>{media[0].title}</h3>
                    <p className='descriptionDetails'>{media[0].description}</p>
                </div>
            </div>
            }
        </div>
    )
}

export default MediaDetails
