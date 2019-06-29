import React from "react";

import "./style.sass";

import Api from "services/api";

const SearchBar = props => {

  const setData = props.setData;

  async function submit(e, props) {
    const value = e.target.searchform.value;
    const response = await Api.get(
      `https://api.punkapi.com/v2/beers?beer_name=${value}`
    );

    setData(response.data);
  }

  return (
    <form className="search" onSubmit={submit}>
      <input
        id="searchform"
        type="text"
        className="search__form"
        placeholder="What beer are you looking for?"
      />
      <button type="submit" className="search__button">
        <i className="fa fa-search" />
      </button>
    </form>
  );
};

export default SearchBar;
