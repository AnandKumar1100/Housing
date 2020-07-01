import {connect} from "react-redux";
import CarousalNames from "../components/propertyNames";
import { fetchCharDetails, fetchPlanetsDetails, fetchStarShipsDetails } from '../actions';

const mapStateToProps = (state, props) => {
    
    return {
        allCharactersList: state.CarousalReducer.allCharactersList,
        activeSlideIndex: state.CarousalReducer.activeSlideIndex,
        allPlanetsList: state.CarousalReducer.allPlanetsList,
        allStarShipsList: state.CarousalReducer.allStarShipsList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCharDetails: (charId, episodeId) => {
            dispatch(fetchCharDetails(charId, episodeId));
        },
        fetchPlanetsDetails: (planetId, episodeId) => {
            dispatch(fetchPlanetsDetails(planetId, episodeId))
        },
        fetchStarShipsDetails: (starShipId, episodeId) => {
            dispatch(fetchStarShipsDetails(starShipId, episodeId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarousalNames);