import { Text,View, StyleSheet, TouchableHighlight} from 'react-native';
import { FC, useState, useEffect } from "react";
import Square from './Square';
type Player = "X" | "O" | "BOTH" | null;

const Board: FC = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(Math.round(Math.random() * 1) === 1 ? "X" : "O")
    const [winner, setWinner] = useState < Player>(null)
    function calculateWinner(squares: Player[]) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    function reset() {
        setSquares(Array(9).fill(null));
        setWinner(null);
        setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
    }
    function setSquareValue(index: number) {
        const newData = squares.map((val, i) => {
            if (i === index) {
                return currentPlayer;
            }
            return val;
        });
        setSquares(newData);

        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
    useEffect(() => {
        const w = calculateWinner(squares);
        if (w) {
            setWinner(w);
        }

        if (!w && !squares.filter((square) => !square).length) {
            setWinner("BOTH");
        }
    });
    return (
        <View>
            <View style={styles.mainContainer}>
                <View style={styles.row}>
                    <Square key={0}
                        onClick={() => setSquareValue(0)}
                        value={squares[0]}
                        winner={winner} />
                    <Square key={1}
                        onClick={() => setSquareValue(1)}
                        value={squares[1]}
                        winner={winner} />
                    <Square key={2}
                        onClick={() => setSquareValue(2)}
                        value={squares[2]}
                        winner={winner} />
                </View>
                <View style={styles.row}>
                    <Square key={3}
                        onClick={() => setSquareValue(3)}
                        value={squares[3]}
                        winner={winner} />
                    <Square key={4}
                        onClick={() => setSquareValue(4)}
                        value={squares[4]}
                        winner={winner} />
                    <Square key={5}
                        onClick={() => setSquareValue(5)}
                        value={squares[5]}
                        winner={winner} />
                </View>
                <View style={styles.row}>
                    <Square key={6}
                        onClick={() => setSquareValue(6)}
                        value={squares[6]}
                        winner={winner} />
                    <Square key={7}
                        onClick={() => setSquareValue(7)}
                        value={squares[7]}
                        winner={winner} />
                    <Square key={8}
                        onClick={() => setSquareValue(8)}
                        value={squares[8]}
                        winner={winner} />
                </View>
            </View>

            <View style={styles.turnWrap3}>
                {!winner && <Text style={styles.turnText}>Player {currentPlayer} turn</Text>}
                {winner && winner !== "BOTH" && <Text style={styles.turnWin}>Congratulations {winner}</Text>}
                {winner && winner === "BOTH" && (
                    <Text style={styles.turnWin}>Congratulations you're both winners</Text>
                )}
            </View >
            <TouchableHighlight onPress={reset} underlayColor="silver" style={styles.reset}>
                <View style={styles.turnWrap2}>
                    <Text style={styles.turnText}>Rest</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        borderWidth: 1,
        marginBottom: 20,
        height:370
        
    },
    row: {
        flex: 1,
        flexDirection: "row",

    },
    turnText: {
        fontSize: 25,
        marginHorizontal: 5,
    },
    turnWin: {
        fontSize: 25,
        marginHorizontal: 5,
        color: "green",
        textAlign: "center"
    },
    turnWrap: {
        marginTop: 0,
        alignSelf: "center",

    },
    turnWrap2: {
        marginTop: 0,
        alignSelf: "center",
        borderWidth: 2,
        borderRadius: 7,
 
    },
    turnWrap3: {
        marginBottom:13,
        alignSelf: "center",
        verticalAlign: "top",
        fontSize: 40,
    },
    reset: {
        width: 65,
        alignSelf: "center",
        marginBottom:0
},
})

export default Board;