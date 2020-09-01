import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDjGWsqWWhwJzYwimxlCaIspDczvzq1OOM',
  authDomain: 'confesiones-69a3e.firebaseapp.com',
  databaseURL: 'https://confesiones-69a3e.firebaseio.com',
  projectId: 'confesiones-69a3e',
  storageBucket: 'confesiones-69a3e.appspot.com',
  messagingSenderId: '808678276389',
  appId: '1:808678276389:web:79700c4a522f68f3d1eecc',
};

if (!firebase.apps.lenght) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
