import { BookDto as V1 } from './dto';

export type BookDto = Partial<V1>;
export { default as dto2props } from './toProps';
