import {Text, View, ActivityIndicator, FlatList} from 'react-native'
import React from 'react'
import style from '../style.js'

export default class Result extends React.Component{

    fetchAPI = (url) => {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => {
                if(!response.ok){
                    throw new Error('La requête a échoué');
                }
                return response.json();
            })
            .then(data => {
                resolve(data)
            })
            .catch(error => {
                reject(error)
            })
        })
    }

    constructor(props){
        super(props) //constructeur parent

        this.state = {
            r : this.props.route.params.research,
            data : null
        }

        setTimeout(() => {
            //this.setState({data : 'qlq chose'})
            this.fetchAPI('https://api.tvmaze.com/search/shows?q='+this.state.r)
                .then(data => {
                    this.setState({data : data.map(({show}) => show.name)})
                    console.log(data);
                })
                .catch(error => console.error('Erreur de requête:', error))
        }, 1000)
    }

    render(){

        this.props.navigation.setOptions({
            title : 'Recherche : '+this.state.r
        })

        if(this.state.data === null){
            return(
                <View>
                    <Text style={{marginBottom:10}}>Une peu de patience...</Text>
                    <ActivityIndicator color={style.color} size='small' />
                </View>
            )
        } else {
            return(
                <View>
                    <Text style={style.title}>Resultats</Text>
                    <FlatList data={this.state.data} renderItem={({item}) => <Text>{item}</Text>} />
                </View>
            )
        }
    }
}