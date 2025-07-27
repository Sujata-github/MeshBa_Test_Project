import { View, Text, TouchableOpacity } from 'react-native'
import { AuthContext } from '../../hooks/AuthContext'
import React, { useContext } from 'react'

const index = () => {
  const { logout } = useContext(AuthContext) 
  return (
    <View style={{height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Text>Profile</Text>
      <TouchableOpacity style={{backgroundColor:'orange' ,height:30 ,width:80,alignItems:'center',justifyContent:'center',borderRadius:6,marginTop:15}} onPress={()=>logout()}><Text>Logout</Text></TouchableOpacity>
    </View>
  )
}

export default index



