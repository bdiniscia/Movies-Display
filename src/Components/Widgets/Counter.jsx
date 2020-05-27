import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';

import React, { useState } from 'react';
import './Counter.sass';
import { incrementAction, decrementAction } from '../../Actions/index';

const Counter = ({idCounter}) => {

    const [numOfCounter, setNumOfCounter] = useState(0)
    const dispatch = useDispatch()

    const decrement = () => {
        dispatch(decrementAction())
        setNumOfCounter(numOfCounter - 1)
    }

    const increment = () => {
        dispatch(incrementAction())
        setNumOfCounter(numOfCounter + 1)
    }

    return (
        <div className='counterDiv'>
            <span className='numberCounter'>{numOfCounter}</span>
            <ButtonGroup aria-label="Basic example">
                <Button onClick={() => decrement()} variant="secondary">-</Button>
                <Button onClick={() => increment()} variant="secondary">+</Button>
            </ButtonGroup>
        </div>
    )
}

export default Counter
