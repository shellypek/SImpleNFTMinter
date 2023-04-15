import { Web3Provider } from "./Web3Context";
import { ConnectWallet } from "./ConnectWallet";
import { MintNFT } from "./MintNFT";

function App() {
  return (
    <Web3Provider>
      <div>
        <ConnectWallet />
        <MintNFT />
      </div>
    </Web3Provider>
  );
}

export default App;