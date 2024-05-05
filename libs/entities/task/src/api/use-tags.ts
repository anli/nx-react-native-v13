import { useLocalStorage } from '@shared/lib';
import { Tag, tagsStorageKey } from './tag';


export const useTags = () => {
  const [data] = useLocalStorage.Object<Tag[] | undefined>(tagsStorageKey);

  return { data };
};
