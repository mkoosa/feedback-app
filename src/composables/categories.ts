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

  const filterByChosenOption = (value: string) => {
    switch (value) {
      case 'least upvotes':
        return subjectStore.GET_SUBJECTS?.sort((a, b) => Number(a.upvotes) - Number(b.upvotes));

      case 'most upvotes':
        return subjectStore.GET_SUBJECTS?.sort((a, b) => Number(b.upvotes) - Number(a.upvotes));

      case 'least comments':
        return subjectStore.GET_SUBJECTS?.sort(
          (a, b) => (Number(a.comments?.length) | 0) - (Number(b.comments?.length) | 0)
        );
      case 'most comments':
        return subjectStore.GET_SUBJECTS?.sort(
          (a, b) => (Number(b.comments?.length) | 0) - (Number(a.comments?.length) | 0)
        );
      default:
        return subjectStore.GET_SUBJECTS;
    }
  };

  const categories = (): string[] => names;

  return { presentCategories, categories, filterByChosenOption };
};

export default useCategories;
