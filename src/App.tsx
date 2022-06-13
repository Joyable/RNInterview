import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { fetchPeople } from './services';

const App: FunctionComponent = () => {
    fetchPeople().then((people) => console.log(people.map((person) => person.name)));

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello World</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        widt: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 24,
        fontWeight: '600',
        letterSpacing: 1.1,
    },
});

export default App;
