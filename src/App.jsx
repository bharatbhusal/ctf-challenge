// Import necessary modules from the React library and ethers library
import React from 'react';
import { ethers, Contract } from "ethers";

// Import the ABI (Application Binary Interface) for the smart contract
import abi from './abi.json';

// Define the main component of the React application
const App = () => {
    // Create an Ethereum provider using the injected Web3Provider from MetaMask
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Smart contract address to interact with
    const contractAddress = `0x89d5b48f3974A05b4BF816aebA12D401c0ebb003`;

    // Asynchronously retrieve the password stored in the specified slot of the smart contract's storage
    async function getPassword() {

        // Slot in the storage where the password is stored
        const slot = 1; // password is the second argument.

        // Fetch the data from the specified storage slot
        const data = await provider.getStorageAt(contractAddress, slot);
        return data;
    }

    // Asynchronously unlock the smart contract using the stored password
    async function unlock() {
        // Get the signer (account) from the provider
        const signer = provider.getSigner();

        // Create a contract instance with the ABI, address, and signer
        const contract = new Contract(contractAddress, abi, signer);

        // Retrieve the password from the storage
        const password = await getPassword();

        // Invoke the unlock function on the smart contract with the retrieved password
        const unlock = await contract.unlock(password);
    }

    // Render the main application UI
    return (
        <div className='container'>
            <h1>Unlock the Contract</h1>

            {/* Button to trigger the unlock function when clicked */}
            <button onClick={unlock}>Unlock</button>
        </div>
    );
}

// Export the App component as the default export for the module
export default App;
