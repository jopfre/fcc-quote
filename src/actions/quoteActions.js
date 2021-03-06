import { FETCH_QUOTE } from './types';

export const fetchQuote = (event, index = Math.floor(Math.random() * 102)) => dispatch => {
  fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
  .then(res => res.json())
  .then(data => {
    dispatch({
      type: FETCH_QUOTE,
      payload: data.quotes[index]
    })
  });
};