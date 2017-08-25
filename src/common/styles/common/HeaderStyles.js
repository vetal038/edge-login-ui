import * as Colors from '../../constants/Colors'
import { vs, fontSize } from '../../util'
import * as Styles from '../'

const HeaderContainerStyle = {
  container: {
    position: 'relative',
    height: vs(65),
    width: '100%',
    backgroundColor: Colors.PRIMARY,
    flexDirection: 'row'
  },
  left: {
    flex: 1,
    justifyContent: 'space-around'
  },
  center: {
    flex: 3,
    justifyContent: 'flex-end',
    paddingBottom: 5
  },
  right: {
    flex: 1,
    justifyContent: 'space-around' // ,
    // alignItems: 'center'
  },
  headlineText: {
    fontSize: fontSize(17),
    width: '100%',
    textAlign: 'center',
    color: Colors.WHITE
  },
  subHeadText: {
    fontSize: fontSize(11),
    width: '100%',
    textAlign: 'center',
    color: Colors.ACCENT_ORANGE
  },
  textButton: {
    upStyle: { ...Styles.TextOnlyButtonUpStyle, width: '100%' },
    upTextStyle: {
      ...Styles.TextOnlyButtonTextUpStyle,
      width: '100%',
      color: Colors.WHITE,
      fontSize: fontSize(12)
    },
    downTextStyle: {
      ...Styles.TextOnlyButtonTextDownStyle,
      width: '100%',
      color: Colors.SECONDARY,
      fontSize: fontSize(12)
    },
    downStyle: {
      ...Styles.TextOnlyButtonDownStyle,
      width: '100%',
      height: vs(50)
    }
  }
}

export { HeaderContainerStyle }
