'Use Strict';

import {
  FETCH_MOVIES_LIST,
  FETCH_MOVIES_LIST_SUCCESS,
  FETCH_MOVIES_LIST_FAILURE,
  FETCH_CHAR_NAMES,
  FETCH_CHAR_NAMES_SUCCESS,
  FETCH_CHAR_NAMES_FAILURE,
  FETCH_PLANETS_DETAILS,
  FETCH_PLANETS_DETAILS_SUCCESS,
  FETCH_PLANETS_DETAILS_FAILURE,
  FETCH_STARS_SHIPS_DETAILS,
  FETCH_STARS_SHIPS_DETAILS_SUCCESS,
  FETCH_STARS_SHIPS_DETAILS_FAILURE,
  STORE_CURRENT_SLIDE_INDEX
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  moviesList: [],
  allCharactersList: {},
  allPlanetsList: {},
  allStarShipsList: {},
  activeSlideIndex: 0,
};

const CarousalReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_MOVIES_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        moviesList: action.data,
      };
    case FETCH_MOVIES_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case FETCH_CHAR_NAMES:
      let charactersList = {
        ...state.allCharactersList[action.episodeId],
        [action.charId]: {
          isLoading: true,
        }
      };
      return {
        ...state,
        allCharactersList: {
          ...state.allCharactersList,
          [action.episodeId]: charactersList
        },
      };
    case FETCH_CHAR_NAMES_SUCCESS:
      charactersList = {
        ...state.allCharactersList[action.episodeId],
        [action.charId]: {
          isLoading: false,
          name: action.data
        }
      };
      return {
        ...state,
        allCharactersList: {
          ...state.allCharactersList,
          [action.episodeId]: charactersList
        },
      };
    case FETCH_CHAR_NAMES_FAILURE:
      return {
        ...state,
      };
    case FETCH_PLANETS_DETAILS:
      let planetsListForEpisode = {
        ...state.allPlanetsList[action.episodeId],
        [action.planetId]: {
          isLoading: true,
        }
      };
      return {
        ...state,
        allPlanetsList: {
          ...state.allPlanetsList,
          [action.episodeId]: planetsListForEpisode
        },
      }
    case FETCH_PLANETS_DETAILS_SUCCESS:
      planetsListForEpisode = {
        ...state.allPlanetsList[action.episodeId],
        [action.planetId]: {
          isLoading: false,
          name: action.data
        }
      };
      return {
        ...state,
        allPlanetsList: {
          ...state.allPlanetsList,
          [action.episodeId]: planetsListForEpisode
        },
      }
    case FETCH_PLANETS_DETAILS_FAILURE:
      return {
        ...state
      }
    case FETCH_STARS_SHIPS_DETAILS:
      let starsShipsListForEpisode = {
        ...state.allStarShipsList[action.episodeId],
        [action.starShipId]: {
          isLoading: true,
        }
      };
      return {
        ...state,
        allStarShipsList: {
          ...state.allStarShipsList,
          [action.episodeId]: starsShipsListForEpisode
        },
      }
    case FETCH_STARS_SHIPS_DETAILS_SUCCESS:
      starsShipsListForEpisode = {
        ...state.allStarShipsList[action.episodeId],
        [action.starShipId]: {
          isLoading: false,
          name: action.data
        }
      };
      return {
        ...state,
        allStarShipsList: {
          ...state.allStarShipsList,
          [action.episodeId]: starsShipsListForEpisode
        },
      }
    case FETCH_STARS_SHIPS_DETAILS_FAILURE:
      return {
        ...state
      }
    case STORE_CURRENT_SLIDE_INDEX:
      return {
        ...state,
        activeSlideIndex: action.index
      }
    default:
      return state;
  }
};

export default CarousalReducer;
