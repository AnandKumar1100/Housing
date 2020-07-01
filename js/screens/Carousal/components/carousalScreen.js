'Use Strict';

import React, { Component } from 'react';
import { View, FlatList, SafeAreaView, ActivityIndicator, Dimensions } from 'react-native'
import Episodes from './episodes'
import { Styles } from "./styles";

const windowWidth = Dimensions.get('window').width
export default class CarousalScreen extends Component {

  constructor(props) {
    super(props)
    this.activeSlideIndex = 0
  }

  componentDidMount() {
    this.props.fetchMoviesList()
  }

  renderItem = ({ item, index }) => {
    return (<Episodes movieDetails={item} slideIndex={index}/>);
  }

  itemKeyExtractor = (item, index) => String(item.episode_id)

  onMomentumScrollEnd = event => {
    const index = Math.round(event.nativeEvent.contentOffset.x / windowWidth);
    if (Number.isInteger(index)) {
      if (index !== this.activeSlideIndex) {
        this.props.storeActiveSlideIndex(index)
        this.activeSlideIndex = index
      }
    }
  }

  render() {
    const { isLoading, moviesList } = this.props
    return (<SafeAreaView style={Styles.fill}>
      {isLoading ? <View style={Styles.loaderContainer}><ActivityIndicator size="large" color="#379aff" /></View> :
        <FlatList
          data={moviesList}
          horizontal={true}
          pagingEnabled={true}
          keyExtractor={this.itemKeyExtractor}
          style={Styles.fill}
          renderItem={this.renderItem}
          onMomentumScrollEnd={this.onMomentumScrollEnd} />}
    </SafeAreaView>);
    }
}
