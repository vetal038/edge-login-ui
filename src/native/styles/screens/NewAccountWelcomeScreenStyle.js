import * as Styles from '../'
import * as Constants from '../../../common/constants/'

const NewAccountWelcomeScreenStyle = {
  screen: { ...Styles.ScreenStyle },
  row1: {
    ...Styles.ScreenRow,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  row2: { ...Styles.ScreenRow, flex: 4 },
  row3: { ...Styles.ScreenRow, flex: 3 },
  row4: { ...Styles.ScreenRow, flex: 3 },
  row5: { ...Styles.ScreenRow, flex: 1 },
  row6: {
    ...Styles.ScreenRow,
    flex: 3,
    alignItems: 'center'
  },
  welcomeScreen: {
    screenHeader: {
      backgroundColor: '#604dd4',
      flex: 1.3
    },
    headlineText: {
      fontSize: 20,
      width: '100%',
      textAlign: 'center',
      color: Constants.WHITE,
      fontWeight: '700',
      fontFamily: Constants.FONTS.fontFamilyRegular
    },
    center: {
      flex: 3,
      justifyContent: 'flex-end',
      paddingBottom: 5,
      // marginLeft: -20
    },
  },
  logoHeader: Styles.LogoHeaderStyle,
  instructionsText: {
    fontSize: Constants.FONTS.defaultFontSize,
    fontFamily: Constants.FONTS.fontFamilyRegular,
    color: Constants.GRAY_2,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    lineHeight: 25
  },
  callToAction: {
    fontSize: Constants.FONTS.defaultFontSize,
    fontFamily: Constants.FONTS.fontFamilyRegular,
    color: Constants.GRAY_2,
    textAlign: 'center'
  },
  nextButton: {
    upStyle: Styles.PrimaryButtonUpStyle,
    upTextStyle: Styles.PrimaryButtonUpTextStyle,
    downTextStyle: Styles.PrimaryButtonUpTextStyle,
    downStyle: Styles.PrimaryButtonDownStyle
  },
  exitButton: {
    upStyle: { ...Styles.TextOnlyButtonUpStyle, width: null },
    upTextStyle: Styles.TextOnlyButtonTextUpStyle,
    downTextStyle: Styles.TextOnlyButtonTextDownStyle,
    downStyle: Styles.TextOnlyButtonDownStyle
  },
  exitBackButtonStyle: {
    backButton: {
      flexDirection: 'row',
      alignItems: 'center',
      // backgroundColor: 'red'
    },
    backIconStyle: {
      paddingLeft: 10,
      paddingRight: 5,
      paddingTop: 3,
      color: Constants.WHITE
    },
    sideText: {
      color: Constants.WHITE,
      fontSize: 18
    },
    icon: {
      color: Constants.SECONDARY,
      fontSize: 25
    },
    default: {
      backgroundColor: Constants.TRANSPARENT,
      color: Constants.SECONDARY
    }
  },
  left: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  right: {
    flex: 1,
    justifyContent: 'flex-end'
  }
}

export { NewAccountWelcomeScreenStyle }
