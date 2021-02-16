import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import FBScreen from './Screens/fbScreen';
import InstaScreen from './Screens/instaScreen';
import { Header, } from "react-native-elements";
import {SafeAreaProvider} from 'react-native-safe-area-context';




const tabNavigator = createBottomTabNavigator({
  Facebook: {
    screen: FBScreen
  },
  Instagram: {
    screen: InstaScreen
  }
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      if (routeName === 'Facebook') {
        return (
          <Image
            source={require('./assets/fb logo.jpg')}
            style={{ width: 30, height: 30 }}
          />
        );
      } else {
        return (
          <Image
            source={require('./assets/insta logo.jpg')}
            style={{ width: 30, height: 30 }}
          />
        );
      }
    }
  }),tabBarOptions: { tabStyle: { width: 400, }, labelStyle: { fontSize: 20 } }
});

const AppContainer = createAppContainer(tabNavigator);

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
      <View style={styles.container}>
        <View>
          <Header
          containerStyle={{backgroundColor:'orange',width:500}}
          centerComponent={{text:'Buzz app',style:{fontSize:20,}}}
          />
        </View>

        <AppContainer />
      </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});


