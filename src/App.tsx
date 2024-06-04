import { SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
import "./App.css";

const jsonRpcUrlMap = {
  1: ["https://eth-pokt.nodies.app"],
  56: ["https://bsc-pokt.nodies.app"],
  8453: ["https://base-rpc.publicnode.com"],
  // mạng nào nữa thì tự thêm vào đây, nó tự ăn..
};

function App() {
  return (
    <div className="App">
      <div className="Uniswap">
        <SwapWidget
          tokenList={"https://ipfs.io/ipns/tokens.uniswap.org"}
          // provider={provider}
          jsonRpcUrlMap={jsonRpcUrlMap}
        />
      </div>
    </div>
  );
}

export default App;
