import { vs } from '../../util'
import { BasicCheckBoxWithLabel } from '../'
import * as Constants from '../../constants/'

const PasswordStatusStyle = {
  container: {
    height: vs(129),
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Constants.TRANSPARENT
  },
  containerWhite: {
    height: vs(129),
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Constants.WHITE
  },
  instructions: {
    fontSize: Constants.FONTS.defaultFontSize,
    fontFamily: Constants.FONTS.fontFamilyRegular,
    color: Constants.GRAY_1,
    width: '80%',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    lineHeight: 20
  },
  boxes: {
    flex: 5,
    flexDirection: 'column',
    top: 5

  },
  checkboxContainer: {
    height: vs(20),
    marginTop: 4
  },
  textContainer: {
    position: 'relative',
    width: '100%',
    flexDirection: 'column',
    marginTop: 5,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  shim: {
    height: 5,
    width: 30
  },
  checkboxes: BasicCheckBoxWithLabel,
  text: {
    textAlign: 'center',
    fontFamily: Constants.FONTS.fontFamilyRegular,
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: 6,
    fontSize: 11

  }
}

export { PasswordStatusStyle }
