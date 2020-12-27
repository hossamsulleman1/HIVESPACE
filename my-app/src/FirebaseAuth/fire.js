import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA18XI0uZ1LXDf6_p6NsPJ44ngPKNjNr8Q",
  projectId: "semptiareact",
  databaseURL: "https://semptiareact.firebaseio.com/",
  authDomain: "semptiareact.firebaseapp.com",

  // OPTIONAL
  storageBucket: "semptiareact.appspot.com",
  measurementId: "G-HSKLQN04DJ",
}

var fire = firebase.initializeApp(firebaseConfig)

export default fire;