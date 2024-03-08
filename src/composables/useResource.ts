import { data } from '@/data/data';
import { addDoc, collection, db, getDocs } from '@/firebase';

import type { Subject } from '@/types/request';

const useResource = () => {
  const fetchRequest = async () => {
    try {
      const subjects: Subject[] = [];
      // fill firebase with collections
      // const { requests } = data;
      // for (let i = 0; i < requests.length; i++) {
      //   await addDoc(collection(db, 'subjects'), requests[i]);
      // }
      const querySnapshot = await getDocs(collection(db, 'subjects'));
      querySnapshot.forEach((doc) => {
        const subject = doc.data();
        subjects.push(subject as Subject);
      });
      return data;
    } catch (error) {
      console.log((error as Error).message);
      return null;
    }
  };

  return { fetchRequest };
};

export default useResource;
