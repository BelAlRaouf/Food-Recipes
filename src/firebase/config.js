import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBuzOgdu1kOSXRoqC23BK_tmoMsN2-YbgY",
    authDomain: "chef-cooking-site.firebaseapp.com",
    projectId: "chef-cooking-site",
    storageBucket: "chef-cooking-site.appspot.com",
    messagingSenderId: "1049221594045",
    appId: "1:1049221594045:web:3e4230a275fd56a9c030d4"
};

//init firebase 
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()

export{projectFirestore}

