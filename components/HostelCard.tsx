import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { Hostel } from "../mocks/type";
import { sizes } from "../constants/metrics";
import { colors } from "../constants/Colors";
import { AntDesign, Ionicons } from "@expo/vector-icons";

interface Props extends TouchableOpacityProps {
  hostel: Hostel;
}

const CARD_SIZE = sizes.w * 0.6;
const CARD_RADIUS = CARD_SIZE * 0.05;

const HostelCard: React.FC<Props> = (props) => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => setLiked(!liked);

  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        source={{ uri: props.hostel.imageUrl }}
        style={styles.contentContainer}
      >
        <TouchableOpacity onPress={toggleLike} style={styles.likeBtn}>
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={24}
            color={liked ? colors.primary : colors.title}
          />
        </TouchableOpacity>
        <View style={styles.cardInfoContainer}>
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
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default HostelCard;

const styles = StyleSheet.create({
  container: {
    width: CARD_SIZE,
    height: CARD_SIZE,
    borderRadius: CARD_RADIUS,
    overflow: "hidden",
  },
  contentContainer: {
    flex: 1,
    padding: CARD_RADIUS,
    justifyContent: "space-between",
  },
  cardInfoContainer: {
    width: "100%",
    height: "48%",
    backgroundColor: colors.white,
    borderRadius: CARD_RADIUS,
    padding: 10,
    rowGap: 5,
  },
  likeBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    alignSelf: "flex-end",
  },
  name: {
    fontSize: 16,
    fontFamily: "mulish-sb",
    flex: 0.9,
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
  },
});
