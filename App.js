import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import { Header } from "./components/Header";
import { NumberBtn } from "./components/Number";
import { ActionBtn } from "./components/Action";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("0");
  const onChangeValue = (num) => {
    if (value.length <= 100) {
      if (value[0] == "0" && value[1] !== ".") {
        setValue(num);
      } else {
        setValue(value + num);
      }
    }
  };
  const onClickSimple = (act) => {
    setValue(value + act);
  };
  const onRemoveClick = () => {
    setValue(value.slice(0, -1));
  };
  const onClearClick = () => {
    setValue("0");
  };
  const onPowClick = () => {
    setValue((Number(value) ** 2).toString());
  };
  const onRootClick = () => {
    setValue(eval((value ** 0.5).toFixed(2)).toString());
  };
  const answerClick = () => {
    try {
      let ans = eval(eval(value).toFixed(2));
      setValue(ans.toString());
    } catch (e) {
      setValue("0");
    }
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header />
      </SafeAreaView>
      <View style={styles.main}>
        <TextInput
          style={styles.input}
          editable={false}
          value={value}
          maxLength={99}
          multiline={true}
          numberOfLines={3}
        ></TextInput>
        <View style={styles.buttonsBlock}>
          <View style={styles.row}>
            <ActionBtn act="C" color="#26edca" onClick={onClearClick} />
            <ActionBtn act="x²" color="#26edca" onClick={onPowClick} />
            <ActionBtn act="√" color="#26edca" onClick={onRootClick} />
            <ActionBtn act="/" color="#df6363" onClick={onClickSimple} />
          </View>
          <View style={styles.row}>
            <NumberBtn num="7" onChange={onChangeValue} />
            <NumberBtn num="8" onChange={onChangeValue} />
            <NumberBtn num="9" onChange={onChangeValue} />
            <ActionBtn act="*" color="#df6363" onClick={onClickSimple} />
          </View>
          <View style={styles.row}>
            <NumberBtn num="4" onChange={onChangeValue} />
            <NumberBtn num="5" onChange={onChangeValue} />
            <NumberBtn num="6" onChange={onChangeValue} />
            <ActionBtn act="-" color="#df6363" onClick={onClickSimple} />
          </View>
          <View style={styles.row}>
            <NumberBtn num="1" onChange={onChangeValue} />
            <NumberBtn num="2" onChange={onChangeValue} />
            <NumberBtn num="3" onChange={onChangeValue} />
            <ActionBtn act="+" color="#df6363" onClick={onClickSimple} />
          </View>
          <View style={styles.row}>
            <NumberBtn num="." onChange={onChangeValue} />
            <NumberBtn num="0" onChange={onChangeValue} />
            <ActionBtn act="⌫" color="#c7c9cb" onClick={onRemoveClick} />
            <ActionBtn act="=" color="#df6363" onClick={answerClick} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22252d",
  },
  main: {
    flex: 1,
    justifyContent: "flex-end",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginVertical: 10,
  },
  buttonsBlock: {
    height: "65%",
    backgroundColor: "#292d36",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    padding: 20,
    justifyContent: "space-between",
  },
  input: {
    width: "100%",
    padding: 20,
    textAlign: "right",
    color: "white",
    fontWeight: "700",
    fontSize: 50,
  },
});
