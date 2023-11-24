import React, { useCallback, useEffect } from "react";
import { Stack } from "expo-router";
import * as Navbar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { fonts } from "../assets";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();
const _layout = () => {
  const [fontsLoaded] = useFonts(fonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    Navbar.setPositionAsync("absolute");
    Navbar.setBackgroundColorAsync("rgba(0,0,0,.1)");
    Navbar.setButtonStyleAsync("light");
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen
          name="signin"
          options={{ presentation: "modal", animation: "slide_from_bottom" }}
        />
        <Stack.Screen name="home" options={{ animation: "fade" }} />
      </Stack>
    </SafeAreaProvider>
  );
};

export default _layout;
