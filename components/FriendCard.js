import React from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
// props have following type (not currently enforced)
// name
// image url
// friend enum
// bio

const determineIconMap = {
  not_added: ['plus-circle', '#000000'],
  pending: ['minus-circle', '#E3B71B'],
  friends: ['checkbox-marked-circle', '#09BD06'],
  add_back: ['help-circle', '#9F54EA'],
};

export default FriendCard = (props) => {
  const PersonaContent = () => {
    return <Avatar.Image size={50} source={{ uri: 'https://picsum.photos/100' }} />;
  };

  const getAddFriendButton = (status) => {
    const [icon_name, color] = determineIconMap[status];
    const AddFriendButton = () => {
      return <Avatar.Icon style={styles.avatarIcon} size={50} icon={icon_name} color={color} />;
    };
    return AddFriendButton;
  };

  return (
    <View style={styles.container}>
      <Card mode="contained" style={styles.card}>
        <Card.Title
          titleStyle={styles.cardTitleStyle}
          titleVariant="headlineSmall"
          title={props.name}
          subtitleStyle={styles.cardSubtitleStyle}
          subtitle={props.bio}
          leftStyle={styles.cardLeftStyle}
          left={PersonaContent}
          rightStyle={styles.cardRightStyle}
          right={getAddFriendButton(props.friend_status)}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '3.3%',
  },
  card: {
    backgroundColor: 'white',
  },
  cardTitleStyle: {
    fontSize: '21em',
  },
  cardSubtitleStyle: {
    fontSize: '14em',
    color: '#605757',
  },
  cardLeftStyle: {
    marginLeft: '1%',
    marginRight: '7%',
  },
  cardRightStyle: {
    marginRight: '5%',
  },
  avatarIcon: {
    backgroundColor: '#fff',
  },
});
