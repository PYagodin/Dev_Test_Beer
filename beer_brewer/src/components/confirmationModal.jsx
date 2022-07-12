import React from "react";
import "../styles/beerModal.css";
function ConfirmationModal(props) {
  const confirm = () => {
    props.confirm();
  };

  const decline = () => {
    props.decline();
  };

  return (
    <>
      <div className="modalBackground">
        <div className="removeModalContainer">
          <div className="modalHeader">
            <p>Are you sure you want to {props.purpose} ?</p>
          </div>
          <div className="removeModalButtons">
            <button className="btn btn-primary" onClick={() => confirm()}>
              Yes
            </button>
            <buttn className="btn btn-warning" onClick={() => decline()}>
              No
            </buttn>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmationModal;
