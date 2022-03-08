import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const ActionBtn = ({ act, color, onClick }) => {
  const onClickHandle = (act) => {
    onClick(act);
  };
  return (
    <TouchableOpacity onPress={() => onClickHandle(act)} style={styles.button}>
      <Text style={[{ color: color }, styles.number]}>{act}</Text>
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
    fontWeight: "600",
    fontSize: 24,
  },
});
