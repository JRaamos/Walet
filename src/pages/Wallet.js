import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';
import './Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main className="main-contain">
          <WalletForm />
          <Table />
        </main>
      </div>
    );
  }
}

export default Wallet;
