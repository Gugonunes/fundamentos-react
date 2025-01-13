import React from 'react'

export default function Aleatorio(props){
    const { min, max } = props
    const numeroAleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <h3>Número aleatorio entre { min } e { max }:</h3>
            <p>{ numeroAleatorio }</p>
        </div>
    )
}