import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet } from "react-native";
import ImageAtom from "../../atoms/image";
import TextAtom from "../../atoms/text";

export default function ImageDetails() {
  const route = useRoute();
  const { imageData } = route.params;

  return (
    <View style={styles.container}>
      <ImageAtom
        style={styles.image}
        source={{ uri: imageData.url }}
        resizeMode="cover"
      />
      <TextAtom style={styles.title} text={imageData.title} />
      <TextAtom style={styles.date} text={imageData.date} />
      <TextAtom style={styles.explanation} text={imageData.explanation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(7,26,93,255)",
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  date: {
    fontSize: 16,
    marginBottom: 10,
    color: "#fff",
  },
  explanation: {
    fontSize: 14,
    color: "#fff",
  },
});
