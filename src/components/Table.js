import React, { Component } from 'react';
import PopulateTable from './PopulateTable';

class Table extends Component {
  render() {
    return (
      <div>
        <h1> Tabela de gastos </h1>
        <table>
          <thead>
            <tr>
              <th>
                Descrição
              </th>
              <th> Tag </th>
              <th> Método de pagamento </th>
              <th> Valor </th>
              <th> Moeda </th>
              <th> Câmbio utilizado </th>
              <th> Valor convertido </th>
              <th> Moeda de conversão </th>
              <th> Editar/Excluir </th>
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
