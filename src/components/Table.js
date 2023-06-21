import React, { Component } from 'react';
import PopulateTable from './PopulateTable';
import './Table.css';

class Table extends Component {
  render() {
    return (
      <div>
        <h1> Tabela de gastos </h1>
        <table>
          <thead>
            <tr>
              <th className="table-th">
                Descrição
              </th>
              <th className="table-th"> Tag </th>
              <th className="table-th"> Método de pagamento </th>
              <th className="table-th"> Valor </th>
              <th className="table-th"> Moeda </th>
              <th className="table-th"> Câmbio utilizado </th>
              <th className="table-th"> Valor convertido </th>
              <th className="table-th"> Moeda de conversão </th>
              <th className="table-th"> Editar/Excluir </th>
            </tr>
          </thead>
          <tbody>
            <PopulateTable />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
