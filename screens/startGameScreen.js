import { TextInput, View, StyleSheet, Alert ,Text} from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/primaryButton";
import Colors from "../constants/colors";
import Title from "../components/title";

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
    //  alignItems: "center",
    padding:15
  },
  container: {
    marginTop: 25,
    paddingHorizontal: 75,
    paddingVertical:25,
    // marginHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary600,
    borderRadius: 8,
    elevation: 4, //only works on android
    shadowColor: "black",
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 30,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 25,
    flexDirection: "row",
    // width: 100,
    justifyContent: "center",
  },
});

function StartGameScreen(props) {
  const [inputField, setInputField] = useState("");

  function setNumberInputField(inputText) {
    setInputField(inputText);
  }
  function resetInput() {
    setInputField("");
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(inputField);
    if (isNaN(chosenNumber) || chosenNumber <= 0) {
      //show alert
      Alert.alert("Invalid Number!!", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInput },
      ]);
      return;
    }
    props.onPickNumber(chosenNumber);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <View style={styles.container}>
        <Text style={{color:'white',fontSize:22}}>Enter a Number</Text>
        <TextInput
          maxLength={2}
          keyboardType={"numeric"}
          autoCorrect={false}
          style={styles.numberInput}
          value={inputField}
          onChangeText={setNumberInputField}
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;
