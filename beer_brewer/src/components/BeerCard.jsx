import React from "react";
import "../styles/beerCard.css";
import { useDispatch } from "react-redux";
import { addFavoriteBeer } from "../store/favoriteReducer";

function BeerCard(props) {
  const dispatch = useDispatch();

  function openModal() {
    props.toggleModal();
  }

  function addFavorite() {
    dispatch(addFavoriteBeer(props.beerObj));
  }

  const cardFooter = () => {
    return (
      <div className="Favorite">
        <button className="btn btn-primary" onClick={() => addFavorite()}>
          Add to Favorites
        </button>
      </div>
    );
  };

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

        {cardFooter()}
      </div>
    </>
  );
}

export default BeerCard;
