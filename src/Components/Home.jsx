import React from 'react'
import './Home.sass'
import Button from './Widgets/Button'

const Home = () => {
    return (
        <div className='home'>
            <div className='tasksDiv'>
                <div className='taskHome'>
                    <img src={require('../img/task-1.png')} alt='Teoría'/>
                    <Button title='Teoría' route='/Teoria' />
                </div>
                <img className='arrowTaks' src={require('../img/arrow-1.png')} alt='Decoration arrow'/>
                <div className='taskHome'>
                    <img src={require('../img/task-2.png')} alt='Playlist'/>
                    <Button title='Playlist' route='/Contenidos' />
                </div>
                <img className='arrowTaks' src={require('../img/arrow-2.png')} alt='Decoration arrow'/>
                <div className='taskHome'>
                    <img src={require('../img/task-3.png')} alt='Contador'/>
                    <Button title='Contadores' route='/Contadores' />
                </div>
            </div>
        </div>
    )
}

export default Home
