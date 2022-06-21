import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Header from '../Components/Header';
import ListChats from '../Components/ListChats';
import Search from '../Components/Search';

const statusHeight = getStatusBarHeight()

const Home = () => {
   return (
      <View style={styles.container}>
         <View style={{flex: .07}}>
         <Header/>
         </View>
         <View style={{flex: .15}}>
         <Search/>
         </View>
         <View style={{flex:1}}>
            <ListChats/>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: statusHeight,
   }
})

export default Home;
