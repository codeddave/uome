import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import firebase from "firebase";
import "firebase/firestore";
import { firebaseReducer, reactReduxFirebase } from "react-redux-firebase";
import {
  reduxFirestore,
  firestoreReducer,
  createFirestoreInstance,
} from "redux-firestore";

import "firebase/auth";
import { composeWithDevTools } from "redux-devtools-extension";

//Reducers
//@todo
const middlewares = [logger];
const fbConfig = {
  apiKey: "AIzaSyDz7tqEmSb7s751Sig_z4Z127zYGZH78V0",
  authDomain: "reactuome.firebaseapp.com",
  databaseURL: "https://reactuome.firebaseio.com",
  projectId: "reactuome",
  storageBucket: "reactuome.appspot.com",
  messagingSenderId: "273219029684",
  appId: "1:273219029684:web:67e675900bb2da712265e1",
};
firebase.initializeApp(fbConfig);
// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance

//Init firestore
//const firestore = firebase.firestore();

//add reactreduxfirebase enhancer when making store creator

const createStoreWithFirebase = compose(reduxFirestore(firebase, rrfConfig))(
  createStore
);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
});

// Create Initial State
const initialState = {};

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
export default store;
