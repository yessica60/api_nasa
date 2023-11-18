import React from "react";
import { View, StyleSheet } from "react-native";
import ImageAtom from "../../atoms/image";
import TextAtom from "../../atoms/text";

export default function TodaysImage({ date, title, url }) {
  return (
    <View style={styles.container}>
      <ImageAtom source={{ uri: url }} style={styles.image} />
      <TextAtom text={title} style={styles.title} />
      <TextAtom text={date} style={styles.date} />
      <View style={styles.button}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    backgroundColor: "#2c449d",
    borderRadius: 32,
    padding: 16,
    marginHorizontal: 24,
  },
  image: {
    width: "100%",
    height: 190,
    borderWidth: 2,
    borderRadius: 32,
    borderColor: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
  },
  date: {
    color: "#bbb",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    alignItems: "flex-end",
  },
});
