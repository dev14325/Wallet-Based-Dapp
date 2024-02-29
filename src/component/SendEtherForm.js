// SendEtherForm.js
import React, { useState } from 'react';

function SendEtherForm({ sendEther }) {
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEther(recipientAddress, amount);
    setRecipientAddress('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Send Ether</h2>
      <label htmlFor="recipientAddress">Recipient Address</label><br />
      <input type="text" id="recipientAddress" value={recipientAddress} onChange={(e) => setRecipientAddress(e.target.value)} style={{ width: '450px' }} /><br />
      <label htmlFor="amount">Amount (ETH)</label><br />
      <input type="text" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} /><br />

      <button type="submit" style={{marginTop:'10px'} } >Send Ether</button>
    </form>
  );
}

export default SendEtherForm;
