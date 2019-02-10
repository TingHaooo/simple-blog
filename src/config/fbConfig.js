import firebase from 'firebase'

var config = {
// Put your config here
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase
