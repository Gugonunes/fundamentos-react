import React from 'react'
import DiretaFilho from './DiretaFilho'

export default function DiretaPai(props){
    return (
        <div>
            <DiretaFilho nome="Filho1" idade="20" nerd={true}/>
            <DiretaFilho nome="Filho1" idade="22" nerd={true}/>
        </div>
    )
}