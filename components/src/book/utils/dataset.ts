import { kebabCase, mapKeys } from 'lodash-es';

export type Dataset = { [key: string]: string };
export default (dataset: Dataset): Dataset => {
  return mapKeys(dataset, (value, key) => `data-${kebabCase(key)}`);
};
