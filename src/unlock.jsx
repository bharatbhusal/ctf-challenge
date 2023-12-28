import abi from "./abi.json"
import { ethers, Contract } from "ethers"
import env from './validateEnv'
import toast from "react-hot-toast"
export async function unlock() {
    console.log("Unlocked")

    // const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${env.REACT_APP_INFURA_API_KEY}`);
    const bytecode = `0x608060405234801561000f575f80fd5b5060043610610034575f3560e01c8063cf30901214610038578063ec9b5b3a14610056575b5f80fd5b610040610072565b60405161004d91906100f8565b60405180910390f35b610070600480360381019061006b9190610148565b610082565b005b5f8054906101000a900460ff1681565b80600154036100db575f805f6101000a81548160ff0219169083151502179055507f745c90b656b4aafe296c8ca35aeacfe56cb96c90e1d320e5da643fff1051b6c0336040516100d291906101b2565b60405180910390a15b50565b5f8115159050919050565b6100f2816100de565b82525050565b5f60208201905061010b5f8301846100e9565b92915050565b5f80fd5b5f819050919050565b61012781610115565b8114610131575f80fd5b50565b5f813590506101428161011e565b92915050565b5f6020828403121561015d5761015c610111565b5b5f61016a84828501610134565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61019c82610173565b9050919050565b6101ac81610192565b82525050565b5f6020820190506101c55f8301846101a3565b9291505056fea264697066735822122016cc35327af1fcac76baa724fbcfd8c136ca675fa398ab043c50c419009456fb64736f6c63430008140033`

    const contractAddress = `0x89d5b48f3974A05b4BF816aebA12D401c0ebb003`

    const signer = await window.ethereum.request({
        method: "eth_requestAccounts",
    });
    console.log(signer)
    // console.log(contractAddress, abi, signer)
    const contract = new Contract(contractAddress, abi, signer);
    // console.log(contract)


    // const isLocked = await contract.locked();

    const password = `0xf40fcec21964ffb566044d083b4073f29f7f7929110ea19e1b3ebe375d89055e`
    const stakingPromise = new Promise(async (resolve, reject) => {
        try
        {
            const unlock = await contract.unlock(password);
            const receipt = await unlock.wait()
            resolve(receipt)
        } catch (error)
        {
            reject(error);
        }
    })

    await toast.promise(stakingPromise, {
        loading: "Staking is pending...",
        success: "Staking successful 👌",
        error: "Staking failed 🤯",
    })



    console.log(isLocked)
}