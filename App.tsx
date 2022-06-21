import {Button, Text, TextInput, View, Alert, Pressable} from 'react-native';
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
            <Text style={styles.text}>{currentQnA.q}</Text>
            {
                element.length
                    ? null
                    : (<View style={styles.buttons}>
                        <Pressable  onPress={() => answer(currentQnA.yes)}>
                            <Text style={styles.buttonText}>Yes</Text>
                        </Pressable>
                        <Pressable onPress={() => answer(currentQnA.no)}>
                            <Text style={styles.buttonText}>No</Text>
                        </Pressable>
                    </View>)
            }
            <Text style={{fontSize: 30}}>{element}</Text>
        </View>
    );
}

