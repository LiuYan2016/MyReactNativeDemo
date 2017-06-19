import React, { Component } from 'react';
import { View, Text, Button, Icon } from 'native-base';
import { Image } from 'react-native';
import styles from './sliderEntrystyle';
import { connect } from 'react-redux';


class SliderEntry extends Component {

  static propTypes = {
    bar: React.PropTypes.object,
    index: React.PropTypes.number
  }

  drawPoints(){
    var points = [];
    for (let i = 0; i < this.props.barCount; i ++){
      if (i == this.props.index)
        points.push(<View style={styles.pointActive} key={i}></View>)
      else
        points.push(<View style={styles.point} key={i}></View>)

    }
    return points;
  }

  render () {
    const { barImg, barName, distance, address } = this.props;

    return (
      <View style={styles.outview}>
        <View style={styles.slideInnerContainer}>
          <Image
            source={barImg}
            style={styles.image}
          />
          <View style={styles.content}>
            <Text style={styles.barName}>{barName}</Text>
            <Text style={styles.distance}><Icon name='ios-pin' style={styles.icon}></Icon>  {distance} m</Text>
            <Text style={styles.address}>Address:{address}</Text>
            <Button full style={styles.button}><Text style={styles.buttontext}>View Menu</Text></Button>
          </View>
        </View>
        <View style={styles.slidefooter}>
          {this.drawPoints()}
        </View>
          </View>
    );
        }
}

const mapStateToProps = state => ({
  barCount : state.barList.barCount,
});

function bindAction(dispatch) {  return {  };}export default connect(mapStateToProps, bindAction)(SliderEntry);
