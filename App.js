import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [pressed, setPressed] = useState(false);
  return (
    <SafeAreaView>
      <View style={styles.logoBand}>
        <Image source={require("./assets/IMDb.png")} style={styles.logo} />
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.greyBlock}>
            <Text style={styles.movieTitle}>Interstellar</Text>
            <Text Text style={styles.movieProperties}>
              2014 PG-13 2h49min Adventure, Drama, Sci-fi
            </Text>
          </View>
          <View style={styles.moviePreview}>
            <Image
              source={require("./assets/interstellar.jpg")}
              style={styles.moviePoster}
            />
            <View style={styles.movieContainer}>
              <Text style={styles.movieDescription}>
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival.{"\n"}
              </Text>
              <Pressable
                onPress={() => setPressed(true)}
                onPressOut={() => setPressed(false)}
              >
                <Text
                  style={pressed ? styles.movieAddHighlight : styles.movieAdd}
                >
                  + ADD TO WATCHLIST
                </Text>
              </Pressable>
            </View>
          </View>
          {/* RATINGS */}
          <View style={styles.ratingsBand}>
            <View style={styles.ratings}>
              <Ionicons
                name="star"
                size={24}
                color="gold"
                style={styles.ratingsStar}
              />
              <Text style={styles.starRating}>
                <Text style={styles.bold}>8.6</Text>/10
              </Text>
              <Text style={styles.ratingsCount}>1.1M</Text>
            </View>

            <View style={styles.rate}>
              <Ionicons
                name="star-outline"
                size={24}
                color="gold"
                style={styles.rateStar}
              />
              <Text style={styles.rateThis}>RATE THIS</Text>
            </View>

            <View style={styles.meta}>
              <Text style={styles.metaScore}>74</Text>
              <Text style={styles.rateThis}>Metascore</Text>
              <Text style={styles.metaCritics}>46 critic review</Text>
            </View>
          </View>
          <View style={styles.cast}>
            <Text style={styles.castTopBilled}>Top Billed Cast</Text>
            <Text style={styles.blue}>SEE ALL</Text>
          </View>
          <View style={styles.carousel}>
            <View style={styles.castCard}>
              <Image
                style={styles.castPhoto}
                source={require("./assets/David_Oyelowo.jpg")}
              />
              <Text style={styles.castName}>David Oyelowo</Text>
              <Text style={styles.castCharacter}>School Principal</Text>
            </View>
            <View style={styles.castCard}>
              <Image
                style={styles.castPhoto}
                source={require("./assets/Tim_chalamet.jpg")}
              />
              <Text style={styles.castName}>Timothée Chalamet</Text>
              <Text style={styles.castCharacter}>Tom</Text>
            </View>
            <View style={styles.castCard}>
              <Image
                style={styles.castPhoto}
                source={require("./assets/David_Gyasi.jpg")}
              />
              <Text style={styles.castName}>David Gyasi</Text>
              <Text style={styles.castCharacter}>Romilly</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight,
  },
  greyBlock: {
    display: "flex",
    backgroundColor: "#242424",
  },
  logo: {
    marginLeft: 10,
    height: 25,
    width: 50,
    resizeMode: "contain",
  },
  logoBand: {
    alignItems: "center",
    height: "5%",
    backgroundColor: "#333333",
    flexDirection: "row",
    paddingTop: 5,
  },

  scroll: {
    height: "95%",
  },

  allText: {
    fontFamily: "HelveticaNeue-Light",
    color: "white",
  },

  movieTitle: {
    marginHorizontal: 10,
    fontSize: 35,
    color: "white",
    marginBottom: 10,
  },
  movieProperties: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "#b3b4b5",
    marginBottom: 20,
  },
  moviePreview: {
    flexDirection: "row",
    backgroundColor: "#242424",
  },
  moviePoster: {
    height: 150,
    flex: 1,
    resizeMode: "contain",
  },
  movieContainer: {
    flex: 2,
  },
  movieDescription: {
    color: "white",
  },
  movieAdd: {
    alignSelf: "center",
    backgroundColor: "#3075ba",
    width: 200,
    lineHeight: 40,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  movieAddHighlight: {
    alignSelf: "center",
    backgroundColor: "#4aa4ff",
    width: 200,
    lineHeight: 40,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  // RATINGS BAND //
  ratingsBand: {
    padding: 20,
    backgroundColor: "#242424",
    flexDirection: "row",
    marginBottom: 20,
  },
  ratings: {
    flex: 1,
  },

  ratingsStar: {
    alignSelf: "center",
    marginBottom: 5,
  },
  starRating: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  ratingsCount: {
    fontSize: 10,
    color: "grey",
    textAlign: "center",
  },
  rate: {
    flex: 1,
  },
  rateStar: {
    alignSelf: "center",
    marginBottom: 5,
    color: "#646464",
  },
  rateThis: {
    color: "white",
    textAlign: "center",
  },
  meta: {
    flex: 1,
  },
  metaScore: {
    alignSelf: "center",
    width: 20,
    lineHeight: 20,
    backgroundColor: "#00c41d",
    textAlign: "center",
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
  metaCritics: {
    fontSize: 10,
    color: "grey",
    textAlign: "center",
  },
  // TOP BILLED CAST //
  cast: {
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#242424",
    justifyContent: "space-between",
    alignItems: "center",
  },
  castTopBilled: {
    color: "white",
    fontSize: 24,
  },
  blue: {
    textAlign: "right",
    color: "#3075ba",
    fontSize: 14,
  },
  // Carousel
  carousel: {
    display: "flex",
    flexDirection: "row",
  },
  castCard: {
    display: "flex",
    marginRight: 10,
    width: 125,
    height: 235,
  },
  castPhoto: {
    width: 125,
    height: 190,
    resizeMode: "cover",
  },
  castName: {
    fontSize: 12,
    color: "white",
  },
  castCharacter: {
    fontSize: 12,
    color: "#646464",
  },

  // scrollView: {
  //   height: "100%",
  //   margin: 20,
  //   alignSelf: "center",
  //   borderWidth: 5,
  //   borderRadius: 5,
  //   borderColor: "black",
  //   backgroundColor: "lightblue",
  // },
  // contentContainer: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   paddingBottom: 50,
  // },
});
