// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAicYGG-G6eA23SDvVf6_2XSgw_XKzLdu0",
  authDomain: "folkecho-2024.firebaseapp.com",
  projectId: "folkecho-2024",
  storageBucket: "folkecho-2024.firebasestorage.app",
  messagingSenderId: "983441627378",
  appId: "1:983441627378:web:70f9b84b3b6d6524ba986b",
  measurementId: "G-8VQY90136H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();


// GET ALL STATES
const fetchAllStates = async () => {
  try {
    const statesRef = collection(db, 'states');
    const querySnapshot = await getDocs(statesRef);

    const states = [];
    querySnapshot.forEach((doc) => {
      states.push({
        id: doc.id, // State document ID
        ...doc.data() // Other state data
      });
    });

    console.log('States:', states);
    return states;
  } catch (error) {
    console.error('Error fetching states:', error);
    throw error;
  }
};

const fetchStoriesForState = async (stateId) => {
  try {
    const storiesRef = collection(db, `states/${stateId}/stories`);
    const querySnapshot = await getDocs(storiesRef);

    const stories = [];
    querySnapshot.forEach((doc) => {
      stories.push({
        id: doc.id, // Story document ID
        ...doc.data() // Other story data
      });
    });

    console.log(`Stories for state ${stateId}:`, stories);
    return stories;
  } catch (error) {
    console.error(`Error fetching stories for state ${stateId}:`, error);
    throw error;
  }
};

// Fetch a specific story by its ID
const fetchStoryById = async (stateId, storyId) => {
  try {
    const storyRef = doc(db, `states/${stateId}/stories`, storyId);
    const storyDoc = await getDoc(storyRef);

    if (storyDoc.exists()) {
      const story = {
        id: storyDoc.id,
        ...storyDoc.data(),
      };
      console.log(`Story for state ${stateId}:`, story);
      return story;
    } else {
      console.log("No such story!");
      return null;
    }
  } catch (error) {
    console.error(`Error fetching story with ID ${storyId}:`, error.message);
    throw error;
  }
};


export {
  fetchAllStates,
  fetchStoriesForState,
  fetchStoryById
}