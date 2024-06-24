import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
const AnimatedButton = Animatable.createAnimatableComponent(Pressable)
const Splash = () => {
  return (
    <View style={styles.main}>
        <Animatable.Image animation="zoomIn" duration={1400} source={require("../images/digital-marketing.png")} style={{height:300, width:300, resizeMode:"contain", marginTop:-50, marginLeft:-50}}/>
        <Animatable.Image animation="zoomIn" duration={1400} source={require("../images/online-class.png")} style={{height:150, width:150, resizeMode:"contain", marginTop:20, marginRight:-20, alignSelf:"flex-end"}}/>
        <View style={{position:"absolute", bottom:-30,width:"100%"}}>
        <Animatable.Image animation="zoomIn" duration={1400} source={require("../images/brandlogo.png")} style={{height:300, width:300, resizeMode:"contain",  alignSelf:"center"}}/>
        {/* <AnimatedButton animation="zoomIn" duration={1400} style={{backgroundColor:"#d3e6e5",borderWidth:2,borderRadius:12,elevation:3,marginTop:-100, borderColor:"#1b2f45",width:200,alignSelf:"center", padding:10}}>
            <Text style={{color:"#1b2f45", fontSize:20, fontWeight:"500", textAlign:"center"}}>Get Started</Text>
        </AnimatedButton> */}
        <Animatable.Image  animation="zoomIn" duration={1400} source={require("../images/notesBanner.png")} style={{height:250, width:250, resizeMode:"contain", marginLeft:-30, marginTop:-80   }}/>
        </View>
        
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"white"
    }
})