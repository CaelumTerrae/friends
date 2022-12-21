import React from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import FriendCard from '../components/FriendCard';

const PRE_DATA = [
  1, 3, 4, 5, 2, 4, 5, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
];
const DATA = PRE_DATA.map((v, i) => {
  return {
    id: i,
    title: `Friend ${i}`,
    friend_status: i < 5 ? 'not_added' : i < 10 ? 'friends' : i < 15 ? 'add_back' : 'pending',
    bio: "this is my bio please don't break the app",
  };
});

export default FriendListScreen = (props) => {
  const logged_in = useSelector((state) => {
    return state.login.logged_in;
  });
  const renderItem = ({ item }) => {
    return <FriendCard name={item.title} friend_status={item.friend_status} bio={item.bio} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
