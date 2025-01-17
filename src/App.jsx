import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import './App.css'

const myApp = (props) => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card
                    titulo="#9 Componente condicional" color="#239856">
                    <UsuarioInfo usuario={{nome: 'Gustavo'}}/>
                    <UsuarioInfo usuario={{email: 'gu@test.com'}}/>
                </Card>
                <Card
                    titulo="#8 Condicional" color="#982395">
                    <ParOuImpar numero={20}/>
                </Card>
                <Card
                    titulo="#7 Desafio lista produtos" color="#734cff">
                    <TabelaProdutos/>
                </Card>
                <Card
                    titulo="#6 Repetição" color="#FF4C65">
                    <ListaAlunos/>
                </Card>
                <Card
                    titulo="#5 Componente com filho" color="#00C8F8">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Jose" />
                        <FamiliaMembro nome="Maria" />
                        <FamiliaMembro nome="Pedro" />
                    </Familia>
                </Card>
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