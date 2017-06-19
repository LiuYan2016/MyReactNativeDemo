
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import LandingScreen from './components/landingScreen/';
import FacebookLogin from './components/customerLogin/facebookLogin';
import Signup from './components/customerLogin/signup';
import Login from './components/customerLogin/customerLogin';
import SelectBar from './components/selectBar/';
import ShowTime from './components/showTime/';
import { statusBarColor } from './themes/base-theme';


const RouterWithRedux = connect()(Router);

class AppNavigator extends Component {

  static propTypes = {
    drawerState: React.PropTypes.string,
    closeDrawer: React.PropTypes.func,
  }

  componentDidUpdate() {
    if (this.props.drawerState === 'opened') {
      this.openDrawer();
    }

    if (this.props.drawerState === 'closed') {
      this._drawer._root.close();
    }
  }


  _renderScene(props) { // eslint-disable-line class-methods-use-this
    switch (props.scene.route.key) {
      case 'login':
        return <Login />;
      case 'landingScreen':
        return <LandingScreen />;
      case 'facebooklogin':
        return <FacebookLogin />;
      case 'signup':
        return <Signup />;
      case 'selectBar':
        return <SelectBar />;

      default :
        return <Login />;
    }
  }

  render() {
    return (
      <RouterWithRedux>
        <Scene key="root">
          <Scene key="landingScreen" component={LandingScreen} hideNavBar/>
          <Scene key="facebooklogin" component={FacebookLogin} hideNavBar/>
          <Scene key="signup" component={Signup} hideNavBar/>
          <Scene key="selectBar" component={SelectBar} hideNavBar/>
          <Scene key="login" component={Login} hideNavBar/>
          <Scene key="showTime" component={ShowTime} hideNavBar initial/>
        </Scene>
      </RouterWithRedux>
    );
  }
}

function bindAction(dispatch) {
  return {
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(AppNavigator);
