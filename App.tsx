import { StyleSheet, View} from 'react-native';
import React from 'react';
import Board from './components/Board';


export default function App() {     
    return (
        <View style={styles.mainContainer}>
            <Board />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 35,
        marginHorizontal: 14,
        marginBottom: 10,
        alignItems: "center",

    },
});
