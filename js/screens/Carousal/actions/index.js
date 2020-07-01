import {
    FETCH_MOVIES_LIST,
    FETCH_CHAR_NAMES,
    STORE_CURRENT_SLIDE_INDEX,
    FETCH_PLANETS_DETAILS,
    FETCH_STARS_SHIPS_DETAILS
} from "./actionTypes"

export const fetchMoviesList = () => {
    return {
        type: FETCH_MOVIES_LIST
    }
};

export const fetchCharDetails = (charId, episodeId) => {
    return {
        type: FETCH_CHAR_NAMES,
        charId,
        episodeId
    }
};

export const fetchPlanetsDetails = (planetId, episodeId) => {
    return {
        type: FETCH_PLANETS_DETAILS,
        planetId,
        episodeId
    }
}

export const fetchStarShipsDetails = (starShipId, episodeId) => {
    return {
        type: FETCH_STARS_SHIPS_DETAILS,
        starShipId,
        episodeId
    }
}

export const storeActiveSlideIndex = (index) => {
    return {
        type: STORE_CURRENT_SLIDE_INDEX,
        index
    }
}