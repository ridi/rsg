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
              <Thumbnail.coverImage required />
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
                  <Metadata.starRate required />
                  <Metadata.authors simple={true} required />
                  <Metadata.seriesCount required />
                  <Metadata.publisher required />
                </> : <>
                  <Metadata.authors simple={true} required />
                  <Metadata.seriesCount required />
                  <Metadata.publisher required />
                  <Metadata.starRate required />
                </>}
                {appendToMetadataInfo}
              </div>
              {metadataExpanded && <Metadata.description required />}
              <Metadata.price hideSeries={!metadataExpanded} required />
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
