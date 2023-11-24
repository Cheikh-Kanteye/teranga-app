import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React from "react";
import { Hostel } from "../mocks/type";
import { colors } from "../constants/Colors";
import { Canvas, Fill, RoundedRect, Shadow } from "@shopify/react-native-skia";
import { sizes } from "../constants/metrics";
import { AntDesign } from "@expo/vector-icons";

interface Props extends TouchableOpacityProps {
  hostel: Hostel;
}

const CARD_W = sizes.w - sizes.p * 2;
const CARD_H = 100;
const PopularHostelCard = (props: Props) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Canvas style={styles.cardContainer}>
        <Fill color={colors.white} />
        <RoundedRect
          x={sizes.p}
          y={0}
          width={CARD_W}
          height={CARD_H}
          r={10}
          color={colors.white}
        >
          <Shadow dx={0} dy={8} color={"rgba(0, 0, 0,.07)"} blur={12} />
        </RoundedRect>
      </Canvas>
      <View style={styles.cardInfoContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: props.hostel.imageUrl }}
            style={StyleSheet.absoluteFill}
            resizeMode="cover"
          />
        </View>
        <View style={styles.cardInfo}>
          <View style={styles.rowBetween}>
            <Text numberOfLines={1} style={styles.name}>
              {props.hostel.name}
            </Text>
            <Text>
              <AntDesign name="star" size={14} color={"gold"} />{" "}
              {props.hostel.rating}
            </Text>
          </View>
          <Text style={styles.location} numberOfLines={1}>
            {props.hostel.location}
          </Text>
          <Text style={styles.price}>
            {props.hostel.currency}
            {props.hostel.price}
            <Text style={styles.location}>/nuit</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularHostelCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: sizes.w,
    height: CARD_H + 20,
  },
  cardInfoContainer: {
    width: CARD_W,
    height: CARD_H,
    backgroundColor: colors.white,
    position: "absolute",
    left: sizes.p,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
  },
  imageContainer: {
    width: CARD_H,
    height: CARD_H,
    borderRadius: 10,
    overflow: "hidden",
  },
  cardInfo: {
    height: "48%",
    padding: 10,
    rowGap: 5,
  },
  name: {
    fontSize: 16,
    fontFamily: "mulish-sb",
    flex: 0.7,
  },
  location: {
    fontSize: 14,
    fontFamily: "mulish-r",
    color: colors.body,
  },
  price: {
    fontSize: 16,
    fontFamily: "mulish-b",
    color: colors.primary,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: CARD_W - CARD_H - 32,
  },
});
