import firebase, { } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB3ekTw01Deyf92h7SgOhZO_a-E0nO83ng",
    authDomain: "crow-db-4ee91.firebaseapp.com",
    databaseURL: "https://crow-db-4ee91.firebaseio.com",
    projectId: "crow-db-4ee91",
    storageBucket: "crow-db-4ee91.appspot.com",
    messagingSenderId: "272021821569",
    appId: "1:272021821569:web:731c53a59d81b9049c9580",
    measurementId: "G-MPH3VYXZEE"
  };

  firebase.initializeApp(config);

  export const createUserProfilDocument = async (userAuth, additionalData) => {
    if (!userAuth) return ;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    //console.log(snapShot);

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    })
    return await batch.commit();
  };

  export const convertCollectionsSnapshotToMap = (collection) => {
    const transformedCollection = collection.docs.map(doc => {
      const { title, items } = doc.data();

      return{
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });
    return transformedCollection.reduce((accumulator, collection) => {accumulator[collection.title.toLowerCase()]=collection;
    return accumulator;
  }, {})
  };


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
