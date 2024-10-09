import { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function Home() {
  
  return (
    <ScrollView>
    <View>
      <Image style={styles.imageContainer} source={require('./assets/picture_icon.png')}/>
      <Text style={styles.headingText}> Our Founder </Text>
      <Text style={styles.normalText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>

      <Text style={styles.headingText}> What we do </Text>
      <Text style={styles.normalText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </View>
    </ScrollView>
  ); 
}


function About() {
  return (
    <ScrollView>
    <View>
      <Text style={styles.headingText}> About us </Text>
      <Text style={styles.normalText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      <Image style={styles.imageContainer} source={require('./assets/picture_icon.png')}/>
      <Image style={styles.imageContainer} source={require('./assets/picture_icon.png')}/>
    </View>
    </ScrollView>
  );
}

function Course() {
  return (
    <ScrollView>
    <View>
      <Text style={styles.headingText}> First Aid </Text>
      <Image style={styles.imageContainer} source={require('./assets/picture_icon.png')}/>

      <Text style={styles.subheadingText}> Description: </Text>
      <Text style={styles.normalText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      <Text style={styles.subheadingText}> Price: </Text>
      <Text style={styles.normalText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      <Text style={styles.subheadingText}> Content: </Text>
      <Text style={styles.normalText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </View>
    </ScrollView>
  );
}

function Contact() {
  return (
    <ScrollView>
    <View>
      <Text style={styles.headingText}> Locations: </Text>
      <Image style={styles.imageContainer} source={require('./assets/location_icon.png')}/>
      <Image style={styles.imageContainer} source={require('./assets/location_icon.png')}/>
      <Image style={styles.imageContainer} source={require('./assets/location_icon.png')}/>

      <Text style={styles.subheadingText}> Socials: </Text>
      <Text style={styles.normalText}> Instagram: </Text>
      <Text style={styles.normalText}> WhatsApp: </Text>
    </View>
    </ScrollView>
  );
}

function Query() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [cardInfo, setCardInfo] = useState('');
  const [total, setTotal] = useState('');

  return (
    
    <ScrollView>
    <View>
      <Text style={styles.headingText}> Choose your course </Text>

      <Image style={styles.imageContainer} source={require('./assets/picture_icon.png')}/>
      <Image style={styles.imageContainer} source={require('./assets/picture_icon.png')}/>

      <Text style={styles.subheadingText}> Name: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder='Insert your name and surname'
      />
      <Text style={styles.subheadingText}> Contact: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setContact}
        value={contact}
        placeholder='Insert phone number or email address'
      />
      <Text style={styles.subheadingText}> Payment: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setCardInfo}
        value={cardInfo}
        placeholder='Insert banking details'
      />
      /* Total might have to be displayed */
      <Text style={styles.subheadingText}> Total: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setTotal}
        value={total}
      />
    </View>
    </ScrollView>
  );
}


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen
        name='Home'
        component={Home}
        options={{ drawerLabel: 'Home'}}
      />

      <Drawer.Screen
        name='About'
        component={About}
        options={{ drawerLabel: 'About us'}}
      />

      <Drawer.Screen
        name='Course'
        component={Course}
        options={{ drawerLabel: 'Course screen'}}
      />

      <Drawer.Screen
        name='Contact'
        component={Contact}
        options={{ drawerLabel: 'Contact us'}}
      />

      <Drawer.Screen
        name='Query'
        component={Query}
        options={{ drawerLabel: 'Get a quote'}}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  navigatorContainer: {
    flex: 1,
    backgroundColor: '#808080'
  },
  imageContainer: {
    resizeMode: 'contain',
    height: 150,
    width: 250,
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#A9A9A9',
  },
  headingText: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subheadingText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  normalText: {
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

