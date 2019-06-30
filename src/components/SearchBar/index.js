import React from "react";

import "./style.sass";

import Api from "services/api";

const SearchBar = props => {
  const setData = props.setData;
  let textFormValue = "";

  async function submit() {
    let filter = "";
    if (textFormValue.length) {
      filter = `?beer_name=${textFormValue}`;
    }
    const response = await Api.get(`https://api.punkapi.com/v2/beers${filter}`);

    setData(response.data);
  }

  function charge(e) {
    textFormValue = e.target.value;
  }

  return (
    <form className="search" onSubmit={submit}>
      <input
        id="searchform"
        type="text"
        className="search__form"
        placeholder="What beer are you looking for?"
        onChange={charge}
      />
      <button type="button" className="search__button" onClick={submit}>
        <i className="fa fa-search" />
      </button>
    </form>
  );
};

export default SearchBar;
