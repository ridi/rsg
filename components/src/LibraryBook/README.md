```js
const selected = true;
<LibraryBook.Thumbnail
  viewType={LibraryBook.VIEW_TYPE.Portrait}
  thumbnailUrl="//misc.ridibooks.com/cover/425063864/xlarge"
  adultBadge
  updateBadge
  ridiselect
  unitBook
  bookCount={50}
  bookCountUnit={LibraryBook.BOOK_COUNT_UNIT.Serial}
  bookCountWrapper={{
    wrapper: 'a',
    getProps() {
      return {
        href: '#',
      };
    },
  }}
  selectMode
  selected={selected}
  onSelected={() => {console.log('selected!')}}
  readingStatus={LibraryBook.READING_STATUS.New}
/>
```
```js
<LibraryBook.Thumbnail
  viewType={LibraryBook.VIEW_TYPE.Portrait}
  thumbnailUrl="//misc.ridibooks.com/cover/425063833/xlarge"
  adultBadge
  updateBadge
  ridiselect
  notAvailable={true}
  unitBook
  bookCount={50}
  bookCountUnit={LibraryBook.BOOK_COUNT_UNIT.Serial}
  bookCountWrapper={{
    wrapper: 'a',
    getProps() {
      return {
        href: '#',
      };
    },
  }}
  onSelected={() => {console.log('selected!')}}
  readingStatus={LibraryBook.READING_STATUS.New}
/>
```
```js
<LibraryBook.Thumbnail
  viewType={LibraryBook.VIEW_TYPE.Portrait}
  thumbnailUrl="//misc.ridibooks.com/cover/425063864/xlarge"
  adultBadge
  updateBadge
  ridiselect
  unitBook
  bookCount={50}
  bookCountUnit={LibraryBook.BOOK_COUNT_UNIT.Serial}
  bookCountWrapper={{
    wrapper: 'a',
    getProps() {
      return {
        href: '#',
      };
    },
  }}
  readingStatus={LibraryBook.READING_STATUS.Opened}
  readingProgress={20}
/>
```
```js
<LibraryBook.Thumbnail
  viewType={LibraryBook.VIEW_TYPE.Portrait}
  thumbnailUrl="//misc.ridibooks.com/cover/425063864/xlarge"
  adultBadge
  updateBadge
  ridiselect
  unitBook
  bookCount={50}
  bookCountUnit={LibraryBook.BOOK_COUNT_UNIT.Serial}
  downloadStatus={LibraryBook.DOWNLOAD_STATUS.Downloading}
/>
```
```js
<LibraryBook.Thumbnail
  viewType={LibraryBook.VIEW_TYPE.Portrait}
  thumbnailUrl="//misc.ridibooks.com/cover/425063864/xlarge"
  adultBadge
  updateBadge
  notAvailable
  expired
/>
```
```js
<LibraryBook.Thumbnail
  viewType={LibraryBook.VIEW_TYPE.Portrait}
  thumbnailUrl="//misc.ridibooks.com/cover/425063864/xlarge"
  adultBadge
  updateBadge
  ridiselect
  expired
/>
```
```js
<LibraryBook.PortraitBook
  thumbnailUrl="//misc.ridibooks.com/cover/425063864/xlarge"
  title="위대한 소설가"
  downloadStatus={LibraryBook.DOWNLOAD_STATUS.Downloading}
  downloadProgress={80}
/>
<LibraryBook.PortraitBook
  thumbnailUrl="//misc.ridibooks.com/cover/425063864/xlarge"
  title="위대한 소설가"
  downloadStatus={LibraryBook.DOWNLOAD_STATUS.Downloading}
  downloadProgress={80}
/>
```
```js
<div style={{ borderBottom: '1px dotted red' }}>
  <LibraryBook.LandscapeBook
    thumbnailUrl="//misc.ridibooks.com/cover/425063864/xlarge"
    thumbnailWidth={50}
    title="위대한 소설가"
    downloadStatus={LibraryBook.DOWNLOAD_STATUS.Downloading}
    downloadProgress={80}
    downloadSize={13.4}
    expiredAt="21일 4시간 남음"
  />
</div>
```
```js
<div style={{ borderBottom: '1px dotted red' }}>
  <LibraryBook.LandscapeBook
    thumbnailUrl="//misc.ridibooks.com/cover/425063864/xlarge"
    thumbnailWidth={60}
    title="위대한 소설가"
    author="냠냠냠"
    readingStatus={LibraryBook.READING_STATUS.Opened}
    readingProgress={30}
    annotations={{
      bookMarkCount: 4,
      highlightCount: 10,
      memoCount: 4,
    }}
    ridiselect
  />
</div>
```
```js
<div style={{ borderBottom: '1px dotted red' }}>
  <LibraryBook.LandscapeBook
    thumbnailUrl="//misc.ridibooks.com/cover/425063864/xlarge"
    thumbnailWidth={60}
    title="위대한 소설가"
    author="냠냠냠"
    unitBook
    readingStatus={LibraryBook.READING_STATUS.New}
    bookCount={50}
    bookCountUnit={LibraryBook.BOOK_COUNT_UNIT.Serial}
    bookCountWrapper={{
      wrapper: 'a',
      getProps() {
        return {
          href: '#',
        };
      },
    }}
  />
</div>
```
```js
<div className="CustomBook">
  <LibraryBook.ThumbnailImage
    thumbnailUrl="//misc.ridibooks.com/cover/425063864/xlarge"
  />
</div>
```
```js
<LibraryBook.DownloadButton
  downloadStatus={LibraryBook.DOWNLOAD_STATUS.Downloadable}
/>
<LibraryBook.DownloadButton
  downloadStatus={LibraryBook.DOWNLOAD_STATUS.Wating}
/>
<LibraryBook.DownloadButton
  downloadStatus={LibraryBook.DOWNLOAD_STATUS.Downloading}
  downloadProgress={80}
/>
```
