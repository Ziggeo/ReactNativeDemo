import {Recordings} from '../recordings/Recordings';

const INITIAL_STATE = {
  selected: Recordings.name,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return {...state};
  }
};
