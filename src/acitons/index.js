/*
 * action types
 */
const ADD_NEWS = 'ADD_NEWS';

/*
 * other constants
 */
export const Filters = {
  SHOW_ALL: 'SHOW_ALL'
};

/*
 * action creators
 */
export const addNews = text => {
  return {
    type: ADD_NEWS,
    text
  };
};
