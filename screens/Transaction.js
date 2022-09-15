import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

export default class TransactionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domState: "normal", //normal: nao digitalizou, scanner: clicou para digitalizar
      hasCameraPermissions: null, //guarda se usuario concedeu a permissão da camera
      scanned: false, //guardara se digitalização foi concluida ou nao
      scannedData: "" //guardara os dados que foram digitalizados
    };
  }
//Pegar a permissao
//
  getCameraPermissions = async domState => {
   const {status} = await Permissions.askAsync(Permissions.CAMERA);
    /*status === "granted" é verdadeiro se o usuário concedeu permissão
        status === "granted" é falso se o usuário não concedeu permissão
      */
    this.setState({
    hasCameraPermissions: status === "granted",
    scanned:false,
    domState: domState
    })

  };

  handleBarCodeScanned = async ({ type, data }) => {
    
  };

  render() {
    

    return (
      <View style={styles.container}>
        <TouchableOpacity
         style={[styles.button, { marginTop: 25 }]}
        onPress={()=> this.getCameraPermissions("scanner")}
        >
         <Text style={styles.buttonText}>Digitalizar QR Code</Text>  
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 15
  },
  button: {
    width: "43%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F48D20",
    borderRadius: 15
  },
  buttonText: {
    fontSize: 15,
    color: "#FFFFFF"
  }
});
