/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {View,StatusBar,Header,Text,TextInput}from "react-native";
import Barang from "./Component/Barang";

class App extends React.Component {
  render(){
  return (
    <View>
      <StatusBar backgroundColor="grey"/>
      <Text>TUGAS 2 REACT NATIVE</Text>
      <Barang namaBelanja="=================Total Belanja================="/>
    </View>
  );
  }
};

export default App;
