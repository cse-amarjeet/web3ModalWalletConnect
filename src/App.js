import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal, Web3Button } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon, sepolia } from "wagmi/chains";
import "./App.css";

const chains = [arbitrum, mainnet, polygon, sepolia];
const projectId = ""; // go to https://cloud.walletconnect.com/ and grab the project id and past it here

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

function App() {
  // console.log(state);

  return (
    <div className="App">
      <header className="App-header">
        <WagmiConfig config={wagmiConfig}>
          <h1>connect web3Model with Node Server</h1>
          <Web3Button />
        </WagmiConfig>

        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </header>
    </div>
  );
}

export default App;
