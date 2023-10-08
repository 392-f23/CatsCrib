import { getDatabase, onValue, ref, update, push, set } from "firebase/database";
import { useCallback, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";

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






