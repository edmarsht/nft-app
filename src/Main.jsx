import React, { useEffect, useState } from "react";
import "./Main.css";
import insta from "./assets/insta.png";
import more from "./assets/more.png";
import twitter from "./assets/twitter.png";

function Main( {selectedPunk, punkListData}) {

const [activePunk, setActivePunk] = useState(punkListData[0])

useEffect(() => {
  setActivePunk(punkListData[selectedPunk])
}, [punkListData, selectedPunk])

  return (
    <div className="main">
      <div className="main__img">
        <img src={activePunk.image_original_url} alt="" />
      </div>
      <div className="main__container">
        <div className="main__container-title">
          <h1>{activePunk.name}</h1>
          <h2>•#{activePunk.token_id}</h2>
        </div>

        <div className="main__container-info">
          <div className="main__container-info__nft">


            <div className="main__container-info__nft-img">
              <img src={activePunk.owner.profile_img_url} alt="" />
            </div>
            <div className="main__container-info__nft-text">
              <h4>{activePunk.owner.address}</h4>
              <h5>@edouardtoulet{activePunk.owner.name}</h5>
            </div>
          </div>


          <div className="main__container-info__social">
              <img src={insta} alt="" />
              <img src={twitter} alt="" />
              <img src={more} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
