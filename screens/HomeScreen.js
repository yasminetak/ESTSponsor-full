// FIL D ACTUALITE

import React from 'react';
import { View, Text, Button,Dimensions, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity, FlatList} from 'react-native';
//import { useTheme } from '@react-navigation/native';
import{NavigationContainer} from '@react-navigation/native';
import{ createStackNavigator } from '@react-navigation/stack';

import {data} from '../data/data';

import FeedComponent from '../components/FeedComponent'

import Swiper from 'react-native-swiper';
import ProfileScreen from './ProfileScreen';

const width = Dimensions.get('window').width;

const HomeScreen = ({navigation}) => {


  const renderItem = ({item})=>{
    return (
    <FeedComponent
    username={item.username}
    profile={item.profile}
    image={item.image}
    caption={item.caption}
    like={item.like}
    comments={item.comments}
    />
  );
  };

    return (

<View style={styles.container}>
      <FlatList
      data={data}
      keyExtraxtor={(item)=> item.username}
      renderItem={renderItem} />

      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center'
  },
  sliderContainer:{
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
});
