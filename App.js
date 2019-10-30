import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as Font from 'expo-font'
import ReduxThunk from 'redux-thunk';
import Reducers from './src/2.reducers'
import firebase from 'firebase'
import TodoListScreen from './src/components/TodoListScreen';
import TodoStack from './src/navigators/TodoStack';


export default function App() {
  const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk))
  const [load, setLoad] = useState(false)

  useEffect(() => {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    })
      .then(() => setLoad(true))

  })

  // Replace config ini dengan config kalian sendiri ya gengs
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB29_adMz2vi7qqF7eQY3UPInoTUZ38_Lc",
    authDomain: "terserah-d9560.firebaseapp.com",
    databaseURL: "https://terserah-d9560.firebaseio.com",
    projectId: "terserah-d9560",
    storageBucket: "terserah-d9560.appspot.com",
    messagingSenderId: "451764743194",
    appId: "1:451764743194:web:314d2f2adf51985f7b35a3",
    measurementId: "G-EHWH15XHBK"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  console.disableYellowBox = true
  if (load) {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TodoStack />
        </View>
      </Provider>
    );
  } else {
    return (
      <View></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
