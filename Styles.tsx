import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    input: {
        backgroundColor: "lightgray",
        borderWidth: 2,
        borderStyle: "dashed",
        borderColor: "black",
        borderRadius: 5,
        width: 150,
        aspectRatio: 2,
    },
    container: {
        flex: 1,
        justifyContent: "space-around",
        backgroundColor: 'skyblue',
        alignItems: 'center',

    },
    text: {
        fontSize: 40,

    },
    buttons:{
        justifyContent: "space-around",
        width: "100%",
        flexDirection: "row",
        backgroundColor: "red",
        fontSize: 40,
    },
    buttonText: {
        fontSize: 40,

    },
});