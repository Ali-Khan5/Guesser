import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/primaryButton";

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        padding: 15,
        marginHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 4, //only works on android
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 5 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 40,
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: 'bold'
    }
});

function StartGameScreen() {
    return (
        <View style={styles.container}>
            <TextInput
                maxLength={2}
                keyboardType={'numeric'}
                autoCorrect={false}
                style={styles.numberInput} />
            <PrimaryButton>
                Reset
            </PrimaryButton>
            <PrimaryButton>
                Confirm
            </PrimaryButton>
        </View>

    );

}

export default StartGameScreen;