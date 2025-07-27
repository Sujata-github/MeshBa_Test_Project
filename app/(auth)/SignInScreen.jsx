
import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  StatusBar
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useForm, Controller } from 'react-hook-form'
import { icons } from '../../constants'
import { router } from 'expo-router'

const SignInScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [remember, setRemember] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)

  const onSubmit = (data) => {
    console.log('Form Data:', data)
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* <Image source={icons.logo} style={styles.logo}  /> */}
<TouchableOpacity onPress={() => router.push('/home')}>
  <Image source={icons.logo} style={styles.logo} />
</TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.title}>Log In</Text>

          {/* Mobile No */}
          <Text style={styles.label}>Mobile No</Text>
          
          <View style={styles.inputContainer}>
  

  <Ionicons name="phone-portrait-outline" size={24}  color="#f5a623" />
  <Controller
    control={control}
    name="mobile"
    rules={{
      required: 'Mobile number is required',
      pattern: {
        value: /^[0-9]{10}$/,
        message: 'Mobile number must be exactly 10 digits'
      }
    }}
    render={({ field: { onChange, value } }) => (
      <TextInput
        placeholder="Enter your mobile no"
          placeholderTextColor={'#FAB400'}
        keyboardType="phone-pad"
        style={styles.input}
        onChangeText={onChange}
        value={value}
      />
    )}
  />
</View>

          {errors.mobile && (
            <Text style={{ color: 'red', marginBottom: 4 }}>{errors.mobile.message}</Text>
          )}

          {/* Password */}
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <Feather name="lock" size={20} color="#FAB400" />
            <Controller
              control={control}
              name="password"
              rules={{ required: 'Password is required' }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder="Enter your password"
                  placeholderTextColor={'#FAB400'}
                  secureTextEntry={!showPassword}
                  style={styles.input}
                  onChangeText={onChange}
                  value={value}
                  
                />
              )}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Feather
                name={showPassword ? 'eye-off' : 'eye'}
                size={20}
                color="#FAB400"
              />
            </TouchableOpacity>
          </View>
          {errors.password && (
            <Text style={{ color: 'red', marginBottom: 4 }}>{errors.password.message}</Text>
          )}

          {/* Remember Me & Forgot */}
          <View style={styles.optionsRow}>
            <TouchableOpacity
              style={styles.customCheckbox}
              onPress={() => setRemember(!remember)}
            >
              {remember ? (
                <Feather name="check-square" size={20} color="#FAB400" />
              ) : (
                <Feather name="square" size={20} color="#FAB400" />
              )}
              <Text style={styles.rememberText}>Remember Me</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>

          {/* Sign Up */}
         
          <View style={styles.signUpContainer}>
  <Text style={styles.signUpLine}>Don’t have an account? {" "}</Text>
  <TouchableOpacity onPress={() => router.push('SignUpScreen')}>
    <Text style={styles.signUpLink}>Sign Up</Text>
  </TouchableOpacity>
</View>

        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'start',
   
  },
  content:{
    marginTop:50,
     flex: 1,
    padding: 20,
    justifyContent: 'start'
  },
  logo: {
    top:0,
    left:10
    // marginBottom: 10
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 30
  },
  label: {
    color: '#FBC740',
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 12
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
   
    borderTopColor: '#FCD470',
    borderTopWidth:2,
    borderLeftColor:'#FCD470',
    borderLeftWidth:1,
    borderRightColor:'#FCD470',
    borderRightWidth:1,
    borderRadius: 8,
    backgroundColor: '#FFF5DC',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 4, overflow: 'hidden'
  },

  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor:'#fff2d2'
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    alignItems: 'center'
  },
  customCheckbox: {
  flexDirection: 'row',
  alignItems: 'center'
}
,
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  
  forgotText: {
    color: '#222',
    fontSize: 13
  },
  rememberBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
 rememberText: {
    marginLeft: 6,
    color: '#222', fontSize: 13
  },
  forgotText: {
    color: '#444',
    fontSize: 13
  },
  loginButton: {
    backgroundColor: '#FFC123',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  signUpContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20
},
  signUpLine: {
    // marginTop: 20,
    textAlign: 'center',
    color: '#444'
  },
  signUpLink: {
    color: '#FFC123',
    // color: '#f5a623',
    fontWeight: 'bold',textDecorationLine:'underline',textDecorationStyle:'solid'
  },
  

})

export default SignInScreen