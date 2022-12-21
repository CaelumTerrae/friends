import React, { useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FriendListPage from './pages/FriendListPage';
import LoginPage from './pages/LoginPage';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import loginReducer from './state/LoginReducer';

const Stack = createNativeStackNavigator();
const store = createStore(loginReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="Home" component={FriendListPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
