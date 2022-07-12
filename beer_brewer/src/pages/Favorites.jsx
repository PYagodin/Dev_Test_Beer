import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFavorites, sendRemoveBeer } from "../store/favoriteReducer";
import BeerModal from "../components/beerModal";
import FavoriteBeerCard from "../components/favoriteCard";
import ConfirmationModal from "../components/confirmationModal";
import "../styles/favorites.css";

function Favorites() {
  const dispatch = useDispatch();
  const [shownContent, setShownContent] = useState("cards");
  const [focusedBeer, setFocusedBeer] = useState(undefined);
  const { favoriteBeers } = useSelector((state) => state.favoriteBeers);

  const determiteContent = () => {
    switch (shownContent) {
      case "cards":
        return showCards();
      case "cardInfoModal":
        return showCardInfoModal();
      case "removeAllConfirmationModal":
        return showRemoveAllConfirmationModal();
      case "removeBeerConfirmationModal":
        return showRemoveBeerConfirmationModal(focusedBeer);
      default:
        return showCards();
    }
  };

  const showCards = () => {
    if (favoriteBeers.length > 0)
      return (
        <>
          <div>
            <button
              className="btn btn-primary"
              onClick={() => setShownContent("removeAllConfirmationModal")}
            >
              Remove All
            </button>
          </div>
          <div className="cardGrid">
            {favoriteBeers.map((beer) => {
              return (
                <FavoriteBeerCard
                  beerObj={beer}
                  key={beer.id}
                  removeBeer={() => prepareRemoveBeerModal(beer)}
                  showInfo={() => prepareBeerInfoModal(beer)}
                />
              );
            })}
          </div>
        </>
      );
    else {
      return (
        <>
          <div className="noFavoritesSection">
            <h2>No Favorites yet</h2>
          </div>
        </>
      );
    }
  };

  const showCardInfoModal = () => {
    return (
      <BeerModal
        beerObj={focusedBeer}
        closeModal={() => setShownContent("cards")}
      />
    );
  };

  const showRemoveBeerConfirmationModal = () => {
    let purpose = "remove '" + focusedBeer.name + "' from favorites ";
    return (
      <ConfirmationModal
        purpose={purpose}
        confirm={() => removeBeer()}
        decline={() => closeModal()}
      />
    );
  };

  const showRemoveAllConfirmationModal = () => {
    return (
      <ConfirmationModal
        purpose="reomve all beers from favorites "
        confirm={() => removeAll()}
        decline={() => closeModal()}
      />
    );
  };

  const prepareBeerInfoModal = (beer) => {
    setFocusedBeer(beer);
    setShownContent("cardInfoModal");
  };

  const prepareRemoveBeerModal = (beer) => {
    setFocusedBeer(beer);
    setShownContent("removeBeerConfirmationModal");
  };

  const removeAll = () => {
    dispatch(clearFavorites());
    closeModal();
  };

  const removeBeer = () => {
    dispatch(sendRemoveBeer(focusedBeer));
    closeModal();
  };

  function closeModal() {
    setShownContent("cards");
  }

  return <>{determiteContent()}</>;
}

export default Favorites;
