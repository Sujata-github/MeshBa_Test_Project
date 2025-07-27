

import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  // Picker
} from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useForm, Controller } from 'react-hook-form'
import { Picker } from '@react-native-picker/picker'
import { icons } from '../../constants'
import { router } from 'expo-router'
import DropDownPicker from 'react-native-dropdown-picker';
DropDownPicker.setListMode("SCROLLVIEW");

const SignUpScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()


  // Dropdown states
  const [countryOpen, setCountryOpen] = useState(false);
  const [countryValue, setCountryValue] = useState(null);
  const [countryItems, setCountryItems] = useState([
    { label: 'India', value: 'India' },
    { label: 'USA', value: 'USA' },
    { label: 'UK', value: 'UK' }
  ]);

  const [stateOpen, setStateOpen] = useState(false);
  const [stateValue, setStateValue] = useState(null);
  const [stateItems, setStateItems] = useState([
    { label: 'Maharashtra', value: 'Maharashtra' },
    { label: 'Karnataka', value: 'Karnataka' },
    { label: 'California', value: 'California' }
  ]);

  const [cityOpen, setCityOpen] = useState(false);
  const [cityValue, setCityValue] = useState(null);
  const [cityItems, setCityItems] = useState([
    { label: 'Pune', value: 'Pune' },
    { label: 'Mumbai', value: 'Mumbai' },
    { label: 'Bangalore', value: 'Bangalore' }
  ]);
  const onSubmit = (data) => {
    console.log('Signup Data:', data)
  }

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            {/* <Image source={icons.logo} style={styles.logo} /> */}
<TouchableOpacity onPress={() => router.push('/home')}>
  <Image source={icons.logo} style={styles.logo} />
