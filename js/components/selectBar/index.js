import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Left, Body, Right } from 'native-base';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './sliderEntrystyle';
import SliderEntry from './sliderEntry';
import styles from './style';
import { connect } from 'react-redux';

class SelectBar extends Component {

  static propTypes = {
    barList: React.PropTypes.array,
  }

  getSlides (barList) {
    if (!barList)
      return false;

    return barList.map((bar, index) => {
      return (
        <SliderEntry
          key={`carousel-entry-${index}`}
          index={index}
          {...bar}
        />
      );
    });
  }

  get selectBar() {
    return (
      <Carousel
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        firstItem={0}
        inactiveSlideScale={0.85}
        inactiveSlideOpacity={0.6}
        enableMomentum={false}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContainer}
        showsHorizontalScrollIndicator={false}
        snapOnAndroid={true}
        removeClippedSubviews={false}
      >
        { this.getSlides(this.props.barList) }
      </Carousel>
    );
  }

  render () {
    return (
      <View style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name="md-menu" />
            </Button>
          </Left>

          <Body>
            <Title>Select a Bar</Title>
          </Body>
        </Header>

        <ScrollView
          style={styles.scrollview}
          indicatorStyle={'white'}
          scrollEventThrottle={200}
        >
          { this.selectBar }
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  barList : state.barList.barList,
});

function bindAction(dispatch) {  return {  };}

export default connect(mapStateToProps, bindAction)(SelectBar);

