import useSubjectsStore from '@/stores/subjects';

const useCategories = () => {
  const subjectStore = useSubjectsStore();
  const names = ['all', 'UI', 'UX', 'enhancement', 'bug', 'feature'];
  const presentCategories = () => {
    const names: any = [];
    if (subjectStore.GET_SUBJECTS !== undefined) {
      subjectStore.GET_SUBJECTS.map((item) => names.push(item.category));
      console.log(names);
      return [...new Set(names)];
    }
  };
  const categories = () => names;
  return { presentCategories, categories };
};

export default useCategories;
