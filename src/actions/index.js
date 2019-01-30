export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_COUNT = 'INCREMENT_COUNT';
// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = counter => {
  let theCounter = counter + 1;
  return {type: INCREMENT, payload: theCounter};
  // Fill in this function
};

export const incrementCount = count => {
  let theCount = count + 1;
  return {type: INCREMENT_COUNT, payload: theCount};
};

export const decrement = count => {
  let theCount = count - 1;
  return {type: DECREMENT, payload: theCount};
  // Fill in this function
};
