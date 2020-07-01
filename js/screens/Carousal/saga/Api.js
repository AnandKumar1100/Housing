'Use Strict';

import BaseApiService from "../../../services/BaseApiServices"

function fetchMoviesList() {
    const url = 'https://swapi.dev/api/films/'
    return BaseApiService.get(url);
}

function fetchCharDetails(id) {
    const url = `http://swapi.dev/api/people/${id}/`
    return BaseApiService.get(url);
}

function fetchPlanetDetails(id) {
    const url = `https://swapi.dev/api/planets/${id}/`
    return BaseApiService.get(url)
}

function fetchStarsShipsDetails(id) {
    const url = `https://swapi.dev/api/starships/${id}/`
    return BaseApiService.get(url)
}

export const Api = {
    fetchMoviesList,
    fetchCharDetails,
    fetchPlanetDetails,
    fetchStarsShipsDetails
};