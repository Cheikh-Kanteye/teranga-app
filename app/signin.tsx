import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/Colors";
import { sizes } from "../constants/metrics";
import { Button, Input } from "../components";
import { images } from "../assets";
import { router } from "expo-router";

const Page = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={{ color: colors.title }}>Bon retour dans </Text>Teranga
      </Text>
      <Text style={styles.formTitle}>Connexion</Text>
      <View style={styles.group}>
        <Input
          icon="mail"
          placeholder="addresse mail..."
          autoComplete="email"
          keyboardType="email-address"
        />
        <Input
          secureTextEntry
          icon="lock-closed"
          placeholder="mot de passe..."
        />
      </View>

      <View style={styles.group}>
        <Button label="Se connecter" onPress={() => router.push("/home")} />
        <Text style={styles.or}>or</Text>
        <Button
          label="Se connecter avec google"
          primary={false}
          icon={images.google}
        />
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    padding: sizes.h * 0.15,
    alignItems: "center",
    paddingHorizontal: sizes.p,
    flex: 1,
    rowGap: sizes.p * 2,
  },
  title: {
    fontSize: 28,
    fontFamily: "mulish-b",
    color: colors.primary,
    textAlign: "center",
  },
  form: {
    width: "100%",
    rowGap: sizes.p,
  },
  formTitle: {
    fontSize: 24,
    fontFamily: "mulish-sb",
    color: colors.title,
  },
  description: {
    fontSize: 14,
    fontFamily: "mulish-r",
    color: colors.white,
    lineHeight: 20,
    textAlign: "center",
  },
  group: {
    gap: sizes.p,
    width: "100%",
  },
  or: {
    fontSize: 16,
    fontFamily: "mulish-sb",
    color: colors.body,
    textAlign: "center",
  },
});
