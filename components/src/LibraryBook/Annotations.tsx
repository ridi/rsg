import * as React from 'react';

export interface AnnotationsProps {
  bookMarkCount: number;
  highlightCount: number;
  memoCount: number;
}

export const Annotations: React.SFC<{ annotations: AnnotationsProps }> = (props) => (
  <ul className="Annotations">
    <li className="Annotation_Item">북마크: {props.annotations.bookMarkCount}</li>
    <li className="Annotation_Item">형광펜: {props.annotations.highlightCount}</li>
    <li className="Annotation_Item">메모: {props.annotations.memoCount}</li>
  </ul>
);
