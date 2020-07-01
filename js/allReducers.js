'Use Strict';

import { combineReducers } from 'redux';

const allReducers = () => {
    const CarousalReducer = require("./screens/Carousal/reducer/carousalReducer").default;

    return combineReducers({
        CarousalReducer
    })
};

export default allReducers;
