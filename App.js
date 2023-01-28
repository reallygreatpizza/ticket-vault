import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, Image, View, Pressable } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const concertsPhoto = require('./assets/concert.png')
const ticketCost = 99.99;
var finalPrice =0.0;
var finalPriceString = '';

export default function App() {

  const [tickets, ticketsChange] = React.useState('');
  const [haveTicket, setTicket] = React.useState(false);
  
  function getTickets(val)
  {
    ticketsChange(val);
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Ticket Vault</Text>
      <TextInput
        placeholder="Number of Tickets"
        onChangeText={getTickets}
        style= {styles.TextInput}
      />
      <Pressable style={styles.Button}
        onPress={() => {
          
          setTicket(true)
          finalPrice = (tickets * ticketCost).toFixed(2)
          finalPriceString = 'Total Cost: $' + finalPrice

        }}><Text style={styles.ButtonText}>Find the Cost</Text></Pressable>
        
      
      <Text style={styles.Text} >
      {
        haveTicket?
        finalPriceString
        :null

      }
      </Text>


      <Image
        source={concertsPhoto}
        
      />      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image : {
    width: 400,
    height: 200
  },
  TextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 25,
    width: 280

  },
  Text: {
    fontSize: 35,
    marginBottom: 10,
    width: 280,
    textAlign: 'center',
    fontWeight: 'bold',
    
  },
  ButtonText: {
    fontSize: 20,
    marginTop: 8,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  Button: {
    backgroundColor: '#f98b88',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 1,
    paddingHorizontal: 22,
    borderRadius: 4,
    elevation: 3,
  },


});
