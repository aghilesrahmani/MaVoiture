// Aghiles RAHMANI ariles.rahmani@gmail.com

import * as React from 'react';
import { View,StyleSheet, Text, Button, NavigatorIOS, ImageBackground, SafeAreaView ,InputAccessoryView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import { useState } from 'react';

function verif(x){
  if(x.length() != 0);
  if(x.length()== 0){

  };
}

function DrawerContent(props) {
  return(
    <View>
      <Text>ceci est un test</Text>
    </View>
  )
}

function HomeScreen({navigation}) {
  const [name, setName] = useState('');

  return (
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground
      source={require('/Users/antoine/test1/voiture.jpg')}
      style={styles.img}>

      </ImageBackground>

      <TextInput onChangeText={(val) => setName(val)} style={styles.inputText} placeholder={'Email'} placeholderTextColor='white' keyboardType='email-address'></TextInput>
      <TextInput style={styles.inputText} placeholder={'Password'} secureTextEntry placeholderTextColor='white'/>
      
      <View  style={styles.btn} flexDirection='row-reverse' >
        <Button style={styles.btn}
          title='LogIn'
          color='black'
          onPress={()=> navigation.navigate('InterfaceCar', {name })}> 
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


function InterfaceCar({route, navigation}){
  const {name, otherParam} = route.params;
  const [marque, setMarque] = useState('');
  const [model, setModel] = useState('');
  const [prix, setPrix] = useState('');
  const [Dispo, setDispo] = useState('');
 
  return( 
    <View keyboardDismissMode='interactive' style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <TextInput onChangeText={(val) => setMarque(val)} style={styles.inputText} placeholder='Marque du vehicule'  placeholderTextColor='white'></TextInput>
      <TextInput onChangeText={(val) => setModel(val)} style={styles.inputText} placeholder='Model' placeholderTextColor='white'></TextInput>
      <TextInput onChangeText={(val) => setPrix(val)} style={styles.inputText} placeholder='prix' placeholderTextColor='white' keyboardType='numeric'></TextInput>
      <TextInput onChangeText={(val) => setDispo(val)} style={styles.inputText} placeholder='disponibilité' placeholderTextColor='white' ></TextInput>

      <Button
      title='Search'
      onPress={() => navigation.navigate('Resultat',{marque, model, prix, Dispo})}/>

    </View>
  )
};

function Resultat({route, navigation}){
  
  const {marque, otherParams} = route.params;
  const {model, otherParamss} = route.params;
  const {prix, otherParamsss} = route.params;
  const {Dispo, otherParamssss} = route.params;


  return(
    <SafeAreaView>
    <ScrollView   style={styles.Resultat} >
      <View flexDirection='row'>
        <Text style={styles.text} >marque :{JSON.stringify(marque)}</Text>
        <Text style={styles.text}>Model :{JSON.stringify(model)}</Text>
      </View>
      <View flexDirection='row'>
        <Text style={styles.text}>Prix :{JSON.stringify(prix)}</Text>
        <Text style={styles.text}>Dispoibilite :{JSON.stringify(Dispo)}</Text>
      </View>
      <View style={styles.Res} >
        <Text>golf disponible</Text>
      </View>
      <View style={styles.Res} >
        <Text>golf disponible</Text>
      </View>
      <View style={styles.Res} >
        <Text>golf disponible</Text>
      </View> 
      <View style={styles.Res} >
        <Text>golf disponible</Text>
      </View>
      <View style={styles.Res} >
        <Text>golf disponible</Text>
      </View>
      <View style={styles.Res} >
        <Text>golf disponible</Text>
      </View>
      <View style={styles.Res} >
        <Text>golf disponible</Text>
      </View>
      <View style={styles.Res} >
        <Text>golf disponible</Text>
      </View>

    </ScrollView>
    </SafeAreaView>
  );
}
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
        
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}  
          options={{ 
              title:'Louer sa voiture', 
              mode:'float',
              headerStyle:{ backgroundColor:'gray'}, 
              headerRight:() => (<Button title='info'/>)}}/>

        <Stack.Screen name="Inscription" component={Inscription} />
        
        <Stack.Screen name="InterfaceCar" component={InterfaceCar}/>

        <Stack.Screen name="Resultat" component={Resultat}/>

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
    
  },
  text:{
    borderRadius:20,
    width:'49.25%',
    height:25,
    fontSize:15,
    color:'white',
    fontWeight:'bold',
    backgroundColor:'#5B5F6D',
    margin:1,
    marginLeft:1,
    //alignItems:'center',
    //justifyContent:'center',
    borderRadius:5,
  },
  

  Res:{
    width:'99%',
    height:100,
    borderRadius:20,
    backgroundColor:'#373E55',
    margin:2,
    alignItems:'center',
    justifyContent:'center'

  }
})
export default App;