import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native'

const Header = () => {
   const {navigate} = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="person-circle" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ fontSize: 20 }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigate('Settings')}>
          <Ionicons name="settings" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
});

export default Header;
