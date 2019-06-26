import * as type from "services/actions/types";

const initialState = {
  title: "BeerCatalog",
  dataCard: [],
  open: false
};

export const BeerReducer = (state = initialState, action) => {
  console.log(action);
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
