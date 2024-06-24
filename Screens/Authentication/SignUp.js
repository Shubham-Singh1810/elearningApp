import {
    StyleSheet,
    Pressable,
    Text,
    View,
    Image,
    TextInput,
    Button,
    Modal,
    TouchableOpacity,
    ActivityIndicator,
  } from 'react-native';
  import React, {useState} from 'react';
  import LinearGradient from 'react-native-linear-gradient';
  import {Formik} from 'formik';
  import * as Yup from 'yup';
  import * as Animatable from 'react-native-animatable';
const AnimatedInput = Animatable.createAnimatableComponent(TextInput);
const AnimatedButton = Animatable.createAnimatableComponent(Pressable);
  import {useNavigation} from '@react-navigation/native';
//   import {signup} from '../services/user.services';
import Toast from 'react-native-toast-message';
  // import Icon from 'react-native-vector-icons/Ionicons';
  const SignUp = () => {
    const navigation = useNavigation();
    const validationSchema = Yup.object().shape({
      FullName: Yup.string().required('Full Name is required'),
      Email: Yup.string().email('Invalid email').required('Email is required'),
      Password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref('Password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    });
    const [loader, setLoader] = useState(false);
    // const handleSignUp = async values => {
    //   setLoader(true);
    //   try {
    //     let response = await signup(values);
    //     if (response.data.status.code == 200) {
    //       navigation.navigate('Otp', {email: values.Email});
    //       setLoader(false);
    //     }
    //     if (response?.data?.status?.code == 202) {
    //       setLoader(false);
    //       // Toast.error('Email already registered');
    //     }
    //   } catch (error) {
    //     // Toast.error('Internal server error');
    //     setLoader(false);
    //   }
    // };
    return (
      <>
        <LinearGradient
          colors={['#b5d5fc', '#eef4fe', '#f4f8fc', '#fff']}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animatable.Image animation="zoomIn" duration={1400} source={require("../../images/categoryBanner.png")} style={{height:120, width:120, resizeMode:"contain", marginTop:-80, marginLeft:-40 , alignSelf:"flex-start"}}/>

          <View style={{width: '90%', marginTop:-50}}>
            <View style={{alignItems: 'center', marginBottom: 35,  width:"100%"}}>
              
            
                <Animatable.Text
                  animation="slideInUp"
                  duration={1100}
                  style={{
                      fontSize: 15,
                    marginBottom: 15,
                    fontWeight: '500',
                    color: 'black',
                  }}>
                  Create new account
                </Animatable.Text>
                <Animatable.Text
                  animation="zoomIn"
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
            <View style={{width:"100%", position:"absolute", justifyContent:"flex-end",top:30, flexDirection:"row"}}>

            <Animatable.Image animation="zoomIn" duration={1400} source={require("../../images/studying.png")} style={{height:120, width:120, resizeMode:"contain", marginTop:0,marginRight:-70 }}/>
            </View>
            <Formik
              initialValues={{
                FullName: '',
                Email: '',
                Password: '',
                ConfirmPassword: '',
              }}
              validationSchema={validationSchema}
              onSubmit={values => handleSignUp(values)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View>
                  <View style={{marginBottom: 20}}>
                    <Animatable.Text animation="slideInUp" duration={1300} 
                    style={{fontSize: 18, marginBottom: 5 , color:"black"}}>Name</Animatable.Text>
                    <AnimatedInput
                    animation="slideInUp" duration={1400} 
                      style={[
                        styles.inputBox,
                        touched.FullName && errors.FullName && styles.borderRed,
                      ]}
                      placeholder="Enter your full name"
                      placeholderTextColor="gray"
                      onChangeText={handleChange('FullName')}
                      onBlur={handleBlur('FullName')}
                      value={values.FullName}
                    />
                    {touched.FullName && errors.FullName && (
                      <Text style={styles.errorText}>{errors.FullName}</Text>
                    )}
                  </View>
                  <View style={{marginBottom: 20}}>
                    <Animatable.Text animation="slideInUp" duration={1500} style={{fontSize: 18, marginBottom: 5, color:"black"}}>Email</Animatable.Text>
                    <AnimatedInput
                    animation="slideInUp" duration={1600}
                      style={[
                        styles.inputBox,
                        touched.Email && errors.Email && styles.borderRed,
                      ]}
                      placeholder="Enter your email"
                      placeholderTextColor="gray"
                      onChangeText={handleChange('Email')}
                      onBlur={handleBlur('Email')}
                      value={values.Email}
                    />
                    {touched.Email && errors.Email && (
                      <Text style={styles.errorText}>{errors.Email}</Text>
                    )}
                  </View>
                  <View style={{marginBottom: 20}}>
                    <Animatable.Text animation="slideInUp" duration={1700} style={{fontSize: 18, marginBottom: 5, color:"black"}}>Password</Animatable.Text>
                    <AnimatedInput
                    animation="slideInUp" duration={1800}
                      style={[
                        styles.inputBox,
                        touched.Password && errors.Password && styles.borderRed,
                      ]}
                      placeholder="Enter your password"
                      placeholderTextColor="gray"
                      onChangeText={handleChange('Password')}
                      onBlur={handleBlur('Password')}
                      value={values.Password}
                      secureTextEntry={true}
                    />
                    {touched.Password && errors.Password && (
                      <Text style={styles.errorText}>{errors.Password}</Text>
                    )}
                  </View>
                  <View style={{marginBottom: 35}}>
                    <Animatable.Text animation="slideInUp" duration={1900} style={{fontSize: 18, marginBottom: 5, color:"black"}}>
                      Confirm Password
                    </Animatable.Text>
                    <AnimatedInput
                    animation="slideInUp" duration={2000}
                      style={[
                        styles.inputBox,
                        touched.ConfirmPassword &&
                          errors.ConfirmPassword &&
                          styles.borderRed,
                      ]}
                      placeholder="Confirm your password"
                      placeholderTextColor="gray"
                      onChangeText={handleChange('ConfirmPassword')}
                      onBlur={handleBlur('ConfirmPassword')}
                      value={values.ConfirmPassword}
                      secureTextEntry={true}
                    />
                    {touched.ConfirmPassword && errors.ConfirmPassword && (
                      <Text style={styles.errorText}>
                        {errors.ConfirmPassword}
                      </Text>
                    )}
                  </View>
                  {/* <Button
                    color="#11134e"
                    title="Sign Up"
                    // onPress={handleSubmit}
                  /> */}
                  <AnimatedButton
                  onPress={() => navigation.navigate('OtpScreen')}
                animation="slideInUp"
                duration={2100}
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
                  Sign Up
                </Text>
              </AnimatedButton>
                </View>
              )}
            </Formik>
            <Animatable.View
            animation="slideInUp"
            duration={2200}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 30,
              }}>
              <Text style={{color: 'black'}}>Already have an account?</Text>
              <Pressable 
              onPress={() => navigation.navigate('Login')}
              >
                <Text
                  style={{
                    color: '#11134e',
                    marginHorizontal: 4,
                    fontWeight: '500',
                    textDecorationLine: 'underline',
                  }}>
                  Log in
                </Text>
              </Pressable>
            </Animatable.View>
          </View>
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
        {/* <ToastManager /> */}
      </>
    );
  };
  
  export default SignUp;
  
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
    errorText: {
      color: 'red',
    },
    borderRed: {
      borderColor: 'red',
    },
  });
  