import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

const myApp = (props) => {
    return (
        <div id="app">
            <Aleatorio
                min={0}
                max={10}>
            </Aleatorio>
            <Fragmento />
            <ComParametro
                titulo="Situação do aluno"
                aluno="Pedro"
                nota={9.3}>
            </ComParametro>
            <Primeiro />
        </div>
    )
}

export default myApp