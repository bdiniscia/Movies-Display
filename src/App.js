import Loader from 'react-loader-spinner';
import { useDispatch } from 'react-redux'

import React, { useState } from 'react';
import './App.sass';
import Home from './Components/Home';
import { displayAction, flagAction } from './Actions/index'


const App = () => {

  const [media, setMedia] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  

  // A proxy to bypass de CORS problem
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  const targetUrl = 'https://mychannel.nunchee.tv/api/generic/playlists/details/5b845b8346cc29000e4f186a?itemsPerPage=10'

  const getMedia = () => {
    setIsLoading(true);
    fetch(proxyUrl + targetUrl)
      .then( data => data.json())
      .then( data => {
        setIsLoading(false);
        console.log(data.data.items);
        dispatch(displayAction(data))
      })
      .then(() => dispatch(flagAction()))
      .catch(error => console.log(`> catch:`, error))
  }


  React.useEffect(() => {
    console.log('1. Entrando al UseEffect')
    getMedia()
  }, [])

  
  return (
    <div className="App">
      <Loader
        style={{position: 'absolute', top: '50%', left: '50%'}}
        type="Circles"
        color="#333"
        height={100}
        width={100}
        visible={isLoading} 
      />
        <Home />
    </div>
  );
}

export default App;
