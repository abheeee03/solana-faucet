import { ConnectionProvider, useConnection } from "@solana/wallet-adapter-react";

import { useRef, useState } from "react";
import { FaGithub, FaXTwitter } from "react-icons/fa6"
import { Input } from "./components/ui/input";
import Button from "./components/ui/button";
import { Toaster } from "sonner";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";


function App() {
  const [buttonActive, setButtonActive] = useState<string>('devnet')
  const endpoint = import.meta.env.VITE_RPC_URL as string;
  const [solNum, setSolNum] = useState<number>(0)
  const {connection } = useConnection()
  const publicAddress = useRef(null)
  const [loading, setLoading] = useState(false)


  const airdrop = async ()=>{
    //@ts-ignore
    await connection.requestAirdrop(publicAddress.current?.value as PublicKey, solNum * LAMPORTS_PER_SOL)
  }


  



  return (
    <ConnectionProvider endpoint={endpoint}>
          <Toaster/>
           <div className="min-h-screen w-full relative">
              {/* Radial Gradient Background */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
                }}
              />
                  <div className="nav fixed w-full z-10 py-6 flex items-center justify-center">
                    <div className="px-10 flex items-center border rounded-xl py-2 border-slate-200 justify-between md:min-w-4xl min-w-sm">
                    <h1 className="text-3xl heading">Dropper</h1>
                    <div className="flex gap-5">
                      <a href=""><FaGithub  size={25}/></a>
                      <a href=""><FaXTwitter  size={25}/></a>
                    </div>
                    </div>
                  </div>
                <div className="h-screen relative w-full flex flex-col items-center justify-start pt-50">
                    <h1 className="text-4xl font-medium heading">Air Drop Solana</h1>

                    <div className="flex gap-3 mb-8 mt-4">
                      <Button onClick={()=>setButtonActive('devnet')}>Dev Net { buttonActive == 'devnet'&& <span className="text-green">●</span> } </Button>
                      <Button onClick={()=>setButtonActive('mainnet')} >Main Net {
                        buttonActive == 'mainnet' &&  <span className="text-green">●</span>} </Button>
                    </div>

                    <div className="flex flex-col items-start justify-center mb-10">
                      <label htmlFor="public">Enter Address</label> 
                      <Input ref={publicAddress} name="public" placeholder="Enter Address"/>
                    </div>

                    <div className="flex flex-col items-start justify-center">
                      <label htmlFor="amount" className="text-lg font-medium">Enter Amount of Sol</label>
                      <div className="flex gap-3">
                      <Input name="amount" className="px-4 py-5" onChange={e=>setSolNum(Number(e.target.value))} placeholder="sixtynine" type="number"/>
                      <Button variant="clicky" volume={0.2}>
                        Airdrop 
                      </Button>
                      </div>
                    </div>
                  
                </div>
            </div>
    </ConnectionProvider>
  )
}

export default App