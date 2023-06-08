import {
  collection,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '@/firebase';

const addSurvey = async (user, questions) => {
  await addDoc(collection(db, user.uid), {
    questions,
  });
};

export { addSurvey };