</TouchableOpacity>
            <View style={styles.content}>
              <Text style={styles.title}>Sign Up</Text>

              {/* Full Name */}
              <Text style={styles.label}>Full Name</Text>
              <View style={styles.inputContainer}>
                <Feather name="user" size={20} color="#FBC740" />
                <Controller
                  control={control}
                  name="fullname"
                  rules={{ required: 'Full name is required' }}
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      placeholder="Enter your full name"
                      placeholderTextColor="#FAB400"
                      style={styles.input}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                />
              </View>
              {errors.fullname && (
                <Text style={styles.errorText}>{errors.fullname.message}</Text>
              )}

              {/* Mobile Number */}
              <Text style={styles.label}>Mobile No</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="phone-portrait-outline" size={20} color="#FBC740" />
                <Controller
                  control={control}
                  name="mobile"
                  rules={{
                    required: 'Mobile number is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Mobile number must be 10 digits'
                    }
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      placeholder="Enter your mobile no"
                      placeholderTextColor="#FAB400"
                      keyboardType="phone-pad"
                      style={styles.input}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                />
              </View>
              {errors.mobile && (
                <Text style={styles.errorText}>{errors.mobile.message}</Text>
              )}

              <Text style={styles.label}>Country</Text>
              <View style={{
                position: 'relative', zIndex: countryOpen ? 3000 : 1, borderTopColor: '#FCD470',
                borderTopWidth: 2,
                borderLeftColor: '#FCD470',
                borderLeftWidth: 1,
                borderRightColor: '#FCD470',
                borderRightWidth: 1, borderRadius: 8
              }}>
                <Feather
                  name="globe"
                  size={20}
                  color="#FAB400"
                  style={{
                    position: 'absolute',
                    top: 15,
                    left: 12,
                    zIndex: 5001,
                  }}
                />

                <Controller
                  control={control}
                  name="country"
                  rules={{ required: 'Country is required' }}
                  render={({ field: { onChange, value } }) => (
                    <DropDownPicker
                      open={countryOpen}
                      value={countryValue}
                      items={countryItems}
                      setOpen={setCountryOpen}
                      setValue={(callback) => {
                        const newValue = callback(countryValue);
                        onChange(newValue);
                        setCountryValue(newValue);
                      }}
                      setItems={setCountryItems}
                      placeholder="Select Country"
                      placeholderStyle={{ color: '#FAB400', fontSize: 16 }}
                      style={styles.dropdown}
                      dropDownContainerStyle={styles.dropdownContainer}

                      // Arrow icons on right
                      ArrowUpIconComponent={() => (
                        <Feather name="chevron-up" size={20} color="#FAB400" />
                      )}
                      ArrowDownIconComponent={() => (
                        <Feather name="chevron-down" size={20} color="#FAB400" />
                      )}
                      iconContainerStyle={{ right: 10 }}

                      // Add padding to leave space for globe icon
                      listItemLabelStyle={{ paddingLeft: 10 }}
                    />
                  )}
                />
              </View>
              {/* </View> */}

              {errors.country && (
                <Text style={styles.errorText}>{errors.country.message}</Text>
              )}


              {/* State */}
              <Text style={styles.label}>State</Text>
              <View style={{
                position: 'relative', zIndex: stateOpen ? 3000 : (countryOpen ? 2000 : 1), borderTopColor: '#FCD470',
                borderTopWidth: 2,
                borderLeftColor: '#FCD470',
                borderLeftWidth: 1,
                borderRightColor: '#FCD470',
                borderRightWidth: 1, borderRadius: 8
              }}>
                <Feather
                  name="map"
                  size={20}
                  color="#FAB400"
                  style={{
                    position: 'absolute',
                    top: 15,
                    left: 12,
                    zIndex: 5001,
                  }}
                />
                <Controller
                  control={control}
                  name="state"
                  rules={{ required: 'State is required' }}
                  render={({ field: { onChange, value } }) => (
                    <DropDownPicker
                      open={stateOpen}
                      value={stateValue}
                      items={stateItems}
                      setOpen={setStateOpen}
                      setValue={(callback) => {
                        const newValue = callback(stateValue);
                        onChange(newValue);
                        setStateValue(newValue);
                      }}
                      setItems={setStateItems}
                      placeholder="Select State"
                      placeholderStyle={{ color: '#FAB400', fontSize: 16 }}
                      style={[styles.dropdown, { paddingLeft: 40 }]}
                      dropDownContainerStyle={styles.dropdownContainer}
                      ArrowUpIconComponent={() => (
                        <Feather name="chevron-up" size={20} color="#FAB400" style={{ marginRight: 8 }} />
                      )}
                      ArrowDownIconComponent={() => (
                        <Feather name="chevron-down" size={20} color="#FAB400" style={{ marginRight: 8 }} />
                      )}
                      iconContainerStyle={{ right: 10 }}
                      listItemLabelStyle={{ paddingLeft: 10 }}
                    />
                  )}
                />
              </View>
              {errors.state && <Text style={styles.errorText}>{errors.state.message}</Text>}


              {/* City */}
              <Text style={styles.label}>City</Text>
              <View style={{
                position: 'relative', zIndex: cityOpen ? 3000 : (stateOpen ? 2000 : 1), borderTopColor: '#FCD470',
                borderTopWidth: 2,
                borderLeftColor: '#FCD470',
                borderLeftWidth: 1,
                borderRightColor: '#FCD470',
                borderRightWidth: 1, borderRadius: 8
              }}>
                <Feather
                  name="map-pin"
                  size={20}
                  color="#FAB400"
                  style={{
                    position: 'absolute',
                    top: 15,
                    left: 12,
                    zIndex: 5001,
                  }}
                />
                <Controller
                  control={control}
                  name="city"
                  rules={{ required: 'City is required' }}
                  render={({ field: { onChange, value } }) => (
                    <DropDownPicker
                      open={cityOpen}
                      value={cityValue}
                      items={cityItems}
                      setOpen={setCityOpen}
                      setValue={(callback) => {
                        const newValue = callback(cityValue);
                        onChange(newValue);
                        setCityValue(newValue);
                      }}
                      setItems={setCityItems}
                      placeholder="Select City"
                      placeholderStyle={{ color: '#FAB400', fontSize: 16 }}
                      style={[styles.dropdown, { paddingLeft: 40, fontSize: 16 }]}
                      dropDownContainerStyle={styles.dropdownContainer}
                      ArrowUpIconComponent={() => (
                        <Feather name="chevron-up" size={20} color="#FAB400" style={{ marginRight: 8 }} />
                      )}
                      ArrowDownIconComponent={() => (
                        <Feather name="chevron-down" size={20} color="#FAB400" style={{ marginRight: 8 }} />
                      )}
                      iconContainerStyle={{ left: 10, right: 'auto' }}
                    />
                  )}
                />
              </View>
              {errors.city && <Text style={styles.errorText}>{errors.city.message}</Text>}



              {/* Submit Button */}
              <TouchableOpacity style={styles.loginButton} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.loginText}>SIGN UP</Text>
              </TouchableOpacity>

              <View style={styles.signUpContainer}>
                <Text style={styles.signUpLine}>Alredy have an account? {" "}</Text>
                <TouchableOpacity onPress={() => router.push('SignInScreen')}>
                  <Text style={styles.signUpLink}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  scrollContainer: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    padding: 24
  },
  logo: {
    top: 0,
    left: 10
    // marginBottom: 10
  },
  content: {
    marginTop: 30,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: -15,
    justifyContent: 'start'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 20
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
    borderTopWidth: 2,
    borderLeftColor: '#FCD470',
    borderLeftWidth: 1,
    borderRightColor: '#FCD470',
    borderRightWidth: 1,
    borderRadius: 8,
    backgroundColor: '#FFF5DC',
    paddingHorizontal: 10,
    paddingVertical: 6,
    // marginBottom: 4,
    overflow: 'hidden'
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#fff2d2', height: 40
  },
  picker: {
    flex: 1,
    maxHeight: 40,
    minHeight: 40,
    paddingVertical: Platform.OS === 'android' ? 6 : 0,

    color: '#FAB400'
  },
  loginButton: {
    backgroundColor: '#FFC123',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30
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
    marginTop: 20,
    marginBottom: 40
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 4
  },

  dropdown: {
    borderTopColor: '#FCD470',
    borderTopWidth: 2,
    borderLeftColor: '#FCD470',
    borderLeftWidth: 1,
    borderRightColor: '#FCD470',
    borderRightWidth: 1,
    backgroundColor: '#FFF5DC',
    height: 50,
    paddingLeft: 36, // make space for icon
    borderRadius: 8,
  },
  dropdown: {
    borderColor: '#FCD470',
    borderWidth: 0,
    backgroundColor: '#FFF5DC',
    height: 50,
    paddingLeft: 40, // leave space for globe icon
    borderRadius: 8,
  }
  ,
  dropdownContainer: {
    borderColor: '#FCD470',
    backgroundColor: '#FFF5DC',
    borderRadius: 8

  },

})

export default SignUpScreen
