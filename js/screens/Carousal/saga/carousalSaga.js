import {put, takeLatest, select, takeEvery } from 'redux-saga/effects';
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
    FETCH_STARS_SHIPS_DETAILS_FAILURE
} from '../actions/actionTypes';
import { Api } from './Api';

function* fetchMoviesList(action) {
    try {
        let resp = yield Api.fetchMoviesList();
        resp.results.sort(function (a, b) {
            let dateA = new Date(a.release_date), dateB = new Date(b.release_date);
            return dateA - dateB;
        });
        yield put({ type: FETCH_MOVIES_LIST_SUCCESS, data: resp.results });
    } catch (err) {
        alert(err)
        yield put({ type: FETCH_MOVIES_LIST_FAILURE, message:'Something went wrong!!' });
    }
}

function* fetchCharDetails(action){
    try {
        let resp = yield Api.fetchCharDetails(action.charId);
        yield put({ type: FETCH_CHAR_NAMES_SUCCESS, data: resp.name, charId: action.charId, episodeId: action.episodeId });
    } catch (err) {
        alert(err)
        yield put({ type: FETCH_CHAR_NAMES_FAILURE, message:'Something went wrong!!' });
    }
}

function* fetchPlanetDetails(action){
    try {
        let resp = yield Api.fetchPlanetDetails(action.planetId);
        yield put({ type: FETCH_PLANETS_DETAILS_SUCCESS, data: resp.name, planetId: action.planetId, episodeId: action.episodeId });
    } catch (err) {
        alert(err)
        yield put({ type: FETCH_PLANETS_DETAILS_FAILURE, message:'Something went wrong!!' });
    }
}

function* fetchStarsShipsDetails(action) {
    try {
        let resp = yield Api.fetchStarsShipsDetails(action.starShipId);
        yield put({ type: FETCH_STARS_SHIPS_DETAILS_SUCCESS, data: resp.name, starShipId: action.starShipId, episodeId: action.episodeId });
    } catch (err) {
        alert(err)
        yield put({ type: FETCH_STARS_SHIPS_DETAILS_FAILURE, message:'Something went wrong!!' });
    }
}


export default function* carousalWatcher() {
    yield takeLatest(FETCH_MOVIES_LIST, fetchMoviesList)
    yield takeEvery(FETCH_CHAR_NAMES, fetchCharDetails)
    yield takeEvery(FETCH_PLANETS_DETAILS, fetchPlanetDetails)
    yield takeEvery(FETCH_STARS_SHIPS_DETAILS, fetchStarsShipsDetails)
}