import {Button, Text, TextInput, View, Alert} from 'react-native';
import {styles} from "./Styles";
import React, {useState} from "react";
import {questions} from "./questions";

export default function App() {

    const [q, setQ] = useState(questions);
    const [counter, setCounter] = useState(0);

    function goToTheNextQuestion() {
        setCounter((counter) => counter + 1)
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30}}>{q[counter]}</Text>
            <Button title={"Yes"} onPress={goToTheNextQuestion}/>
            <Button title={"No"} onPress={goToTheNextQuestion}/>
        </View>
    );
}

