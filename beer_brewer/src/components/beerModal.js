import React from "react";
import "../styles/beerModal.css";
function BeerModal(props) {
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="modalHeader">
            <h1>{props.beerObj.name} </h1>
          </div>
          <div className="modalBody">
            <div className="modalInfo">
              <h5>"{props.beerObj.tagline}"</h5>
              <p>{props.beerObj.description}</p>
              <h5>Best with:</h5>
              <div className="foodPairingInfo">
                <ul>
                  {props.beerObj.food_pairing.map((food) => {
                    return <li>- {food}</li>;
                  })}
                </ul>
              </div>

              <h5>Brewer's Tip:</h5>
              <p>"{props.beerObj.brewers_tips}"</p>
              <p>-{props.beerObj.contributed_by}</p>
            </div>

            <div className="modalImage">
              <img src={props.beerObj.image_url} alt="IMG NOT FOUND"></img>
            </div>
          </div>

          <div className="modalFooter">
            <button className="modal_btn" onClick={() => props.closeModal()}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeerModal;
