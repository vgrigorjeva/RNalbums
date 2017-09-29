import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
/* 
RULES OF STATE
- state: a plain javascript object used to record and respond to user-triggerd events
- when we need to update what a component shows, call this.setState
- only change state with setState, do not do this.state = ... 
- state is only used with class-based components
*/
/* 
TIMELINE
-React native app boots up
-rn decides to render 'app' to the screen
-app decides to render itself, header and albumlist
-albumlist gets initial value of {albums: []}
-albumlist realizes its about to be rendered, calls componentwillmount
-albumlist makes http request
-albumlist's render method is called
-app, albumlist, header apeear on the screen
-.. (GETTING RESPONSE)
http request returns json data
-request handler calls setState
-albumlist's render method is called 
*/
class ALbumList extends Component {
    // initial state for the component
    state = { albums: [] };

    // this method will be automatically called as soon as this component 
    // is about to be rendered to the screen
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    // render method should be always defined within the class-based component
    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default ALbumList;
