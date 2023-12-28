
# Ethereum Contract Unlocker App

This React application allows users to interact with an Ethereum smart contract by unlocking it using a password stored in the contract's storage. The application utilizes the MetaMask Web3Provider to connect to the Ethereum blockchain and the ethers library for Ethereum interactions.

## Getting Started
Contract Source Code:
```
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CTF1 {
  bool public locked;
  bytes32 private password;
  event Winner(address);

  constructor(bytes32 _password) {
    locked = true;
    password = _password;
  }

  function unlock(bytes32 _password) public {
    if (password == _password) {
      locked = false;
      emit Winner(msg.sender);
    }
  }
}
```

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/bharatbhusal/ctf-challenge.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm start
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

1. Make sure you have MetaMask installed and connected to the Ethereum network.

2. Click the "Unlock" button to initiate the unlocking process.

## Configuration

- Update the smart contract address and ABI in the `App.js` file to match your specific contract details:

  ```javascript
  const contract_address = `0x89d5b48f3974A05b4BF816aebA12D401c0ebb003`;
  const slot = 1; // Modify this according to your contract storage structure.
  ```

- Ensure MetaMask is configured with the correct network and account.

## Contributing

Feel free to contribute by opening issues or submitting pull requests.