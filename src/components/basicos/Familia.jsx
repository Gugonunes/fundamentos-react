import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default function Familia(props) {
    return(
        <div>
            <FamiliaMembro nome="Jose" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Maria" {...props}/>
            <FamiliaMembro nome="Pedro" sobrenome="Silva"/>
        </div>
    )
}