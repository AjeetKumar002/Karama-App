import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Header2 from '../../../assets/images/bg-6.png';
import Add from '../../../assets/images/add.png';
import Coss from '../../../assets/images/cross.png';

export default function PhotoPicker() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Photo</Text>
      <View style={styles.Images}>
            <View style={styles.imageItems}>
                <View>
                <Image source={Header2} alt="img" style={{width:104, height: 103.98, borderRadius: 10}} />
                <View style={styles.crossPos}>
                <Image source={Coss} alt="img" style={styles.cross} />
                </View>
                </View>
                <View>
                <Image source={Header2} alt="img" style={{width:104, height: 103.98, borderRadius: 10}} />
                <View style={styles.crossPos}>
                <Image source={Coss} alt="img" style={styles.cross} />
                </View>
                </View>
                <View>
                <Image source={Header2} alt="img" style={{width:104, height: 103.98, borderRadius: 10}} />
                <View style={styles.crossPos}>
                <Image source={Coss} alt="img" style={styles.cross} />
                </View>
                </View>
                <View>
                <Image source={Header2} alt="img" style={{width:104, height: 103.98, borderRadius: 10}} />
                <View style={styles.crossPos}>
                <Image source={Coss} alt="img" style={styles.cross} />
                </View>
                </View>
                <View>
                <Image source={Header2} alt="img" style={{width:104, height: 103.98, borderRadius: 10}} />
                <View style={styles.crossPos}>
                <Image source={Coss} alt="img" style={styles.cross} />
                </View>
                </View>
                <Image source={Add} alt="img" style={{width:104, height: 103.98, borderRadius: 10}} />
                {/* <Image source={cross} alt="img" /> */}
            </View>
      </View>
      <Text style={styles.text}>Tap to edit</Text>

    </View>
  )
}

const styles = StyleSheet.create({
container: {
    width: 358,
    borderRadius: 20,
    gap: 10,
    backgroundColor: "rgba(38, 29, 42, 0.05)",
    paddingHorizontal: 19,
    paddingVertical: 16
},
imageItems: {
    width: 320,
    margin: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4
},
crossPos:{
    width: 22.65,
    height: 22.65,
    position: "absolute",
    right: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"   ,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
},
cross: {
    width: 8.15,
    height: 8.15,
},
text: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22.4,
    color: "rgba(38, 29, 42, 0.3)"
},
})