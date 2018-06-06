import * as Colors from '../../../common/constants/Colors.js'
// import { vs } from '../../../common/util'

const FourDotInputStyle = {
  container: {
    width: '100%',
    height: 60,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#00ff00'
  },
  interactiveContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#29bcff'
  },
  errorContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: '#ff84dd'
  },
  dotContainer: {
    height: '100%',
    width: 190,
    marginTop: 0, //20
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#fff497'
  },
  errorText: {
    color: Colors.ACCENT_RED,
    backgroundColor: Colors.TRANSPARENT,
    textAlign: 'center'
  },
  input: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0
  },
  circle: {
    opacity: 0.4,
    backgroundColor: Colors.PURPLE,
    borderRadius: 15,
    height: 25,
    width: 25
  },
  circleSected: {
    opacity: 1,
    backgroundColor: Colors.PURPLE,
    borderRadius: 15,
    height: 25,
    width: 25
  }
}
const FourDotInputDarkStyle = {
  container: {
    width: 200,
    height: 60
  },
  interactiveContainer: {
    flex: 1,
    width: '100%'
  },
  errorContainer: {
    marginTop: 20,
    flex: 1,
    width: '100%',
  },
  dotContainer: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  errorText: {
    width: '100%',
    height: 40,
    lineHeight: 10,
    textAlign: 'center',
    color: Colors.ACCENT_RED,
    padding: 5
  },
  input: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0
  },
  circle: {
    // borderWidth: 2,
    // borderColor: Colors.PRIMARY,
    opacity: 0.4,
    backgroundColor: Colors.PURPLE,
    borderRadius: 15,
    height: 25,
    width: 25
  },
  circleSected: {
    opacity: 1,
    backgroundColor: Colors.PURPLE,
    // borderWidth: 2,
    // borderColor: Colors.PRIMARY,
    borderRadius: 15,
    height: 25,
    width: 25
  }
}

export { FourDotInputDarkStyle }
export { FourDotInputStyle }
