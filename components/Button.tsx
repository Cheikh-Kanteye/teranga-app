import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ImageSourcePropType,
  Image,
} from "react-native";
import React from "react";
import { colors } from "../constants/Colors";

interface Props extends TouchableOpacityProps {
  label: string;
  primary?: boolean;
  icon?: ImageSourcePropType;
}
const Button: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.btn,
        { backgroundColor: props.primary ? colors.primary : colors.white },
      ]}
    >
      {props.icon && (
        <Image
          source={props.icon}
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
        />
      )}
      <Text
        style={[
          styles.label,
          { color: props.primary ? colors.white : colors.title },
        ]}
      >
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  primary: true,
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: "mulish-sb",
  },
});
