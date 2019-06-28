import * as types from "./types";

export const clickInformation = value => ({
  type: types.CLICK_SHOW_INFORMATION,
  payload:{
    title: "Beer Information",
    dataCard: value,
    open: true
  }
});

export const resetBeerStore = () => ({
    type: types.CLICK_BEER_STORE_RESET,
    payload: {
      open: false
    }
});
