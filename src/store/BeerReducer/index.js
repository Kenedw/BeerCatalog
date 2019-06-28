import * as type from "store/actions/types";

const initialState = {
  title: "Beer Catalog",
  dataCard: [],
  open: false
};

export const BeerReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.CLICK_SHOW_INFORMATION:
      return {
        ...state,
        title: action.payload.title,
        dataCard: action.payload.dataCard,
        open: action.payload.open
      };
    case type.CLICK_BEER_STORE_RESET:
      return {
        ...initialState,
      }
    default:
      return state;
  }
};
