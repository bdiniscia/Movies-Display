import React from 'react'
import './Theory.sass'

const Theory = () => {
    return (
        <div className='theory'>
            <h5>¿Explique la diferencia entre inputs controlados y no controlados?</h5>
            <p>Los formularios controlados son manejados por el propio React, y los no controlados son manejados por el DOM. Siempre es preferible usar los manejados por React, aunque a veces amerita usar no controlados</p>
            <h5>¿Cómo prevenir que los components vuelvan a ser re-renderizados?</h5>
            <p>Con renderizados condicionales, </p>
            <h5>¿Qué son los HOC? Agregar ejemplo.</h5>
            <h5>¿Qué es React Redux?</h5>
            <h5>¿Para qué sirven las ‘Arrow function’ en react?</h5>            
        </div>
    )
}

export default Theory
