import {Color, Matrics, ApplicationStyles, Fonts} from '../../styles';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import {Platform} from 'react-native';

export default styles = {
  ...ApplicationStyles,
  screenTitle: {
    color: Color.white,
    fontSize: Matrics.ScaleValue(15),
    textAlign: 'center',
    fontFamily: Fonts.type.RubikBold,
  },
  linearHeader: {
    width: Matrics.screenWidth,

    ...ifIphoneX(
      {
        height: Matrics.ScaleValue(88),
        paddingTop: Matrics.ScaleValue(44),
      },
      {
        height:
          Platform.OS === 'ios'
            ? Matrics.ScaleValue(64)
            : Matrics.ScaleValue(44),
        paddingTop: Platform.OS === 'ios' ? Matrics.ScaleValue(20) : 0,
      },
    ),
  },
  headerHeight: {
    height: Matrics.ScaleValue(44),
    width: Matrics.screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  backStyles: {
    borderWidth: 1,
  },
};
module.exports = styles;
