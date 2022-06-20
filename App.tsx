import {Button, Text, TextInput, View, Alert} from 'react-native';
import {styles} from "./Styles";
import React, {useState} from "react";
import {questions, YesOrNo} from "./questions";

export default function App() {

    const [currentQnA, setCurrentQnA] = useState(questions);
    const [element, setElement] = useState("");

    function answer(yesOrNo: YesOrNo) {
        if (typeof yesOrNo === "string") {
            setElement(yesOrNo)
        } else {
            setCurrentQnA(yesOrNo)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30}}>{currentQnA.q}</Text>
            <Button title={"Yes"} onPress={() => answer(currentQnA.yes)}/>
            <Button title={"No"} onPress={() => answer(currentQnA.no)}/>
            <Text style={{fontSize: 30}}>{element}</Text>
        </View>
    );
}

