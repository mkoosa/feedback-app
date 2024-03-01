import useMainStore from '@/stores/main';

const useCategories = () => {
  const mainStore = useMainStore();
  const names = ['all', 'UI', 'UX', 'enhancement', 'bug', 'feature'];
  const presentCategories = () => {
    const names: any = [];
    if (mainStore.GET_SUBJECTS !== undefined) {
      mainStore.GET_SUBJECTS.map((item) => names.push(item.category));
      console.log(names);
      return [...new Set(names)];
    }
  };
  const categories = () => names;
  return { presentCategories, categories };
};

export default useCategories;
