import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBplKGrKBRkpOBO-NyiwzGpo80RuzmnCQw',
  authDomain: 'friends-5e9be.firebaseapp.com',
  databaseURL: 'https://friends-5e9be.firebaseio.com',
  projectId: 'friends-5e9be',
  storageBucket: 'friends-5e9be.appspot.com',
  messagingSenderId: '533296722178',
  appId: '1:533296722178:ios:fd1730a11b031bcbcad21b',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
console.log(firebase);

export { firebase };
