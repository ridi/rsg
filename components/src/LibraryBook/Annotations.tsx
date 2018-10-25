import * as React from 'react';

export interface AnnotationsProps {
  BookMarkCount: number;
  HighlightCount: number;
  MemoCount: number;
}

export const Annotations: React.SFC<{ annotations: AnnotationsProps }> = (props) => (
  <ul>
    <li>북마크: { props.annotations.BookMarkCount }</li>
    <li>형광펜: { props.annotations.HighlightCount }</li>
    <li>메모: { props.annotations.MemoCount }</li>
  </ul>
);
