import txt from "../../../assets/images/cont.png";
import Background from "../../../assets/images/image_26.png";
import karama from "../../../assets/images/karama.png";
import React from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const HomeScreen = ({navigation}) => {
  
  return (
    <View style={styles.main}>
      <ImageBackground source={Background} style={styles.background}>
   
        <View style={styles.contat}>
          <Image source={karama} style={styles.karama} />
        </View>
        <View style={styles.container}>
          <View style={styles.center}>
            <Image source={txt} style={styles.txt} />
          </View>
        </View>
        <View style={styles.bottmMain}>
          <Text style={styles.para}>
            By tapping ‘sign in’/‘Create account: you agree to our terms and
            services. Learn how we process your data in our privacy policy and
            cookies policy.
          </Text>
          <View style={styles.account}>
            <Pressable
              style={styles.btn}
              onPress={() => navigation.navigate("Karama")}
            >
              <Text style={styles.btntxt}>Create Account</Text>
            </Pressable>
            <Pressable
              style={styles.link}
              onPress={() => navigation.navigate("Karama")}
            >
              <Text style={styles.linktxt}>Sign In</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#EB305D",
  },
  
  background: {
    flex: 1,
    resizeMode: "cover",
    width: width * 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 40,
  },
  contat: {
    height: height * 0.1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 50
  },
  karama: {
    width: width * (154 / 375),
    height: 31
    
  },
  txt: {
    width: width * 0.9,
    height: width * 0.9,
    resizeMode: "contain",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: height * 0.05,
  },
  bottmMain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: width * 0.05,
    marginTop: 30,
  },
  account: {
    width: width * 0.9,
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.02,
    gap: 8
  },
  para: {
    width: width * 0.8,
    lineHeight: height * 0.02,
    color: "#fff",
    fontSize: width * 0.03,
    fontWeight: "500",
    textAlign: "center",
  },
  btn: {
    width: width * 0.9,
    // height: height * 0.07,
    borderRadius: height * 0.03,
    backgroundColor: "#FFFDF7",
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.01,
    paddingVertical: 15
  },
  btntxt: {
    fontSize: width * 0.04,
    fontWeight: "400",
    textAlign: "center",
    background: "#052222"

  },
  link: {
    marginTop: height * 0.01,
  },
  linktxt: {
    fontSize: width * 0.04,
    color: "#FFFDF7",
    fontWeight: "600",
    textAlign: "center",
  },
});

export default HomeScreen;
