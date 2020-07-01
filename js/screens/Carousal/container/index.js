import {connect} from "react-redux";
import CarousalScreen from "../components/carousalScreen";
import { fetchMoviesList, storeActiveSlideIndex } from '../actions';

const mapStateToProps = state => {
    return {
        isLoading: state.CarousalReducer.isLoading,
        moviesList: state.CarousalReducer.moviesList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMoviesList: () => {
            dispatch(fetchMoviesList());
        },
        storeActiveSlideIndex: (index) => {
            dispatch(storeActiveSlideIndex(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarousalScreen);