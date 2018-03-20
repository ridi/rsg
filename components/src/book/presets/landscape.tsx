import classNames from 'classnames';
import * as React from 'react';

import { Book } from '../index';
import { Preset } from '../presets';

const Landscape: Preset<{ metadataExpanded?: boolean }> = (props) => {
  const {
    children,
    className,
    thumbnailSize,
    metadataExpanded,
    ...componentProps,
  } = props;

  return (
    <Book
      {...componentProps}
      className={classNames('RSGBook-layout-landscape', className)}
    >
      {(Root) => children((({ Thumbnail, Metadata }) => (
        <>
          <Thumbnail.wrapper key="Thumbnail.wrapper" thumbnailSize={thumbnailSize}>
            <Thumbnail.coverImage key="Thumbnail.coverImage" />
            <Thumbnail.circleBadge key="Thumbnail.circleBadge" />
            <Thumbnail.hdBadge key="Thumbnail.hdBadge" />
            <Thumbnail.setBooklet key="Thumbnail.setBooklet" />
          </Thumbnail.wrapper>
          <Metadata.wrapper key="Metadata.wrapper" layout={metadataExpanded && 'landscape'}>
            <Metadata.title key="Metadata.title" />
            <Metadata.subTitle key="Metadata.subTitle" />
            <div key="Metadata.info" className="RSGBookMetadata_Info">
              {metadataExpanded ? <>
                <Metadata.starRate key="Metadata.starRate" />
                <Metadata.authors key="Metadata.authors" simple={true} />
                <Metadata.seriesCount key="Metadata.seriesCount" />
                <Metadata.publisher key="Metadata.publisher" />
              </> : <>
                <Metadata.authors key="Metadata.authors" simple={true} />
                <Metadata.seriesCount key="Metadata.seriesCount" />
                <Metadata.publisher key="Metadata.publisher" />
                <Metadata.starRate key="Metadata.starRate" />
              </>}
            </div>
            {metadataExpanded && <Metadata.description key="Metadata.description" />}
            <Metadata.price key="Metadata.price" />
            <Metadata.bookTypeBadge key="Metadata.bookTypeBadge" />
            <Metadata.someDealBadge key="Metadata.someDealBadge" />
          </Metadata.wrapper>
        </>
      ))(Root), Root)}
    </Book>
  );
};

Landscape.displayName = 'Book.Landscape';
Landscape.defaultProps = {
  children: (el) => el,
};

export default Landscape;
