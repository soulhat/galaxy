import { Filters } from '../acitons';

const initialState = {
  visibilityFilter: Filters.SHOW_ALL,
  todos: []
};

const news = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEWS':
      return [
        ...state,
        {
          text: action.text
        }
      ];
    default:
      return state;
  }
};

export default news;
