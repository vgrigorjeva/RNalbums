// FUNCTIONAL COMPONENT used for presenting static data, can't handle fetching data
// easy to write => 
/* const Header = () => {
  return <Text>hi there</Text>
} */

/* CLASS COMPONENT used for dynamic sources of data, handles any data that might change
(fetching data, user events, etc), knows when it gets erendered to the device (usefull 
for data fetching), more code to write => 
class Header extends Component {
  render() {
    return <Text>hi there</Text>
  }
}*/

// React knows how a component should behave and knows ho to take a bunch of 
// components and make them work together

// React Native knows how to take the output from the component
// and place it on the screen. also provides default core components(image, text)

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component. a component is a js function which returns some amount of jsx
// jsx is a dielect of a javascript that tells react native what content we want to show 
// on the screen
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render component to the device. only root component uses the appregistry
AppRegistry.registerComponent('rnProject', () => App);
