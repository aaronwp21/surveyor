import {
  collection,
  doc,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '@/firebase';
// import { auth } from '@/firebase';

const addSurvey = async (user, title, questions) => {
  await setDoc(doc(db, user.uid, title), {
    title,
    questions,
  });
};

// const getSurveys = async () => {
//   let surveyArray = [];
//   const querySnapshot = await getDocs(collection(db, auth.currentUser.uid));
//   querySnapshot.forEach((doc) => {
//     surveyArray.push(doc.data())
//   });
//   return surveyArray;
// }

export { addSurvey };
