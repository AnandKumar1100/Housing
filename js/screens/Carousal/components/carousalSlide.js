'Use Strict';

import React, { PureComponent } from 'react';
import { View, ScrollView, Text } from 'react-native'
import CarousalName from '../container/carousalNames'
import * as CONSTANTS from './constants'
import { Styles } from './styles';

export default class CarousalSlide extends PureComponent{

    render() {
        const { movieDetails, slideIndex } = this.props
      return (
          <ScrollView style={Styles.slideContainer}>
              <View style={Styles.flex_row}>
                  <Text style={Styles.titleText}>Title: </Text>
                  <Text style={Styles.titleText}>{movieDetails.title}</Text>
              </View>
              <View style={Styles.releaseDateContainer}>
                  <Text style={Styles.titleText}>Release: </Text>
                  <Text style={Styles.titleText}>{movieDetails.release_date}</Text>
              </View>
              <Text style={Styles.charText}>Characters</Text>
              <View style={Styles.charNamesContainer}>
                  {movieDetails.characters.map((item, index) => <CarousalName episodeId={movieDetails.episode_id} slideIndex={slideIndex} type={CONSTANTS.CHARACTERS} url={item} key={index}/>)}
              </View>
              <Text style={Styles.charText}>Planets</Text>
              <View style={Styles.charNamesContainer}>
              {movieDetails.planets.map((item, index) => <CarousalName episodeId={movieDetails.episode_id} slideIndex={slideIndex} type={CONSTANTS.PLANETS} url={item} key={index}/>)}
              </View>
              <Text style={Styles.charText}>Starships</Text>
              <View style={Styles.charNamesContainer}>
              {movieDetails.starships.map((item, index) => <CarousalName episodeId={movieDetails.episode_id} slideIndex={slideIndex} type={CONSTANTS.STARSHIPS} url={item} key={index}/>)}
              </View>
          </ScrollView>);
    }
}
