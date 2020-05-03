import React from "react";

import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView} from "react-native";
import { Ionicons } from "@expo/vector-icons"
import { ScrollView } from "react-native-gesture-handler";

export class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: {
        }
    };
  }

  componentDidMount() {
  }

  render() {
    const styles= StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff",
        },
        text: {
            fontFamily: "HelveticaNeue",
            color: "#52575D"
        },
        subText : {
            fontSize: 12,
            color: "#AEB5BC",
            textTransform: "uppercase",
            fontWeight: "500"
        },
        image: {
            flex: 1,
            width: 200,
            height: 200,
        },
        titleBar: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 24,
            marginHorizontal: 16
        },
        profileImage: {
            width: 200,
            height: 200,
            borderRadius: 100,
            overflow: "hidden"
        },
        addImage: {
            backgroundColor: "#41444B",
            position: "absolute",
            bottom: 0,
            right: 0,
            height: 60,
            width: 60,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center"
        },
        infoContainer: {
            alignSelf: "center",
            alignItems: "center",
            marginTop: 16,
        },
        profilePlaceHolder: {
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "#E1E2E6",
            marginTop: 48,
            justifyContent: "center",
            alignItems: "center"
        },
        statsContainer: {
            flexDirection: "row",
            alignSelf: "center",
            marginTop: 32
        },
        statsBox: {
            alignItems: "center",
            flex: 1
        },
        mediaImageContainer: {
          width: 200,
          height: 200,
          borderRadius: 12,
          overflow: "hidden",
          marginHorizontal: 10,
        }
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style ={styles.titleBar}>
                  <TouchableOpacity
                  onPress={() => this.props.navigation.state.params.navigation.goBack(null)}>
                    <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
                  </TouchableOpacity>
                  <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
                </View>
                <View style={{alignSelf: "center"}}>
                  <View style={styles.profileImage}>
                    <Image source = {require("./../../images/profile.png")} 
                    style={styles.image}
                    resizeMode="center"/>
                  </View>
                </View>
                <View style={styles.infoContainer}>
                  <Text style={[styles.text, { fontWeight: "200", fontSize: 36}]}>
                   27 Morton
                  </Text>
                  <Text style={[styles.text, {color: "#AEB5BC", fontSize: 14 }]}>
                    1/2 Morton St, New York, NY 10014
                  </Text>
                </View>
                <View style={styles.statsContainer}>
                  <View style={styles.statsBox}>
                      <Text style={[styles.text, { fontSize: 24}]}>97%</Text>
                      <Text style={[styles.text, styles.subText]}>Capacity</Text>
                  </View>
                  <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1}]}>
                      <Text style={[styles.text, { fontSize: 24}]}>1 hour</Text>
                      <Text style={[styles.text, styles.subText]}>Wait Time</Text>
                  </View>
                  <View style={styles.statsBox}>
                      <Text style={[styles.text, { fontSize: 24}]}>3 pm</Text>
                      <Text style={[styles.text, styles.subText]}>Lowest Time</Text>
                  </View>
                </View>
                <View style={styles.infoContainer}>
                  <Text style={[styles.text, { fontWeight: "200", fontSize: 18, paddingTop: 40}]}>
                   Contact
                  </Text>
                  <Text style={[styles.text, {color: "#AEB5BC", fontSize: 14 }]}>
                    (212)-929-4339 
                  </Text>
                  <Text style={[styles.text, {color: "#AEB5BC", fontSize: 14 }]}>
                    contact@27morton.com
                  </Text>
                  <Text style={[styles.text, { fontWeight: "200", fontSize: 18, paddingTop: 40}]}>
                   Schedule
                  </Text>
                  <Text style={[styles.text, {color: "#AEB5BC", fontSize: 14 }]}>
                    Weekday Brunch  |  11am – 4pm
                  </Text>
                  <Text style={[styles.text, {color: "#AEB5BC", fontSize: 14 }]}>
                     Dinner Everyday   |  4pm – 12am 
                  </Text>
                </View>

                  <View style={{ marginTop:32 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                      <View style={styles.mediaImageContainer}>
                        <Image source = {require("./../../images/1.jpg")} style={styles.image} resizeMode="cover"></Image>
                      </View>
                      <View style={styles.mediaImageContainer}>
                        <Image source = {require("./../../images/2.jpg")} style={styles.image} resizeMode="cover"></Image>
                      </View>
                      <View style={styles.mediaImageContainer}>
                        <Image source = {require("./../../images/3.jpg")} style={styles.image} resizeMode="cover"></Image>
                      </View>
                      <View style={styles.mediaImageContainer}>
                        <Image source = {require("./../../images/4.jpg")} style={styles.image} resizeMode="cover"></Image>
                      </View>
                      <View style={styles.mediaImageContainer}>
                        <Image source = {require("./../../images/5.jpg")} style={styles.image} resizeMode="cover"></Image>
                      </View>
                      <View style={styles.mediaImageContainer}>
                        <Image source = {require("./../../images/6.jpg")} style={styles.image} resizeMode="cover"></Image>
                      </View>
                    </ScrollView>
                  </View>
            </ScrollView>
        </SafeAreaView>
    );
  }
}