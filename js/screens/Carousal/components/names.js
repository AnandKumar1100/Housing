'Use Strict';

import React, { PureComponent } from 'react';
import { View, Text, ActivityIndicator } from 'react-native'
import * as CONSTANTS from './constants'
import { Styles } from './styles';

export default class CarousalName extends PureComponent {

    constructor(props) {
        super(props)
        this.id = null
    }

    componentDidMount() {
        let splittedStr = this.props.url.split('/');
        this.id = splittedStr[splittedStr.length - 2]
        if (this.props.activeSlideIndex === this.props.slideIndex) {
            this.callAPI()
        }
    }

    callAPI() {
        switch (this.props.type) {
            case CONSTANTS.CHARACTERS:
                this.props.fetchCharDetails(this.id, this.props.episodeId)
                return    
            case CONSTANTS.PLANETS:
                this.props.fetchPlanetsDetails(this.id, this.props.episodeId)
                return
            case CONSTANTS.STARSHIPS:
                this.props.fetchStarShipsDetails(this.id, this.props.episodeId)
                return
        }
    }

    render() {
        const { episodeId, allCharactersList, allPlanetsList, allStarShipsList } = this.props
        const mappedCategory = this.props.type === CONSTANTS.CHARACTERS ? allCharactersList : this.props.type === CONSTANTS.PLANETS ? allPlanetsList : allStarShipsList
        return (
            <View style={Styles.charNameBoxContainer}>
                {mappedCategory[episodeId] && mappedCategory[episodeId][this.id] ? mappedCategory[episodeId][this.id].isLoading ? <ActivityIndicator size={'small'}/> : < Text style={Styles.charName}>{mappedCategory[episodeId][this.id].name}</Text> : null}
            </View>);
    }
}
