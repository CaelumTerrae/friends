import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FriendListScreen from './pages/FriendListScreen';
import { firebase } from './firebase/config';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import loginReducer from './state/LoginReducer';
import LoginScreen from './pages/LoginScreen/LoginScreen';
import RegistrationScreen from './pages/RegistrationScreen/RegistrationScreen';

const Stack = createNativeStackNavigator();
const store = createStore(loginReducer);

const App = () => {
  // this will only work if you specify the bundleIdentifier in app.json
  const { login } = store.getState();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setLoading(false);
            setUser(userData);
          })
          .catch((error) => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          {user ? (
            <Stack.Screen name="Home">
              {(props) => <FriendListScreen {...props} extraData={user} />}
            </Stack.Screen>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Registration" component={RegistrationScreen} />
            </>
          )}
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
