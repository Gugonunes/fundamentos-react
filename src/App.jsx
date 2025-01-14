import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import './App.css'

const myApp = (props) => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card
                    titulo="#4 Desafio Aleatorio">
                    <Aleatorio
                        min={0}
                        max={10}>
                    </Aleatorio>
                </Card>
                <Card
                    titulo="#3 Fragmento">
                    <Fragmento />
                </Card>
                <Card
                    titulo="#2 Com parametro">
                    <ComParametro
                        titulo="Situação do aluno"
                        aluno="Pedro"
                        nota={9.3}>
                    </ComParametro>
                </Card>
                <Card
                    titulo="#1 Primeiro">
                    <Primeiro />
                </Card>
            </div>
        </div>
    )
}

export default myApp