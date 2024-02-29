// App.js
import React, { useState, useEffect } from 'react';
import WalletConnectButton from './component/WalletConnectButton';
import BalanceDisplay from './component/BalanceDisplay';
import SendEtherForm from './component/SendEtherForm';
import { ethers } from 'ethers';
import './style.css'

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('');

  useEffect(() => {
    async function loadBlockchainData() {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
        const balance = await provider.getBalance(address);
        // setBalance(ethers.utils.formatEther(balance));
        const formattedBalance = ethers.utils.formatEther(balance);
        setBalance(parseFloat(formattedBalance).toFixed(4));
      } else {
        console.error('MetaMask not detected.');
      }
    }

    loadBlockchainData();
  }, []);

  const connectWallet = async () => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      // Reload data after connecting
      window.location.reload();
    } catch (error) {
      console.error('User denied account access or an error occurred:', error);
    }
  };

  const sendEther = async (recipientAddress, amount) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const tx = await signer.sendTransaction({
        to: recipientAddress,
        value: ethers.utils.parseEther(amount)
      });
      setTransactionStatus(`Transaction successful: ${tx.hash}`);
    } catch (error) {
      console.error('Error sending transaction:', error);
      setTransactionStatus('Error sending transaction');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <h1>Wallet DApp for Ethereum Transactions</h1>
      <WalletConnectButton connectWallet={connectWallet} />
      <BalanceDisplay walletAddress={walletAddress} balance={balance} />
      <SendEtherForm sendEther={sendEther} />
      {transactionStatus && (
        <div>
          <strong>Transaction Status:</strong> {transactionStatus}
        </div>
      )}
    </div>
  );
}

export default App;
