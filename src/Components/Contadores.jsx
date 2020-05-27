import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'
import Badge from 'react-bootstrap/Badge'

import React, {useState} from 'react'
import Counter from './Widgets/Counter'
import './Contadores.sass'

const Contadores = () => {
    const [numOfCounters, setNumOfCounters] = useState(1)
    const totalCount = useSelector(state => state.counter)

    let counters = [];
    for (let i = 1; i <= numOfCounters; i++) {
    counters.push(<Counter key={i} idCounter={i}/>);
    }


    return (
        <div className='counters'>
            <div className='headerCounters'>
                <Button className='addCounter' variant="success" onClick={() => setNumOfCounters(numOfCounters + 1)}>+ Agregar contador</Button>
                <div className='totalDiv'>
                    <h2>TOTAL:  <Badge className='totalNum' pill variant="primary">{totalCount}</Badge>
                    </h2>
                </div>
            </div>
            <h3>Contadores:</h3>
            <div className='divCounters'>
                {counters}
            </div>

        </div>
    )
}

export default Contadores
