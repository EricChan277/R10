import { queryAllFaves, addFave, deleteFave } from '../../config/models';

/********************************ACTION CREATORS *******************************/
const GET_FAVED_SESSION_IDS = 'GET_FAVED_SESSION_IDS';
const CREATE_FAVE_SESSION = 'CREATE_FAVE_SESSION';
const DELETE_FAVE_SESSION = 'DELETE_FAVE_SESSION';
const GET_ERROR = 'GET_ERROR';

export const createFaveSession = id => ({
  type: CREATE_FAVE_SESSION
});

export const getFavedSessionId = () => ({
  type: GET_FAVED_SESSION_IDS
});

export const deleteFaveSession = id => ({
  type: DELETE_FAVE_SESSION
});

export const getError = error => ({
  type: GET_ERROR,
  payload: error
});

/** *********************************** Initial State *********************************/

const initialState = {
  faves: queryAllFaves(),
  error: ''
};

/** *********************************** THUNK *********************************/

export const createTheFaves = faveId => dispatch => {
  try {
    addFave(faveId);
    dispatch(createFaveSession());
    dispatch(getFavedSessionId());
  } catch (error) {
    dispatch(getError(error));
  }
};

export const deleteTheFaves = faveId => dispatch => {
  console.log(faveId);
  try {
    deleteFave(faveId);
    dispatch(getFavedSessionId());
    dispatch(deleteFaveSession());
  } catch (error) {
    dispatch(getError(error));
  }
};

/************************************* REDUCERS ******************************** */
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVED_SESSION_IDS: {
      return { ...state, faves: queryAllFaves(), error: '' };
    }
    case CREATE_FAVE_SESSION:
    case DELETE_FAVE_SESSION:

    case GET_ERROR: {
      return { ...state, error: action.payload };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
