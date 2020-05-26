import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import React from 'react';
import './Button.sass'


const Button = ({title, route, onClick}) => {
    return (
        <Link to={route}>
            <div 
            className = 'button'
            onClick = {onClick}>
                <span>{title}</span>
            </div>
        </Link>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button;