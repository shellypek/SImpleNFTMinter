import { createContext, useContext, useEffect, useState } from "react";
import Web3 from "web3";

const Web3Context = createContext();

export const useWeb3 = () => useContext(Web3Context);

export const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    } else {
      console.error("No Ethereum provider found");
    }
  }, []);

  return <Web3Context.Provider value={web3}>{children}</Web3Context.Provider>;
};