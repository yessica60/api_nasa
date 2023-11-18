import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TextAtom from "../../atoms/text";
import ButtonAtom from "../../atoms/button";

export default function LastFiveDaysImages({ LastFiveDaysImages }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextAtom text="Last 5 Days" style={styles.title} />
      <ScrollView style={styles.content}>
        {LastFiveDaysImages &&
          LastFiveDaysImages.map((imageData, index) => (
            <View style={styles.dataContent} key={index}>
              <TextAtom text={imageData.title} style={styles.dataTitle} />
              <TextAtom text={imageData.date} style={styles.dataDate} />
              <ButtonAtom
                title="View"
                onPress={() => navigation.navigate("Details", { imageData })}
                style={styles.button}
              />
            </View>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  content: {
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 18,
    textAlign: "center",
  },
  dataContent: {
    marginTop: 16,
    backgroundColor: "#2c449d",
    borderRadius: 32,
    padding: 16,
    marginHorizontal: 24,
  },
  dataTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
  },
  dataDate: {
    color: "#bbb",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    alignItems: "flex-end",
  },
});
