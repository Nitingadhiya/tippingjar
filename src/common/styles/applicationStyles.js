import {Platform} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

import Matrics from './matrics';
import Color from './color';
import Fonts from '../assets/fonts';

const ApplicationStyles = {
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  tabBarStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: Matrics.ScaleValue(15),
    borderRadius: Matrics.ScaleValue(30),
    height: Matrics.ScaleValue(50),
    ...ifIphoneX(
      {
        marginBottom: Matrics.ScaleValue(15),
      },
      {
        marginBottom: Matrics.ScaleValue(5),
      },
    ),
  },
  flexRow: {
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  tabTouchButton: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: Color.placeholder,
  },
  textInputMainView: {
    marginHorizontal: Matrics.ScaleValue(30),
    marginVertical: Matrics.ScaleValue(10),
  },
  textInput: {
    backgroundColor: Color.white,
    minHeight: Matrics.ScaleValue(44),
    maxHeight: Matrics.ScaleValue(100),
    marginVertical: Matrics.ScaleValue(5),
    paddingHorizontal: Matrics.ScaleValue(10),
    borderWidth: 1,
    borderColor: Color.placeholder,
    borderRadius: Matrics.ScaleValue(5),
    shadowColor: Color.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.46,
    elevation: 2,

    fontSize: Matrics.ScaleValue(12),
    fontFamily: Fonts.type.RubikMedium,
    justifyContent: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
  },
  textInputLabel: {
    fontSize: Matrics.ScaleValue(12),
    fontFamily: Fonts.type.Rubik,
    color: Color.textInputLabel,
  },
};
export default ApplicationStyles;
