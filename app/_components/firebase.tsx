'use client';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCX2EcWzebDLCncPMX6OzvZCJNadksQ7lE',
	authDomain: 'helping-hand-20511.firebaseapp.com',
	projectId: 'helping-hand-20511',
	storageBucket: 'helping-hand-20511.appspot.com',
	messagingSenderId: '936628339648',
	appId: '1:936628339648:web:b7b8770c9afa1c049ebe25',
	measurementId: 'G-JEMW3JZ9V0',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
