import { View, Text, StyleSheet, Image } from "react-native";
import PrimaryButton from "../components/primaryButton";
import Title from "../components/title";
import Colors from "../constants/colors";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    marginTop: 100,
    alignItems: "center",
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 125,
    width: 250,
    height: 250,
    borderWidth: 3,
    marginTop: 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  counterContainer: {
    padding: 10,
    alignItems: "center",
    marginTop: 20,
  },
});

export default function GameOverScreen({ Counter,restartGame }) {
  return (
    <View style={styles.screen}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <View style={styles.counterContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 30,textAlign:'center' }}>
          It took us {Counter} tries to get the Number{" "}
        </Text>
        <PrimaryButton onPress={()=>restartGame()}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
}
