// BalanceDisplay.js
import React from 'react';

function BalanceDisplay({ walletAddress, balance }) {
  return (
    <div>
      <strong>Connected Ethereum Address:</strong> {walletAddress}
      <br />
      <strong>Balance:</strong> {balance} ETH
    </div>
  );
}

export default BalanceDisplay;
