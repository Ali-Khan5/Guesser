import { Text, View, Pressable, StyleSheet } from "react-native";
import Colors from '../constants/colors';
const styles = StyleSheet.create({
  OuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
    width: 150,
  },
  InnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 16,
    paddingHorizontal: 8,
    elevation: 2,
    width: "100%",
  },
  ButtonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
    
  },
});

function PrimaryButton({ children,onPress }) {
  function pressHandler() {
    console.log("Pressed");
    onPress();
  } 
  return (
    <View style={styles.OuterContainer}>
      <Pressable
        onPress={pressHandler}
        //using deconstructor to get a builtin variable which
        //gives indication on whether a button is pressed or not
        style={({ pressed }) =>
          pressed
            ? [styles.InnerContainer, styles.pressed]
            : styles.InnerContainer
        }
      >
        <Text style={styles.ButtonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
