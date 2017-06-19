
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, H1, View } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { setTime } from '../../actions/time';
import styles from './styles';


class ShowTime extends Component {

  static propTypes = {
    setTime: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
  }

  setTime(time) {
    this.props.setTime(time);
  }


  render() {
    var time = 1000;
    var self = this;
    setTimeout(function(){
      self.setTime('New Time');
    }, 3000);

    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <H1>ShowTime: {this.props.time}</H1> 
          </Content>
        </View>
      </Container>
    );
          }
}

function bindActions(dispatch) {
  return {
    setTime: time => dispatch(setTime(time)),
  };
}

const mapStateToProps = state => ({
  time : state.time.time,
});

export default connect(mapStateToProps, bindActions)(ShowTime);
