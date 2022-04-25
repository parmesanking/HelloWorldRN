import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import NativeComm from "./src/components/NativeComm";
export default function App(props) {
  return (
    <View style={styles.container}>
      <Text>I'm a REACT NATIVE VIEW</Text>
      <Text>
        {props.message_from_native && (
          <Text>RECEIVED:{props.message_from_native}</Text>
        )}
      </Text>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            NativeComm.sendMessage(`YO! Button clicked..., ${props.rootTag}`);
          }}
          style={{
            backgroundColor: "purple",
            color: "white",
            width: "80%",
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              backgroundColor: "transparent",
              color: "white",
            }}
          >
            Click me!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            NativeComm.exitRN(props.rootTag);
          }}
          style={{
            backgroundColor: "purple",
            color: "white",
            width: "80%",
            alignItems: "center",
            justifyContent: "center",
            height: 50,
          }}
        >
          <Text
            style={{
              backgroundColor: "transparent",
              color: "white",
            }}
          >
            BACK TO NATIVE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
