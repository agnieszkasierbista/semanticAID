import {Button, Text, TextInput, View, Alert} from 'react-native';
import {styles} from "./Styles";
import React, {useState} from "react";
import {questions} from "./questions";

export default function App() {

    const [currentQnA, setCurrentQnA] = useState(questions);
    const [element, setElement] = useState("");


    function pressYes() {
        if (typeof currentQnA.yes === "string") {
            setElement(currentQnA.yes)
        } else {
            setCurrentQnA(currentQnA.yes)
        }
    }

    function pressNo() {
        if (typeof currentQnA.no === "string") {
            setElement(currentQnA.no)
        } else {
            setCurrentQnA(currentQnA.no)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30}}>{currentQnA.q}</Text>
            <Button title={"Yes"} onPress={pressYes}/>
            <Button title={"No"} onPress={pressNo}/>
            <Text style={{fontSize: 30}}>{element}</Text>
        </View>
    );
}

