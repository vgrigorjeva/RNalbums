// header component. steps: import libraries for making a component, make a component, 
// make the component available to other parts of the app

import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#f8fff8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        elevation: 5,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

export default Header;
