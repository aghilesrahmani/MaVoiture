// Aghiles RAHMANI ariles.rahmani@gmail.com
//

import * as React from 'react';
import { View,StyleSheet, Text, Button, NavigatorIOS,DatePickerIOS, ImageBackground, SafeAreaView ,InputAccessoryView,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import { useState } from 'react';
//import DatePickerIOS from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker';


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
    <View style={{ flex: 1, /*alignItems: 'center', justifyContent: 'center'*/ }}>
      <ImageBackground
      source={require('/Users/antoine/test1/voiture.jpg')}
      style={styles.img}>

      </ImageBackground>

      <View flexDirection='column' style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
 
      <View  flexDirection='column' style={{alignItems: 'center', justifyContent: 'center'}}>
      <TextInput onChangeText={(val) => setName(val)} style={styles.inputText} placeholder={'Email'} placeholderTextColor='white' keyboardType='email-address'></TextInput>
      <TextInput style={styles.inputText} placeholder={'Password'} secureTextEntry placeholderTextColor='white'/>
      
      </View>

          <View  style={styles.btn} flexDirection='row'  style={{  alignItems: 'center', justifyContent: 'center' }}  >
             <Button style={styles.btn}
                title='LogIn'
                color='black'
                onPress={()=> navigation.navigate('InterfaceCar', {name })}> 
             </Button>
      
      
        <Button  marginRight='30%'
         title='Inscription'
         color='black'
          onPress={()=> navigation.navigate('Inscription')}>
        </Button>
        
      </View>
     
      

      </View>

      <View flexDirection='row' style={styles.reseauSoc}>
        <View>
        <Image source={require('/Users/antoine/test1/logo_twitter.png')} 
          style={styles.rsSoc}
        />
        </View>
        <View>
        <Image source={require('/Users/antoine/test1/logo_instagram.png')} 
          style={styles.rsSoc}
        />
        </View>
        <View>
        <Image source={require('/Users/antoine/test1/logo_facebook.png')} 
          style={styles.rsSoc}
        />
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

  const [chosenDate, setChosenDate] = useState(new Date());
 
  return( 
    <View  style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <TextInput onChangeText={(val) => setMarque(val)} style={styles.inputText} placeholder='Marque du vehicule'  placeholderTextColor='white'></TextInput>
      <TextInput onChangeText={(val) => setModel(val)} style={styles.inputText} placeholder='Model' placeholderTextColor='white'></TextInput>
      <TextInput onChangeText={(val) => setPrix(val)} style={styles.inputText} placeholder='prix' placeholderTextColor='white' keyboardType='numeric'></TextInput>
      <TextInput onChangeText={(val) => setDispo(val)} style={styles.inputText} placeholder='disponibilité' placeholderTextColor='white' ></TextInput>

      <View style={styles.date} >

      <View flexDirection='column'>
        <DatePickerIOS
        
          date={chosenDate}
          onDateChange={setChosenDate}
          mode='date'
        
        />
        </View>
       

      </View>

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
    <ScrollView   style={styles.Resultat}  backgroundColor='black' >
    <View style={styles.haut} backgroundColor='white' >
      <View flexDirection='row' borderRadius='5'>
        <Text style={styles.text} >marque :{JSON.stringify(marque)}</Text>
        <Text style={styles.text}>Model :{JSON.stringify(model)}</Text>
      </View>
      <View flexDirection='row'>
        <Text style={styles.text}>Prix :{JSON.stringify(prix)}</Text>
        <Text style={styles.text}>Dispoibilite :{JSON.stringify(Dispo)}</Text>
      </View>
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

      <View>
        <Button
          title='Reserver'
        >

        </Button>
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

function Logotitle() { //ajout du logo à la place du titre, cette fonction est à ajouter dans les parametres options du stack.screen
  return(
    <Image
      style={{width: 230, height:50}}
      source={require('/Users/antoine/test1/pngCar.png')}
    />
  );
  }


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}  
          options={{ 
            headerTransparent:'true',
              headerTitle: props => <Logotitle />,
              
              title:'Louer sa voiture', 
              mode:'float',
              headerStyle:{ backgroundColor:'gray'}, 
              headerRight:() => (<Button title='info'/>)}}/>

        <Stack.Screen name="Inscription" component={Inscription} options={{mode:'modal'}} />
        
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
  haut:{
    backgroundColor:'#7B8D93',
    borderRadius:15,
    width:'99%',
    margin:1,
    display:'flex'

  },
  text:{
    borderRadius:20,
    width:'49.25%',
    height:45,
    fontSize:15,
    color:'black',
    fontWeight:'bold',
    //backgroundColor:'#7B8D93',
    margin:1,
    marginLeft:1,
    //alignItems:'center',
    //justifyContent:'center',
    borderRadius:5,
  },
  

  Res:{
    width:'99%',
    height:150,
    borderRadius:20,
    //backgroundColor:'#373E55',
    backgroundColor:'white',
    margin:2,
    alignItems:'center',
    justifyContent:'center'

  },
  date:{
    //flex:1,
    width:130,
    height:40,
    borderRadius:20,
    justifyContent:'center',
    //backgroundColor:'black'
    //alignItems:'center'

  },
  rsSoc:{
    width:50,
    height:50,
    //:10,
    borderRadius:20,
    justifyContent:'space-between',
  alignItems:'center'  },

  reseauSoc:{
    margin:20,
    
    justifyContent:'flex-end',
    justifyContent:'center'
  }
})
export default App;