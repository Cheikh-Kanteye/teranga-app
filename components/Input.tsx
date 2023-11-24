import {
  StyleSheet,
  Text,
  TextInputProps,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { sizes } from "../constants/metrics";

interface Props extends TextInputProps {
  icon?: keyof typeof Ionicons.glyphMap;
  iconRight?: keyof typeof Ionicons.glyphMap;
}

const Input: React.FC<Props> = (props) => {
  const [focused, setFocused] = useState(false);
  const focusedColor = focused ? colors.primary : colors.body;
  return (
    <View style={[styles.inputGroup, { borderColor: focusedColor }]}>
      {props.icon && (
        <Ionicons name={props.icon} size={22} color={focusedColor} />
      )}
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor={colors.body}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        autoCapitalize="none"
      />
      {props.iconRight && (
        <Ionicons name={props.iconRight} size={22} color={colors.primary} />
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputGroup: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingHorizontal: sizes.p,
  },
  input: {
    flex: 1,
    height: 50,
    color: colors.title,
    fontSize: 16,
    fontFamily: "mulish-m",
  },
});
