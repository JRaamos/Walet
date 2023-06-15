import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div>
        <h1> Tabela de gastos </h1>
        <header>
          <th> Descrição </th>
          <th> Tag </th>
          <th> Método de pagamento </th>
          <th> Valor </th>
          <th> Moeda </th>
          <th> Câmbio utilizado </th>
          <th> Valor convertido </th>
          <th> Moeda de conversão </th>
          <th> Editar/Excluir </th>
        </header>
      </div>
    );
  }
}

export default Table;
