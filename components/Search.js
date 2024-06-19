import {Text, View, TextInput, Button} from 'react-native'
import React from 'react'
import style from '../style.js'

export default class Search extends React.Component{

    constructor(props){
        super(props) //constructeur parent

        this.state = {
            r : ''
        }
    }

    submit(){
        this.props.navigation.navigate('Result', {research: this.state.r});
    }

    render(){
        return(
            <View>
                <Text style={style.title}>Recherche</Text>
                <TextInput style={style.input} onChangeText={(t) => this.setState({r : t})} />
                <Button title='Rechercher' onPress={ () => this.submit() } />
            </View>
        )
    }
}