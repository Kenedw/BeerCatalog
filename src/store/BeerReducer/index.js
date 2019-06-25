import * as type from "services/actions/types";

const initialState = {
  title: "BeerCatalog",
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
    default:
      return state;
  }
};
