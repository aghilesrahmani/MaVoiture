// Aghiles RAHMANI ariles.rahmani@gmail.com

import * as React from 'react';
import { View,StyleSheet, Text, Button, NavigatorIOS, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';


function verif(x){
  if(x.length() != 0);
  if(x.length()== 0){

  };
}

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground
      source={require('/Users/antoine/test1/voiture.jpg')}
      style={styles.img}>

      </ImageBackground>

      <TextInput style={styles.inputText} placeholder={'Email'} placeholderTextColor='white' keyboardType='email-address'></TextInput>
      <TextInput style={styles.inputText} placeholder={'Password'} secureTextEntry placeholderTextColor='white'/>
      
      <View  style={styles.btn} flexDirection='row-reverse' >
        <Button style={styles.btn}
          title='LogIn'
          color='black'
          onPress={()=> navigation.navigate('InterfaceCar')}> 
        </Button>
      
      <View marginRight='50%'>
        <Button  marginRight='30%'
         title='Inscription'
         color='black'
          onPress={()=> navigation.navigate('Inscription')}>
        </Button>
        </View>
      </View>
    </View>

    



  );
}


function InterfaceCar({navigation}){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <TextInput style={styles.inputText} placeholder='Marque du vehicule' placeholderTextColor='white'></TextInput>
      <TextInput style={styles.inputText} placeholder='Model' placeholderTextColor='white'></TextInput>
      <TextInput style={styles.inputText} placeholder='prix' placeholderTextColor='white' keyboardType='numeric'></TextInput>
      <TextInput style={styles.inputText} placeholder='dispoibilite' placeholderTextColor='white' ></TextInput>

      <Button
      title='Search'
      onPress={() => navigation.push('InterfaceCar')}/>

    </View>
  )
};

function Inscription({navigation}) {
  return(
    <View style={{ flex:1, alignItems: 'center', justifyContent:'center'}}>
      <TextInput style={styles.inputText} placeholder='Nom de famille' placeholderTextColor='white' returnKeyType='next'></TextInput>
      <TextInput style={styles.inputText} placeholder='Prenom' placeholderTextColor='white' returnKeyType='next'></TextInput>
      <TextInput style={styles.inputText} placeholder='Num Telephone' placeholderTextColor='white' keyboardType='number-pad' returnKeyType='next'></TextInput>
      <TextInput style={styles.inputText} placeholder='E-mail' placeholderTextColor='white' keyboardType='email-address'></TextInput>
      <TextInput style={styles.inputText} placeholder='Mot de passe' secureTextEntry placeholderTextColor='white' returnKeyType='next'></TextInput>
      <TextInput style={styles.inputText} placeholder='confirmation mot de passe' secureTextEntry placeholderTextColor='white' returnKeyType='go'></TextInput>
      
      <Button 
        title='Envoi' 
        onPress={() => navigation.navigate('Home')}
      />
    </View>

  );
  
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Inscription" component={Inscription} />
        <Stack.Screen name="InterfaceCar" component={InterfaceCar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  img:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
    position:'absolute',
    justifyContent:'center',
  },

  inputText:{
    width:330,
    height:50,
    fontSize:25,
    color:'white',
    backgroundColor:'black',
    borderRadius:25,
    marginVertical:10,
    justifyContent:'center',
    textAlign:'center'

  },
  btn:{
    color:'white',  
    width:300,  
    justifyContent:'center',
  
    borderRadius:20,
    marginVertical:-10,
    marginHorizontal:80,
    
  }
})
export default App;