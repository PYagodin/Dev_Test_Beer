import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, nextPageHasResults } from "../apiCalls/beerApi";
import BeerCard from "../components/BeerCard.jsx";
import BeerModal from "../components/beerModal";
import "../styles/brewerPageStyle.css";

function Home() {
  const [opemModal, setOpenModal] = useState(false);
  const [focusedBeer, setFocusedBeer] = useState(undefined);
  const [beerPage, setBeerPage] = useState(Number(1));
  const [searchText, setSearchText] = useState("");
  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();

  const { beers } = useSelector((state) => state.beers);

  function toggleModal(beerObj) {
    if (opemModal) {
      setOpenModal(false);
      setFocusedBeer(undefined);
    } else {
      setOpenModal(true);
      setFocusedBeer(beerObj);
    }
  }

  useEffect(() => {
    filterResults();
  }, [beerPage]);

  useEffect(() => {
    beerPage === 1 ? filterResults() : setBeerPage(1);
  }, [searchText]);

  function filterResults() {
    callApi(dispatch, beerPage, searchText);
  }

  function previous_page() {
    setBeerPage(beerPage - 1);
  }

  function next_page() {
    setBeerPage(beerPage + 1);
  }

  const searchByFood = () => {
    setSearchText(inputText);
  };

  const clearSearch = () => {
    setInputText("");
    setSearchText("");
  };

  const beerPagination = () => {
    let PREVIOUS_PAGE = "<< Previous Page";
    let NEXT_PAGE = "Next Page >>";
    return (
      <>
        <div className="pageNavbar">
          {beerPage > 1 && (
            <button className="btn" onClick={() => previous_page()}>
              {PREVIOUS_PAGE}
            </button>
          )}
          {nextPageHasResults && (
            <button className="btn" onClick={() => next_page()}>
              {NEXT_PAGE}
            </button>
          )}
        </div>
      </>
    );
  };

  return (
    <>
      {opemModal ? (
        <BeerModal beerObj={focusedBeer} closeModal={() => toggleModal()} />
      ) : (
        <>
          <div className="foodNavBar">
            <h4>Filter results by food pairing: </h4>
            <input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></input>
            <button className="btn btn-primary" onClick={() => searchByFood()}>
              Filter
            </button>
            <button className="btn btn-primary" onClick={() => clearSearch()}>
              Clear Search
            </button>
          </div>
          {beerPagination()}
          <div className="cardGrid">
            {beers.map((beer) => {
              return (
                <BeerCard
                  beerObj={beer}
                  key={beer.id}
                  toggleModal={() => toggleModal(beer)}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Home;
