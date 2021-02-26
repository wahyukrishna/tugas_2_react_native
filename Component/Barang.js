import React from "react";
import {View,TextInput,Text} from "react-native";

class Barang extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            inputNamaBarang: "",
            inputJumlah: ""
        }
    }

    handleInputNamaBarang = (event) => {
        this.setState({inputNamaBarang: event});
      }

      handleInputJumlah = (event) => {
        this.setState({inputJumlah: event});
      }  
  
      render() {
        return (
          <View>
          <TextInput onChangeText={this.handleInputNamaBarang} placeholder="Masukkan Nama Barang"
          value={this.state.inputNamaBarang}/>
            <TextInput onChangeText={this.handleInputJumlah} placeholder="Masukkan Jumlah"
          value={this.state.inputJumlah} keyboardType="numeric"/>
          <Text>{this.props.namaBelanja}</Text>
          <Text>Nama Barang : {this.state.inputNamaBarang}</Text>
          <Text>Nama Barang : {this.state.inputJumlah}</Text>
          </View>
        )
      }
    
    
   
}
export default Barang;