import React from 'react'
import produtos from '../../data/produtos'
import './ListaAlunos.css'

export default function TabelaProdutos(props) {

    const rowsTableProdutos = produtos.map((produto, idx) => {
        return (
            <tr key={produto.id} className={idx % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.valor}</td>
            </tr>
        )
    })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nome</th>
                        <th>valor</th>
                    </tr>
                </thead>
                <tbody>
                    {rowsTableProdutos}
                </tbody>
            </table>
        </div>
    )
}