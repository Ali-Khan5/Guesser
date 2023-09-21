import { View, Text, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";
import PrimaryButton from "../components/primaryButton";
import Title from "../components/title";
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    marginTop: 50,
  },
  container: {
    borderWidth: 4,
    borderColor: Colors.primary500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  Cardcontainer: {
    marginTop: 25,
    // paddingHorizontal: 75,
    // paddingVertical:25,
    padding: 25,
    marginHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary600,
    borderRadius: 8,
    //     elevation: 4, //only works on android
    //     shadowColor: "#000000",
    //     shadowOffset: { width: 2, height: 5 },
    //     shadowRadius: 6,
    //     shadowOpacity: 0.25,
  },
  numberText: {
    color: Colors.primary500,
    fontSize: 36,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    // width: 100,
    justifyContent: "center",
  },
  highLowText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    color: "white",
  },
});

let minBoundary = 1;
let maxBoundary = 100;

function generateRandomNumber(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
}

export default function GameScreen({
  chosenNumber,
  gameOverHandler,
  addCounterHandler,
}) {
  const initialGuess = generateRandomNumber(1, 100, chosenNumber);
  const [gameState, setGameState] = useState(initialGuess);

  function nextGuessHandler(direction) {
    //lower or greater
    if (
      (direction == "lower" && gameState < chosenNumber) ||
      (direction == "greater" && gameState > chosenNumber)
    ) {
      Alert.alert("Dont lie!!", "you know that this is wrong", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction == "lower") {
      maxBoundary = gameState - 1;
      addCounterHandler();
    } else if (direction == "greater") {
      minBoundary = gameState + 1;
      addCounterHandler();
    }
    let newRandomNum = generateRandomNumber(
      minBoundary,
      maxBoundary,
      gameState
    );
    setGameState(newRandomNum);
  }
  useEffect(() => {
    if (gameState == chosenNumber) {
      console.log("condition  met");
      gameOverHandler(true);
    }
    console.log("condition not met");
  }, [gameState, chosenNumber, gameOverHandler]);
  
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>

      <View style={styles.container}>
        <Text style={styles.numberText}>{gameState}</Text>
      </View>
      <View style={styles.Cardcontainer}>
        <Text style={styles.highLowText}>Higher or Lower?</Text>
        <View style={styles.buttonContainer}>
          {/* + */}
          {/* - */}
          <PrimaryButton onPress={() => nextGuessHandler("greater")}>
            <Ionicons name="md-add" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            <Ionicons name="md-remove" size={24} color="white" />
          </PrimaryButton>
        </View>
      </View>
      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
}
