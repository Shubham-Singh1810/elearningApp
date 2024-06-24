import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Pressable,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import * as Yup from 'yup';
  import {useNavigation} from '@react-navigation/native';
// import {login} from '../../services/user.services';
import AsyncStorage from '@react-native-async-storage/async-storage';
  import {useGlobalState} from '../../GlobalProvider';
import {useRoute} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import * as Animatable from 'react-native-animatable';
const AnimatedInput = Animatable.createAnimatableComponent(TextInput);
const AnimatedButton = Animatable.createAnimatableComponent(Pressable);
const Login = () => {
  const {globalState, setGlobalState} = useGlobalState();
  const navigation = useNavigation();
  const validationSchema = Yup.object().shape({
    Email: Yup.string().email('Invalid email').required('Email is required'),
    Password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });
  const [loader, setLoader] = useState(false);
  // const handleSubmit = async values => {
  //   setLoader(true);
  //   try {
  //     let response = await login(values);
  //     if (response?.data?.data?.message == "logged in successfully") {
  //       await AsyncStorage.setItem(
  //         'userData',
  //         JSON.stringify(response?.data?.data?.userData?.loggedUser),
  //       );
  //       await AsyncStorage.setItem(
  //         'token',
  //         JSON.stringify(response?.data?.data?.userData?.token),
  //       );
  //       setGlobalState({
  //         ...globalState,
  //         userData: response?.data?.data?.userData?.loggedUser,
  //         token: response?.data?.data?.userData?.token,
  //       });
  //       setLoader(false);
  //     }
  //     if(response?.data?.data?.message=="Please Verify your Email!"){
  //       // Toast.error('Please Verify your Email!');
  //       Toast.show({
  //         type: 'error',
  //         text1: 'Please Verify your Email!',
  //         // text2: 'This is a success toast message',
  //         visibilityTime: 3000, // Duration to show the toast message in milliseconds
  //       });
  //       setTimeout(()=>{
  //         navigation.navigate('OtpScreen', { email: values.Email });
  //       },1500)
  //       setLoader(false);
  //     }
  //     if(response?.data?.data?.message=="Invalid Userdetails"){
  //       setLoader(false);
  //       Toast.show({
  //         type: 'error',
  //         text1: 'Invalid Userdetails',
  //         // text2: 'This is a success toast message',
  //         visibilityTime: 3000, // Duration to show the toast message in milliseconds
  //       });
  //     }
  //   } catch (error) {
  //     // Toast.error('Internal server error!');
  //     setLoader(false);
  //   }
  // };
  return (
    <>
      <LinearGradient
        colors={['#b5d5fc', '#eef4fe', '#f4f8fc', '#fff']}
        style={styles.main}>
        <Formik
          initialValues={{Email: '', Password: ''}}
          validationSchema={validationSchema}
          onSubmit={values => {
            //   handleSubmit(values); // Call your custom handleSubmit function
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={[{width: '90%'}]}>
              <View style={{alignItems: 'center', marginBottom: 35}}>
                <Animatable.Image
                  animation="zoomIn"
                  duration={1000}
                  source={require('../../images/elearning.png')}
                  style={{height: 200, width: 250, resizeMode: 'contain'}}
                />
                <Animatable.Text
                  animation="slideInUp"
                  duration={1100}
                  style={{
                    fontSize: 15,
                    marginBottom: 15,
                    fontWeight: '500',
                    color: 'black',
                  }}>
                  Welcome Back To
                </Animatable.Text>
                <Animatable.Text
                  animation="slideInUp"
                  duration={1200}
                  style={{
                    fontSize: 32,
                    marginBottom: 15,
                    fontWeight: '800',
                    letterSpacing: 1.5,
                    color: '#1b2f45',
                  }}>
                  E-LEARNING
                </Animatable.Text>
              </View>
              {/* Your form components here */}
              {/* Example for Email field */}
              <View style={{marginBottom: 20}}>
                <Animatable.Text
                  animation="slideInUp"
                  duration={1300}
                  style={styles.labelText}>
                  Email
                </Animatable.Text>
                <Animatable.View
                  animation="slideInUp"
                  duration={1400}
                  style={[
                    styles.inputBox,
                    errors.Email && touched.Email && styles.borderRed,
                  ]}>
                  <TextInput
                    placeholder="abc@gmail.com"
                    onChangeText={handleChange('Email')}
                    onBlur={handleBlur('Email')}
                    value={values.Email}
                  />
                </Animatable.View>
                {errors.Email && touched.Email && (
                  <Text style={{color: 'red'}}>{errors.Email}</Text>
                )}
              </View>
              {/* Password field and other form components */}
              <View style={{marginBottom: 40}}>
                <Animatable.Text
                  animation="slideInUp"
                  duration={1500}
                  style={styles.labelText}>
                  Password
                </Animatable.Text>
                <Animatable.View
                  animation="slideInUp"
                  duration={1600}
                  style={[
                    styles.inputBox,
                    errors.Password && touched.Password && styles.borderRed,
                  ]}>
                  <TextInput
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    onChangeText={handleChange('Password')}
                    onBlur={handleBlur('Password')}
                    value={values.Password}
                  />
                </Animatable.View>
                {errors.Password && touched.Password && (
                  <Text style={{color: 'red'}}>{errors.Password}</Text>
                )}
              </View>
              {/* Submit button */}
              {/* <Button color="#11134e" title="Log in" onPress={handleSubmit} /> */}
              <AnimatedButton
                animation="slideInUp"
                duration={1700}
                style={{
                  backgroundColor: '#11134e',
                  borderWidth: 2,
                  borderRadius: 12,
                  elevation: 3,
                  borderColor: '#1b2f45',
                  width: '100%',
                  alignSelf: 'center',
                  padding: 10,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: '500',
                    textAlign: 'center',
                  }}>
                  Log In
                </Text>
              </AnimatedButton>
              {/* Create account link */}
              <Animatable.View
                animation="slideInUp"
                duration={1800}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 30,
                }}>
                <Text style={styles.infoText}>Don't have any account?</Text>
                <Pressable
                   onPress={() => navigation.navigate('SignUp')}
                >
                  <Text
                    style={{
                      color: '#11134e',
                      marginHorizontal: 4,
                      fontWeight: '500',
                      textDecorationLine: 'underline',
                    }}>
                    Create
                  </Text>
                </Pressable>
              </Animatable.View>
            </View>
          )}
        </Formik>
      </LinearGradient>
      <Modal visible={loader} transparent={true} animationType="slide">
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" />
        </View>
      </Modal>
      <Toast ref={ref => Toast.setRef(ref)} />
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  inputBox: {
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: '#2c2c2c',
    borderRadius: 5,
  },
  titleText: {
    color: 'black',
    fontSize: 18,
    marginBottom: 15,
    fontWeight: '400',
  },
  labelText: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5,
  },
  infoText: {
    color: 'black',
  },
  borderRed: {
    borderColor: 'red',
  },
});
