import { collection, db, doc, getDoc, setDoc } from '@/firebase';

import data from './data';

import type Request from '@/types/request';
const useResource = () => {
  const fetchRequest = async () => {
    try {
      const docRef = doc(db, 'request', 'requestFromFb');
      const citiesRef = collection(db, 'request');
      const snap = await getDoc(docRef);
      await setDoc(doc(citiesRef, 'requestFromFb'), data);
      return snap.data() as Request;
    } catch (error) {
      console.log((error as Error).message);
      return null;
    }
  };

  return { fetchRequest };
};

export default useResource;
