// WalletConnectButton.js
import React from 'react';

function WalletConnectButton({ connectWallet }) {
  return (
    <button onClick={connectWallet}>Connect Wallet</button>
  );
}

export default WalletConnectButton;
