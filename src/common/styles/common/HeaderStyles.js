import * as Constants from '../../constants/'
import { vs } from '../../util'
import * as Styles from '../'

const HeaderContainerStyle = {
  container: {
    position: 'relative',
    height: Constants.HEADER_HEIGHT,
    width: '100%',
    backgroundColor: Constants.TRANSPARENT,
    flexDirection: 'row'
  },
  headerBackButtonStyle: {
    backButton: {
      flexDirection: 'row',
      alignItems: 'center'
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
      color: Constants.WHITE,
      fontSize: 25
    },
    default: {
      backgroundColor: Constants.TRANSPARENT,
      color: Constants.WHITE
    }
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 6
  },
  center: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 6,
    // alignItems: 'center'
  },
  headlineText: {
    fontSize: 20,
    lineHeight: 20,
    width: '100%',
    textAlign: 'center',
    color: Constants.WHITE,
    fontWeight: '500',
    fontFamily: Constants.FONTS.fontFamilyRegular,
    paddingBottom: 5
  },
  subHeadText: {
    fontSize: 11,
    width: '100%',
    textAlign: 'center',
    color: Constants.PURPLE
  },
  textButton: {
    upStyle: { ...Styles.TextOnlyButtonUpStyle, width: '100%' },
    upTextStyle: {
      ...Styles.TextOnlyButtonTextUpStyle,
      width: '100%',
      color: Constants.WHITE,
      fontSize: Constants.FONTS.defaultButtonTextSize
    },
    downTextStyle: {
      ...Styles.TextOnlyButtonTextDownStyle,
      width: '100%',
      color: Constants.SECONDARY,
      fontSize: Constants.FONTS.defaultButtonTextSize
    },
    downStyle: {
      ...Styles.TextOnlyButtonDownStyle,
      width: '100%',
      height: vs(50)
    }
  }
}

export { HeaderContainerStyle }
