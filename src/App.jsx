import React from 'react'
import { ethers, Contract } from "ethers"
import abi from './abi.json'

const App = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    async function getPassword() {
        const contract_address = `0x89d5b48f3974A05b4BF816aebA12D401c0ebb003`
        const slot = 1 //password is the second argument.
        const data = await provider.getStorageAt(contract_address, slot)
        return data
    }

    async function unlock() {
        const signer = provider.getSigner()
        const contractAddress = `0x89d5b48f3974A05b4BF816aebA12D401c0ebb003`
        const contract = new Contract(contractAddress, abi, signer);
        const password = await getPassword()
        const unlock = await contract.unlock(password);
    }


    return (
        <div className='container'>
            <h1>Unlock the Contract</h1>
            <button onClick={unlock}>Unlock</button>
        </div>
    )
}

export default App