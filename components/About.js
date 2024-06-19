import {Text, View} from 'react-native'
import React from 'react'
import style from '../style.js'

export default class About extends React.Component{

    render(){
        const {message} = this.props
        return(
            <View>
                <Text style={style.title}>About</Text>
                <Text>Lorem ipsum dolor sit amet</Text>
                <Text>{}</Text>
            </View>
        )
    }
}