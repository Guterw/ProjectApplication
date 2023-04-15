import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Home = () => {
    return(
        <>
        <StatusBar />
        <View style={styles.container}>
        </View>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });