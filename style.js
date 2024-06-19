import {StyleSheet} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default StyleSheet.create({
    color: '#ba0d7b',
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 25,
      alignContent: 'center',
      justifyContent: 'center',
      fontWeight: 'bold'
    },
    input: {
      borderColor: '#ba0d7b',
      borderWidth: 2,
      borderRadius: 5,
      width: 200,
      height: 40,
      padding: 5,
      marginTop: 25,
      marginBottom: 10
    }
})