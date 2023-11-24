import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { images } from "../assets";

import { sizes } from "../constants/metrics";
import {
  BackdropBlur,
  Canvas,
  Fill,
  Group,
  Image,
  rect,
  rrect,
  useImage,
} from "@shopify/react-native-skia";
import { colors } from "../constants/Colors";
import { Button } from "../components";
import { router } from "expo-router";

const blurViewH = sizes.h * 0.61;
const blurViewY = sizes.h - blurViewH;
const Page = () => {
  const welcome = useImage(images.welcome);
  const roundedRect = rrect(rect(0, sizes.w, sizes.w, blurViewH), 32, 32);

  return (
    <View style={styles.container}>
      <Canvas style={{ width: sizes.w, height: sizes.h }}>
        <Image
          x={0}
          y={0}
          width={sizes.w}
          height={sizes.h}
          image={welcome}
          fit={"cover"}
        />
        <Group clip={roundedRect}>
          <BackdropBlur
            blur={6}
            clip={{
              x: 0,
              y: blurViewY,
              height: blurViewH,
              width: sizes.w,
            }}
          >
            <Fill color={"rgba(41, 41, 41, 0.4)"} />
          </BackdropBlur>
        </Group>
      </Canvas>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.title}>Teranga</Text>
          <Text style={styles.description}>
            Immersion de l'esprit chaleureux et la générosité légendaire de la
            teranga senegalaise.
          </Text>
        </View>
        <View style={styles.btnGroup}>
          <Button label="Se connecter" onPress={() => router.push("/signin")} />
          <Text style={styles.or}>or</Text>
          <Button
            label="Se connecter avec google"
            primary={false}
            icon={images.google}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.description}>
            Vous n'avez pas de compte?{" "}
            <Text style={{ ...styles.description, color: colors.primary }}>
              S'inscrire
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    width: sizes.w,
    height: sizes.h,
  },
  contentContainer: {
    width: sizes.w,
    height: blurViewH - 48,
    paddingHorizontal: sizes.p,
    paddingVertical: sizes.p * 2,
    position: "absolute",
    bottom: 0,
    rowGap: sizes.p * 2,
  },
  title: {
    fontSize: 36,
    fontFamily: "mulish-b",
    color: colors.white,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    fontFamily: "mulish-r",
    color: colors.white,
    lineHeight: 20,
    textAlign: "center",
  },
  btnGroup: {
    gap: sizes.p / 2,
  },
  or: {
    fontSize: 16,
    fontFamily: "mulish-sb",
    color: colors.white,
    textAlign: "center",
  },
});
