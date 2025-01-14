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
                    titulo="#4 Desafio Aleatorio" color="#FA6900">
                    <Aleatorio
                        min={0}
                        max={10}>
                    </Aleatorio>
                </Card>
                <Card
                    titulo="#3 Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>
                <Card
                    titulo="#2 Com parametro" color="#E8B71A">
                    <ComParametro
                        titulo="Situação do aluno"
                        aluno="Pedro"
                        nota={9.3}>
                    </ComParametro>
                </Card>
                <Card
                    titulo="#1 Primeiro" color="#588C73">
                    <Primeiro />
                </Card>
            </div>
        </div>
    )
}

export default myApp