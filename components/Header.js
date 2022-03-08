import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Calculator</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    width: "100%",
    justifyContent: "center",
    paddingTop: 20,
  },
  title: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "700",
    textTransform: "uppercase",
  },
});
