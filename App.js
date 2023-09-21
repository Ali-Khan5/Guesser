import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/startGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/gameScreen";
import GameOverScreen from "./screens/gameOverScreen";


export default function App() {
  const [userNumber, setUserNumber] = useState(0);
  const [gameOver,setgameOver]=useState(false);
  const [counter,setCounter]=useState(0);

  function changeCounter(){
    setCounter((preval)=>preval+1);
    console.log('counter is ',counter);
  }
  function pickedNumberHandler(num) {
    setUserNumber(num);
  }

  function changeGameOver(condition){
    setgameOver(condition);
  }
  function reset(){
    setUserNumber(0);
    setCounter(0);
    setgameOver(false);
  }

  let appState = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber && !gameOver) {
    appState = <GameScreen addCounterHandler={changeCounter}
     chosenNumber={userNumber} gameOverHandler={changeGameOver} />;
  }

  else if (userNumber && gameOver){
    appState=<GameOverScreen Counter={counter} restartGame={reset}/>
  }

  return (
    <LinearGradient colors={["#ffee00", "#ad0342"]} style={styles.RootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.RootScreen}
        imageStyle={{ opacity: 0.3 }}
      >
        <SafeAreaView style={styles.RootScreen}>{appState}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  RootScreen: {
    flex: 1,
    // backgroundColor: "#d7de0c",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
