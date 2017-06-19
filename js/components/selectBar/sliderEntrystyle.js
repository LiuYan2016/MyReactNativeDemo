const React = require('react-native');const { StyleSheet, Dimensions, Platform } = React;

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.9;
const slideWidth = wp(76);
const unit = viewportHeight / 20;

export const sliderWidth = viewportWidth;
export const itemHorizontalMargin = wp(2);
export const itemWidth = slideWidth + itemHorizontalMargin;

const entryBorderRadius = 8;

export default {

  slideInnerContainer: {
    width: itemWidth,
    marginTop: unit * 1.2,
    backgroundColor: '#fff',
    borderRadius: Platform.OS === 'ios' ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
    borderBottomLeftRadius: entryBorderRadius,
    borderBottomRightRadius: entryBorderRadius,
  },
  image: {
    width: itemWidth,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
  },
  // image's border radius is buggy on ios; let's hack it!
  radiusMask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius,
    backgroundColor: 'black'
  },
  content: {
    flex: 1,    padding: unit,
    alignItems: 'center',    justifyContent: 'center'  },
  barName: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold'
  },
  distance: {
    marginTop: unit / 2,
    marginBottom: unit / 2,
    fontSize: 15,
  },
  icon: {
    fontSize: 16,
  },
  address: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: unit / 2,
  },
  button: {
    backgroundColor: '#C20490',    borderRadius: 5,    height: unit * 1.5
  },
  buttontext: {
    fontSize: 18,
    paddingBottom: 5,  },
  point: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#888',
    margin: 8
  },
  pointActive: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
    margin: 8
  },
  slidefooter: {
    marginTop: unit,
    flex: 1,    alignItems: 'center',    justifyContent: 'center',
    flexDirection: 'row',
  }
}
