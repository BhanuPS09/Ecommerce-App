// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDocs,getDoc, setDoc, collection, writeBatch, query } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0fwWAp7c_WVKxbdEnPu5B60ZiI2cBkiQ",
    authDomain: "e-commerce-581b4.firebaseapp.com",
    projectId: "e-commerce-581b4",
    storageBucket: "e-commerce-581b4.appspot.com",
    messagingSenderId: "234902938314",
    appId: "1:234902938314:web:9e5263a599a4a09ff18a33"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = async () => {

    const result = await signInWithPopup(auth, provider).catch((error) => {
        console.log(error.message);
    });

    if (result === undefined) {
        return;

    } else {
        console.log(result);
        return result;

    }
}

const db = getFirestore();

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
  
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  
    return categoryMap;
  };

export const addCollectionAndDocument = async (collectionKey, data) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    data.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);

    });

    await batch.commit();
    console.log("Done");



}

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    // console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalInfo
            })
        } catch (error) {
            console.log("Error in storing the user", error.message);

        }
    }

    return (userDocRef);

};

export const createAuthWithEmailAndPassword = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthWithEmailAndPassword = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => {
    return await signOut(auth);
}

export const onAuthStateChangeListener = (callback) => {
    return onAuthStateChanged(auth, callback);
}






