import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';

export default LoginPage = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const loginCallback = () => {
    dispatch({ type: 'UPDATE_LOGGED_IN', payload: true });
  };
  return (
    <SafeAreaView>
      <Text>Login or something</Text>
      <Button onPress={loginCallback}>Login</Button>
    </SafeAreaView>
  );
};
