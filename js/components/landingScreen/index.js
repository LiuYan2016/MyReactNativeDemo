
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Item, Input, Button, Icon, View, Text, Thumbnail, H1 } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity } from 'react-native';

import styles from './styles';


const background = require('../../../images/neverwait-bar_owner_backImage.png');
const logo = require('../../../images/logo.png');

class LandingScreen extends Component {

  static propTypes = {
    setUser: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Image source={background} style={styles.shadow}>
            <Content>
              <View style={styles.bg}>
                <Image style={styles.logo} source={logo} />

                <Text style={styles.title}>NeverWait</Text>
                <Text style={styles.title}>allows people to</Text>
                <Text style={styles.title}>order and pay for</Text>
                <Text style={styles.title}>drinks at bar</Text>

                <Button style={styles.buttonstyle1} full onPress={() => Actions.facebooklogin()}>
                  <Icon name='logo-facebook' /><Text style={styles.buttontext}>  Continue with Facebook</Text>           
                </Button>
                <Button style={styles.buttonstyle2} full onPress={() => Actions.signup()}>
                  <Icon name='ios-mail-outline' /><Text style={styles.buttontext}>  Sign up with email</Text>                  
                </Button>

                <View style={styles.loginContainer}>
                  <Text style={styles.loginquestion}>Have an account? </Text>
                  <TouchableOpacity onPress={() => Actions.login()}>
                    <Text style={styles.logintext}>Log in</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </Content>
          </Image>
        </View>
      </Container>
    );
          }
}

function bindAction(dispatch) {
  return {
  };
}
export default connect(null, bindAction)(LandingScreen);
