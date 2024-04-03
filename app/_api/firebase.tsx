'use client';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyByNitotapRcmhcAoVSHEjWXYdbxS7fNMQ',
	authDomain: 'halping-hands-95b2d.firebaseapp.com',
	projectId: 'halping-hands-95b2d',
	storageBucket: 'halping-hands-95b2d.appspot.com',
	messagingSenderId: '481327556083',
	appId: '1:481327556083:web:778a2c9f90c0fb9ae35e86',
	measurementId: 'G-HFLYZ9DN5W',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const auth = firebase.auth();
const auth = getAuth();

export { db, auth };
