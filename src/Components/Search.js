import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Search}>
        <FontAwesome name="search" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15
  },
  Search: {
    padding: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'grey'
  },
});

export default Search;
