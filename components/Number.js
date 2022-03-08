import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const NumberBtn = ({ num, onChange }) => {
  const changeValue = (num) => {
    onChange(num);
  };
  return (
    <TouchableOpacity style={styles.button} onPress={() => changeValue(num)}>
      <Text style={styles.number}>{num}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "20%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#272b33",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: "#c7c9cb",
    fontWeight: "600",
    fontSize: 24,
  },
});
