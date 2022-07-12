import React from "react";
import { useDispatch } from "react-redux";
import { updateRating } from "../store/favoriteReducer";
import Select from "react-select";

function FavoriteBeerCard(props) {
  const ratingOptions = [
    { value: "Not selected", label: "Not selected" },
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
  ];

  const dispatch = useDispatch();

  const sendRatingUpdate = (event) => {
    let updatedBeerObj = { ...props.beerObj };
    updatedBeerObj["rating"] = event.value;
    dispatch(updateRating(updatedBeerObj));
  };

  function openModal() {
    props.showInfo();
  }

  return (
    <>
      <div className="cardContainer">
        <div>
          <div className="cardTitleContainer" onClick={() => openModal()}>
            <h5>{props.beerObj.name}</h5>
          </div>

          <div className="cardImageContainer" onClick={() => openModal()}>
            <img src={props.beerObj.image_url} alt="IMG NOT FOUND"></img>
          </div>
        </div>

        <div className="ratingSelect">
          <h5>Rating:</h5>
          <Select
            defaultValue={{
              label: props.beerObj.rating,
              value: props.beerObj.rating,
            }}
            className="select"
            options={ratingOptions}
            onChange={sendRatingUpdate}
          />
        </div>
        <div className="remoBtndiv">
          <button
            className="btn btn-primary"
            onClick={() => props.removeBeer()}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default FavoriteBeerCard;
