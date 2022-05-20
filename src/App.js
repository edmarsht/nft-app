import React, { Suspense } from "react";
import "./App.css";
import Header from "./Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Main from "./Main";



const PunkList = React.lazy(() => import("./PunkList"));

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(6);


  useEffect(() => {
    const getMyNft = async () => {
      const openseaData = await axios.get(
        // "https://testnets-api.opensea.io/assets?asset_contract_address=0xcC8B5be4fD8078a4BCA3A05d6DE22F6CB8Fe818E"
        "https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0xcC8B5be4fD8078a4BCA3A05d6DE22F6CB8Fe818E"
      );
      const data = openseaData.data.assets;
      setPunkListData(data.reverse());
    };

    getMyNft();
  }, []);


  return (
    <div className="app">
        <Header />
        {punkListData.length > 0 && (
          <div>
            <Main selectedPunk={selectedPunk} punkListData={punkListData} />
            <Suspense
              fallback={
                <div className="loading">
                  <div className="lds-dual-ring"></div>
                </div>
              }
            >
              <PunkList
                punkListData={punkListData}
                setSelectedPunk={setSelectedPunk}
                selectedPunk={selectedPunk}
              />
            </Suspense>
          </div>
        )}
    </div>
  );
}

export default App;
