import {Text, View} from 'react-native'
import React from 'react'
import style from '../style.js'

export default class Home extends React.Component{
    render(){
        const {navigation} = this.props
        return(
            <View>
                <Text style={style.title}>Home</Text>
                <Text>Blablablabla</Text>
            </View>
        )
    }
}


//https://opentdb.com/api.php?amount=1&category=11&difficulty=medium