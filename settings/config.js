// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: 'AIzaSyBuwadrIPjQMc2JGMcGnEmk54J_B-4_AKI',
  authDomain: 'nativegoit-d61ed.firebaseapp.com',
  databaseURL: 'https://nativegoit-d61ed-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'nativegoit-d61ed',
  storageBucket: 'nativegoit-d61ed.appspot.com',
  messagingSenderId: '949056756189',
  appId: '1:949056756189:android:88af78215fe6a8a9557e34',
  // measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);
export const storage = getStorage(app);