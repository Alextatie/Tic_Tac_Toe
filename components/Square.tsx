import { View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { FC } from "react";

const o = "../assets/o.png";
const x = "../assets/x.png";
const empty = "../assets/empty.png";

type Player = "X" | "O" | "BOTH"|null
const Square: FC<{
    value: Player,
    onClick: () => void,
    winner: Player
}> = ({ value, onClick, winner }) => {

    if (!value) {
        return (
            <TouchableHighlight onPress={onClick} underlayColor="white" disabled={Boolean(winner)}>
            <View style={{ flex: 1, backgroundColor: "white", borderWidth:1 }}>
                <Image style={styles.Square} source={require(empty)} />
            </View>
        </TouchableHighlight>
        )
    }
    if (value == "X") {
        return (
            <TouchableHighlight onPress={onClick} underlayColor="white" disabled={true}>
                <View style={styles.Button}>
                    <Image style={styles.Square} source={require(x)} />
                </View>
            </TouchableHighlight>
        )
    }
    if (value == "O") {
        return (
            <TouchableHighlight onPress={onClick} underlayColor="white" disabled={true}>
                <View style={styles.Button}>
                    <Image style={styles.Square} source={require(o)} />
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    Square: {
        height: 119,
        width:119
    },
    Button: {
        flex: 1,
        backgroundColor: "white",
        borderWidth: 1 

    },
})
export default Square