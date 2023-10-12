import {
  getDatabase,
  onValue,
  ref,
  update,
  push,
  set,
  query,
  orderByChild,
  equalTo, 
  get
} from "firebase/database";
import { useCallback, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut as firebaseSignOut,
  sendEmailVerification,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIYg7fp9VX-3R-Q47PCi8tZaJq7T00qtk",
  authDomain: "catscrib.firebaseapp.com",
  databaseURL: "https://catscrib-default-rtdb.firebaseio.com",
  projectId: "catscrib",
  storageBucket: "catscrib.appspot.com",
  messagingSenderId: "64127031506",
  appId: "1:64127031506:web:f59c51b78f60bff4cf350b",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

// AUTHENTICATION UTILITIES
export const signInWithGoogle = () => {
  const auth = getAuth(firebase);
  signInWithPopup(auth, new GoogleAuthProvider()).then((result) => {
    // If the user is new or hasn't verified the email, send a verification email
    console.log("email verified", result.user.emailVerified);
    if (result.user && !result.user.emailVerified) {
      sendEmailVerification(result.user);
    }
  });
};

export const signOut = () => firebaseSignOut(getAuth(firebase));

export const useAuthState = () => {
  const [user, setUser] = useState();

  useEffect(() => onAuthStateChanged(getAuth(firebase), setUser), []);

  return [user];
};

// DATABASE UTILITIES
export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(
    () =>
      onValue(
        ref(database, path),
        (snapshot) => {
          setData(snapshot.val());
        },
        (error) => {
          setError(error);
        }
      ),
    [path]
  );

  return [data, error];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message =
    error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbAdd = (path) => {
  const [result, setResult] = useState();
  const makeResult = (error) => ({
    success: !error,
    error: error || null,
  });
  const addData = useCallback(
    (value) => {
      const newRef = push(ref(database, path));
      set(newRef, value)
        .then(() => setResult(makeResult()))
        .catch((error) => setResult(makeResult(error)));
    },
    [database, path]
  );
  return [addData, result];
};

export const useDbExist = (path, field, value) => {
  const [exists, setExists] = useState(null); // null denotes not checked yet, true/false for result
  const [error, setError] = useState(null);

  const checkExists = useCallback(() => {
    const dbRef = ref(database, path);
    const fieldValueQuery = query(dbRef, orderByChild(field), equalTo(value));
    get(fieldValueQuery)
      .then((snapshot) => {
        setExists(snapshot.exists());
      })
      .catch((err) => {
        setError(err);
        setExists(null);
      });
  }, [database, path, field, value]);

  return [checkExists, exists, error];
};
