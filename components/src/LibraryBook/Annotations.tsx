import { Icon } from '@ridi/rsg';
import * as React from 'react';

export interface AnnotationsProps {
  bookMarkCount: number;
  highlightCount: number;
  memoCount: number;
}

export const Annotations: React.SFC<{ annotations: AnnotationsProps }> = (props) => (
  <ul className="Annotations">
    <li className="Annotation_Item">
      <span className="Annotation_Title">북마크: </span>
      <Icon className="Annotation_Icon Annotation_Icon-bookMark" name="book_mark_1"/>
      <span className="Annotation_Count">{props.annotations.bookMarkCount}</span>
    </li>
    <li className="Annotation_Item">
      <span className="Annotation_Title">형광펜: </span>
      <Icon className="Annotation_Icon Annotation_Icon-highlight" name="pencil_2"/>
      <span className="Annotation_Count">{props.annotations.highlightCount}</span>
    </li>
    <li className="Annotation_Item">
      <span className="Annotation_Title">메모: </span>
      <Icon className="Annotation_Icon Annotation_Icon-memo" name="message_1"/>
      <span className="Annotation_Count">{props.annotations.memoCount}</span>
    </li>
  </ul>
);
