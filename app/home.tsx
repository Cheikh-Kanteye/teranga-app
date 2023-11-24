import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../constants/Colors";
import { sizes } from "../constants/metrics";
import { Feather, Ionicons } from "@expo/vector-icons";
import { HostelCard, Input, PopularHostelCard } from "../components";
import NEARBY_HOSTEL from "../mocks/nearbyHostel.json";
import { HostelList } from "../mocks/type";
import { ScrollView } from "react-native-gesture-handler";

const home = () => {
  const [nearbyHostels, setNearbyHostels] = useState<HostelList>([]);

  useEffect(() => {
    setNearbyHostels(NEARBY_HOSTEL.hostels);
  }, [NEARBY_HOSTEL]);

  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ rowGap: 30 }}
        showsVerticalScrollIndicator={false}
      >
        {/* ==============================HEADER============================= */}
        <View style={styles.header}>
          <View style={styles.actionGroup}>
            <TouchableOpacity style={styles.locationBtn}>
              <Text>localisation actuel</Text>
              <View style={styles.locationRow}>
                <Feather name="map-pin" size={20} color={colors.primary} />
                <Text>
                  <Text style={styles.location}>Dakar, Sénégal</Text>{" "}
                  <Feather
                    name="chevron-down"
                    size={22}
                    color={colors.primary}
                  />
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.notifBtn}>
              <Feather name="bell" size={24} color={colors.body} />
              <View style={styles.notifBadge} />
            </TouchableOpacity>
          </View>
          <Input
            icon="search"
            placeholder="Rechercher hotel"
            iconRight="md-filter"
          />
        </View>

        {/* ==========================NEARBY HOSTELS========================= */}
        <View>
          <View style={styles.categoryHeader}>
            <Text style={styles.location}>Prés de votre localisation</Text>
            <Pressable>
              <Text style={styles.moreBtn}>Voir plus</Text>
            </Pressable>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            contentContainerStyle={{
              paddingHorizontal: sizes.p,
              gap: sizes.p * 1.25,
            }}
          >
            {nearbyHostels.map((hostel, index) => {
              return <HostelCard hostel={hostel} key={index} />;
            })}
          </ScrollView>
        </View>

        {/* =========================POPULAR HOSTELS========================= */}
        <View>
          <View style={styles.categoryHeader}>
            <Text style={styles.location}>Destination populaire</Text>
            <Pressable>
              <Text style={styles.moreBtn}>Voir plus</Text>
            </Pressable>
          </View>
          <View style={{ rowGap: sizes.p }}>
            {nearbyHostels.map((hostel, index) => {
              return <PopularHostelCard hostel={hostel} key={index} />;
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    width: "100%",
    paddingHorizontal: sizes.p,
    rowGap: sizes.p,
    paddingTop: sizes.p,
  },
  actionGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationBtn: {
    rowGap: 5,
  },
  locationRow: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  location: {
    fontSize: 18,
    fontFamily: "mulish-sb",
  },
  notifBtn: {
    width: 45,
    height: 45,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.body,
  },
  notifBadge: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 8,
    right: 10,
  },
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: sizes.p,
    paddingBottom: sizes.p,
  },
  moreBtn: {
    fontSize: 12,
    fontFamily: "mulish-m",
    color: colors.primary,
  },
});
