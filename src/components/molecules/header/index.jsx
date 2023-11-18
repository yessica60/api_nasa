import React from "react";
import { View, StyleSheet } from "react-native";
import TextAtom from "../../atoms/text";
import ImageAtom from "../../atoms/image";

export default function Header() {
  return (
    <View style={styles.container}>
      <TextAtom text={"Explore"} style={styles.textHeader} />
      <ImageAtom
        source={require("../../../../assets/nasa-logo.png")}
        style={styles.imageHeader}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  imageHeader: {
    width: 70,
    height: 70,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
});