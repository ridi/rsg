import classNames from 'classnames';
import * as React from 'react';

import { Book } from '../index';
import { Preset } from './type';

export type Props = {
  metadataExpanded?: boolean;
};

export type Slots = {
  appendToMetadataInfo?: JSX.Element;
};

const Landscape: Preset<Props, Slots> = (props) => {
  const {
    slots,
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
      {({ Thumbnail, Metadata }) => {
        const { appendToMetadataInfo } = slots({ Thumbnail, Metadata });
        return (
          <>
            <Thumbnail.wrapper thumbnailSize={thumbnailSize}>
              <Thumbnail.coverImage />
              <Thumbnail.adultOnlyBadge />
              <Thumbnail.circleBadge />
              <Thumbnail.hdBadge />
              <Thumbnail.setBooklet />
            </Thumbnail.wrapper>
            <Metadata.wrapper layout={metadataExpanded && 'landscape'}>
              <Metadata.title />
              <Metadata.subTitle />
              <div className="RSGBookMetadata_Info">
                {metadataExpanded ? <>
                  <Metadata.starRate />
                  <Metadata.authors simple={true} />
                  <Metadata.seriesCount />
                  <Metadata.publisher />
                </> : <>
                  <Metadata.authors simple={true} />
                  <Metadata.seriesCount />
                  <Metadata.publisher />
                  <Metadata.starRate />
                </>}
                {appendToMetadataInfo}
              </div>
              {metadataExpanded && <Metadata.description />}
              <Metadata.price hideSeries={!metadataExpanded} />
              <Metadata.bookTypeBadge />
              <Metadata.someDealBadge />
            </Metadata.wrapper>
          </>
        );
      }}
    </Book>
  );
};

Landscape.displayName = 'Book.Landscape';
Landscape.defaultProps = {
  slots: () => ({}),
};

export default Landscape;
