import { useWeb3 } from "./Web3Context";

export const ConnectWallet = () => {
  const web3 = useWeb3();

  const connect = async () => {
    if (!web3) {
      console.error("Web3 not found");
      return;
    }

    try {
      const accounts = await web3.eth.requestAccounts();
      console.log("Connected to account:", accounts[0]);
    } catch (error) {
      console.error("Failed to connect:", error);
    }
  };

  return <button onClick={connect}>Connect Wallet</button>;
};