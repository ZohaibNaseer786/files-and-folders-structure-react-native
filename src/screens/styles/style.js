import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors/color';

export default StyleSheet.create({
  mainBody: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  textStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  }
});
