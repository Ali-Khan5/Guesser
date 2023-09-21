import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#007b10",
    textAlign: "center",
    borderWidth: 5,
    borderColor: "#007b10",
    padding: 12,
  },
});

export default function Title({ children }) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}
