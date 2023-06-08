import {
  collection,
  doc,
  addDoc,
  setDoc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '@/firebase';

const addSurvey = async (user, title, questions) => {
  await setDoc(doc(db, user.uid, title), {
    title,
    questions,
  });
};

export { addSurvey };
