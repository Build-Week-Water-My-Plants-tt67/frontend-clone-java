import { GET_PLANTS_START, GET_PLANTS_SUCCESS, GET_PLANTS_FAILURE, SET_CURRENT_PLANT_START, SET_CURRENT_PLANT_SUCCESS, SET_CURRENT_PLANT_FAILURE, ADD_PLANT_START, ADD_PLANT_SUCCESS, ADD_PLANT_FAILURE, EDIT_PLANT_START, EDIT_PLANT_SUCCESS, EDIT_PLANT_FAILURE, DELETE_PLANT_START, DELETE_PLANT_SUCCESS, DELETE_PLANT_FAILURE } from '../actions';

const initialState = {
  plants: [],
  currentPlant: {},
  error: '',
  isCallingAPI: false
};

export const plants = (state=initialState, action) => {
  switch (action.type) {
    case GET_PLANTS_START:
      return {
        ...state,
        error: '',
        isCallingAPI: true
      };
    case GET_PLANTS_SUCCESS:
      return {
        ...state,
        plants: action.payload,
        isCallingAPI: false
      };
    case GET_PLANTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isCallingAPI: false
      };
    case SET_CURRENT_PLANT_START:
      return {
        ...state,
        error: '',
        isCallingAPI: true
      };
    case SET_CURRENT_PLANT_SUCCESS:
      return {
        ...state,
        currentPlant: action.payload,
        isCallingAPI: false
      };
    case SET_CURRENT_PLANT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isCallingAPI: false
      };
    case ADD_PLANT_START:
      return {
        ...state,
        error: '',
        isCallingAPI: true
      };
    case ADD_PLANT_SUCCESS:
      return {
        ...state,
        isCallingAPI: false
      };
    case ADD_PLANT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isCallingAPI: false
      };
    case EDIT_PLANT_START:
      return {
        ...state,
        error: '',
        isCallingAPI: true
      };
    case EDIT_PLANT_SUCCESS:
      return {
        ...state,
        currentPlant: action.payload,
        isCallingAPI: false
      };
    case EDIT_PLANT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isCallingAPI: false
      };
    case DELETE_PLANT_START:
      return {
        ...state,
        error: '',
        isCallingAPI: true
      };
    case DELETE_PLANT_SUCCESS:
      return {
        ...state,
        isCallingAPI: false
      };
    case DELETE_PLANT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isCallingAPI: false
      };
    default:
      return state;
  }
}