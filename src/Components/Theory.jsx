import React from 'react'
import './Theory.sass'

const Theory = () => {
    return (
        <div className='theory'>
            <h1>Teoría</h1>
            <h5>¿Explique la diferencia entre inputs controlados y no controlados?</h5>
            <p>Los formularios controlados son manejados por el propio React (con OnChange), y los no 
                controlados son manejados por el DOM (Utilizando una ref). Siempre es preferible usar los 
                manejados por React, aunque a veces amerita usar no controlados.</p>
            <h5>¿Cómo prevenir que los components vuelvan a ser re-renderizados?</h5>
            <p>Controlando el ciclo vida de cada componente, y pensando muy bien en tu arquitectura.
                Si estás controlando muy bien como es el flujo de tu aplicación no deberías tener
                problemas con el re renderizado innnecesario de componente. Podrías poner un console
                log en cada componente y observar si hay alguno que no se debería estar re renderizando, 
                y luego investigar el por qué. Y así hacer más óptima tu aplicación. También siempre que está
                entre las posibilidades, usar renderizado condicional.
            </p>
            <h5>¿Qué son los HOC? Agregar ejemplo.</h5>
            <p>Los componetes de orden superior, o High Order Component te permiten reutilizar la lógica de 
                un componente. Si por ejemplo tienes que consultar varias veces a una API puedes usar los HOC.
            </p>
            <div className='imagesTheory'>
                <img src={require("../img/1-compon.png")} alt="ejemplo 1"/>
                <img src={require("../img/2-compon.png")} alt="ejemplo 2"/>
            </div>
            <h5>¿Qué es React Redux?</h5>
            <p>Redux es una librería de JavaScript que te ayudar a manejar el estado de una aplicación. 
                React-Redux es también mantenido por el equipo de Redux y te ayuda a aplicar Redux con la lógica
                de los componentes y el flujo de trabajo de React</p>
            <h5>¿Para qué sirven las ‘Arrow function’ en react?</h5>
            <p>Las Arrow Functions son muy útiles en React, ya que ellas no redefinen el valor de 'this' en su scope,
                Esto hace más fácil trabajar con ellas en los componentes con clases ya que evitas bindear el contexto 
                de this cuando la pasas tipo callbacks y es más fácil predecir su comportamiento.</p>
        </div>
    )
}

export default Theory
